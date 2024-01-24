import { v4 as uuidv4 } from "uuid";

import { useContext, useState } from "react";

import classes from "./TodoContainer.module.css";
import { ThemeContext } from "../context/ThemeContext";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoInput from "./TodoInput";

export default function TodoContainer({ onModeChange }) {
  const theme = useContext(ThemeContext);
  const [selectedMenu, setSelectedMenu] = useState(-1);
  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      title: "할 일 추가하기",
      state: 0,
    },
  ]);

  const handleTodoFilter = (e) => {
    const id = Number(e.target.id);
    setSelectedMenu(id);
  };

  const handleTodoAdd = (input) => {
    // 요소가 추가될 때 스크롤은 항상아래에 가면 좋겠음.
    // ref?
    setTodoList((todo) => [...todo, { id: uuidv4(), title: input, state: 0 }]);
  };

  const handleTodoStateChange = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, state: Number(!todo.state) };
      return todo;
    });

    setTodoList(newTodoList);
  };

  const handleTodoRemove = (id) => {
    const newTodoList = [...todoList];
    const findIdx = newTodoList.findIndex((todo) => todo.id === id);

    newTodoList.splice(findIdx, 1);
    setTodoList(newTodoList);
  };

  console.log(theme);
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
