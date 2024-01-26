import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";

export default function AddTodo({ selectedFilter }) {
  const [todoList, setTodoList] = useState([]);
  const [action, setAction] = useState(undefined);
  const todolistRef = useRef(null);

  // 컴포넌트가 렌더링되면 localStorage에서 값을 가져옴.
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todoList")) ?? [
      {
        id: uuidv4(),
        title: "할 일을 추가 하세요",
        state: "active",
      },
    ];
    setTodoList(todo);
  }, []);

  useEffect(() => {
    //  값을 추가하는 경우에만 스크롤 가장 아래로 내리기
    if (action === "add") {
      todolistRef.current.scrollTop = todolistRef.current.scrollHeight;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleTodoStateChange = (updated) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === updated.id ? updated : todo
    );
    setTodoList(newTodoList);

    return newTodoList;
  };

  const handleTodoRemove = (removed) => {
    const newTodoList = todoList.filter((todo) => todo.id !== removed.id);
    setTodoList(newTodoList);

    return newTodoList;
  };

  const handleTodoAction = (action, value) => {
    let newTodoList = null;
    setAction(action);
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
        selectedFilter={selectedFilter}
      />
      <TodoInput onSubmit={handleTodoAction} />
    </section>
  );
}
