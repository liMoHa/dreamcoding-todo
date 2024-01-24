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
        <button id="all">All</button>
        <button id="active">Active</button>
        <button id="completed">Completed</button>
      </div>
    </header>
  );
}
