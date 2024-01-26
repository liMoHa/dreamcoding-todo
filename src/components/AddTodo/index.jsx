import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";

export default function AddTodo({ selectedMenu }) {
  const [todoList, setTodoList] = useState([]);
  const [action, setAction] = useState(undefined);
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
        selectedMenu={selectedMenu}
      />
      <TodoInput onSubmit={handleTodoAction} />
    </section>
  );
}
