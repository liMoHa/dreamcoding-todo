import { useState } from "react";
import classes from "./AppTodo.module.css";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function AppTodo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todoList, setTodoList] = useState(["공부", "음악듣기", "노래"]);

  const handleModeChange = () => {
    setIsDarkMode((mode) => !mode);
  };

  const handleTodoSubmit = (input) => {
    console.log("submit", input);
    setTodoList((todo) => [...todo, input]);
  };

  const handleTodoRemove = (idx) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className={`${classes.container} ${isDarkMode && classes.dark}`}>
      <TodoHeader
        isDarkMode={isDarkMode}
        onModeChangeClick={handleModeChange}
      />
      <TodoBody
        isDarkMode={isDarkMode}
        todoList={todoList}
        onTodoRemove={handleTodoRemove}
      />
      <TodoInput isDarkMode={isDarkMode} onSubmit={handleTodoSubmit} />
    </div>
  );
}

export default AppTodo;
