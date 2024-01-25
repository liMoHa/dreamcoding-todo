import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";

export default function AddTodo({ selectedMenu }) {
  const [todoList, setTodoList] = useState([]);

  // 컴포넌트가 렌더링되면 localStorage에서 값을 가져옴.
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todoList")) ?? [
      {
        id: uuidv4(),
        title: "할 일을 추가 하세요",
        state: 0,
      },
    ];
    setTodoList(todo);
  }, []);

  function setToStorage(value) {
    localStorage.setItem("todoList", JSON.stringify(value));
  }

  const handleTodoAdd = (input) => {
    // 요소가 추가될 때 스크롤은 항상아래에 가면 좋겠음.
    setTodoList((todo) => {
      const newTodo = [...todo, { id: uuidv4(), title: input, state: 0 }];
      setToStorage(newTodo);
      return newTodo;
    });
  };

  const handleTodoStateChange = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, state: Number(!todo.state) };
      return todo;
    });

    setToStorage(newTodoList);
    setTodoList(newTodoList);
  };

  const handleTodoRemove = (id) => {
    const newTodoList = [...todoList];
    const findIdx = newTodoList.findIndex((todo) => todo.id === id);

    newTodoList.splice(findIdx, 1);
    setToStorage(newTodoList);
    setTodoList(newTodoList);
  };

  return (
    <section>
      <TodoBody
        todoList={todoList}
        onTodoStateChange={handleTodoStateChange}
        onTodoRemove={handleTodoRemove}
        selectedMenu={selectedMenu}
      />
      <TodoInput onSubmit={handleTodoAdd} />
    </section>
  );
}
