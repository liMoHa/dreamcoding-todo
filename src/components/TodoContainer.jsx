import { v4 as uuidv4 } from "uuid";

import { useContext, useEffect, useState } from "react";

import classes from "./TodoContainer.module.css";
import { ThemeContext } from "../context/ThemeContext";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoInput from "./TodoInput";

export default function TodoContainer({ onModeChange }) {
  const theme = useContext(ThemeContext);
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [todoList, setTodoList] = useState([]);

  // 컴포넌트가 렌더링되면 localStorage에서 값을 가져옴.
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todoList")) ?? [];
    setTodoList(todo);
  }, []);

  function setToStorage(value) {
    localStorage.setItem("todoList", JSON.stringify(value));
  }
  const handleTodoFilter = (e) => {
    const id = Number(e.target.id);
    setSelectedMenu(id);
  };

  const handleTodoAdd = (input) => {
    // 요소가 추가될 때 스크롤은 항상아래에 가면 좋겠음.
    // ref?
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
    <div className={`${classes.container} ${theme === "dark" && classes.dark}`}>
      <TodoHeader
        onModeChange={onModeChange}
        onTodoFilter={handleTodoFilter}
        selectedMenu={selectedMenu}
      />
      <TodoBody
        todoList={todoList}
        onTodoStateChange={handleTodoStateChange}
        onTodoRemove={handleTodoRemove}
        filterId={selectedMenu}
      />
      <TodoInput onSubmit={handleTodoAdd} />
    </div>
  );
}
