import React from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import classes from "./TodoHeader.module.css";

export default function TodoHeader({ isDarkMode, onModeChange, onTodoFilter }) {
  return (
    <header className={`${classes.header} ${isDarkMode && classes.dark}`}>
      <button onClick={onModeChange}>
        {isDarkMode ? <IoMdMoon /> : <IoMdSunny />}
      </button>
      <div onClick={onTodoFilter} className={classes.header__right}>
        <button id={-1}>All</button>
        <button id={0}>Active</button>
        <button id={1}>Completed</button>
      </div>
    </header>
  );
}
