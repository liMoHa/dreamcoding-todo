import { useContext, useState } from "react";

import classes from "./TodoContainer.module.css";
import { ThemeContext } from "../context/ThemeContext";
import TodoHeader from "./TodoHeader";
import AddTodo from "./AddTodo";

export default function TodoContainer({ onModeChange }) {
  const theme = useContext(ThemeContext);
  const [selectedMenu, setSelectedMenu] = useState(-1);

  const handleTodoFilter = (e) => {
    const id = Number(e.target.id);
    setSelectedMenu(id);
  };

  return (
    <section
      className={`${classes.container} ${theme === "dark" && classes.dark}`}
    >
      <TodoHeader
        onModeChange={onModeChange}
        onTodoFilter={handleTodoFilter}
        selectedMenu={selectedMenu}
      />
      <AddTodo selectedMenu={selectedMenu} />
    </section>
  );
}
