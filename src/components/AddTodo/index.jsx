import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";

export default function AddTodo({ selectedMenu }) {
  const [todoList, setTodoList] = useState([]);
  const todolistRef = useRef(null);

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

  // 근데 이게 좋은 소스인지는 모르겄다..ㅎㅎ
  useEffect(() => {
    todolistRef.current.scrollTop = todolistRef.current.scrollHeight;
  }, [todoList]);

  function setToStorage(value) {
    localStorage.setItem("todoList", JSON.stringify(value));
  }

  const handleTodoAdd = (input) => {
    let newTodoList = null;
    setTodoList((todo) => {
      newTodoList = [...todo, input];
      return newTodoList;
    });

    return newTodoList;
  };

  const handleTodoStateChange = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, state: Number(!todo.state) };
      return todo;
    });
    setTodoList(newTodoList);

    return newTodoList;
  };

  const handleTodoRemove = (id) => {
    const newTodoList = [...todoList];
    const findIdx = newTodoList.findIndex((todo) => todo.id === id);

    newTodoList.splice(findIdx, 1);
    setTodoList(newTodoList);

    return newTodoList;
  };

  const handleTodoAction = (action, value) => {
    let newTodoList = null;
    switch (action) {
      case "add":
        newTodoList = handleTodoAdd(value);
        break;
      case "update":
        newTodoList = handleTodoStateChange(value);
        break;
      case "remove":
        newTodoList = handleTodoRemove(value);
        break;
      default:
        throw new Error("invalid action: " + action);
    }

    setToStorage(newTodoList);
  };

  return (
    <section>
      <TodoBody
        todolistRef={todolistRef}
        todoList={todoList}
        onTodoAction={handleTodoAction}
        selectedMenu={selectedMenu}
      />
      <TodoInput onSubmit={handleTodoAction} />
    </section>
  );
}
