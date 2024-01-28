import React, { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";
import styles from "./index.module.css";

export default function AddTodo({ selectedFilter }) {
  const [todoList, setTodoList] = useState([]);
  const [action, setAction] = useState(undefined);
  const todolistRef = useRef(null);

  // 컴포넌트가 렌더링되면 localStorage에서 값을 가져옴.

  //   가장 마지막에 실행
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

  // selectedFilter값이 변경될 때만 다시 계산하고 싶음.
  const filteredTodos = useMemo(() => {
    console.log("실행");
    return getFilteredTodo(todoList, selectedFilter);
  }, [todoList, selectedFilter]);

  // 안에서 하는 일이 너무 많은데...
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
    <section className={styles.container}>
      <TodoBody
        todolistRef={todolistRef}
        filteredTodos={filteredTodos}
        onTodoAction={handleTodoAction}
        selectedFilter={selectedFilter}
      />
      <TodoInput onSubmit={handleTodoAction} />
    </section>
  );
}

// filtering된 값을 만들어주기
function getFilteredTodo(todoList, filter) {
  if (filter === "all") return todoList;
  return todoList.filter((todo) => todo.state === filter);
}

function setToStorage(value) {
  localStorage.setItem("todoList", JSON.stringify(value));
}
