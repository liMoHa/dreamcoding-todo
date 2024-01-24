import React from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import classes from "./TodoHeader.module.css";

export default function TodoHeader({ isDarkMode }) {
  return (
    <header className={`${classes.header} ${isDarkMode && classes.dark}`}>
      <button>{isDarkMode ? <IoMdMoon /> : <IoMdSunny />}</button>
      <div className={classes.header__right}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </header>
  );
}
