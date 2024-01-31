import React, { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoBody from "../TodoBody";
import TodoInput from "../TodoInput";
import styles from "./index.module.css";

export default function AddTodo({ selectedFilter }) {
  const [todoList, setTodoList] = useState(readTodosFromLocalStorage);
  const [action, setAction] = useState(undefined);
  const todolistRef = useRef(null);

  useEffect(() => {
    if (action === "add") {
      todolistRef.current.scrollTop = todolistRef.current.scrollHeight;
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoList]);

  const handleTodoAdd = (input) => [...todoList, input];

  const handleTodoStateChange = (updated) =>
    todoList.map((todo) => (todo.id === updated.id ? updated : todo));

  const handleTodoRemove = (removed) =>
    todoList.filter((todo) => todo.id !== removed.id);

  const filteredTodos = useMemo(() => {
    return getFilteredTodo(todoList, selectedFilter);
  }, [todoList, selectedFilter]);

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

    setTodoList(newTodoList);
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

const defaultTodos = [
  {
    id: uuidv4(),
    title: "할 일을 추가 하세요",
    state: "active",
  },
];

function getFilteredTodo(todoList, filter) {
  if (filter === "all") return todoList;
  return todoList.filter((todo) => todo.state === filter);
}

const readTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todoList");
  return todos ? JSON.parse(todos) : defaultTodos;
};
