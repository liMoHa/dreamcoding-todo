import React from "react";
import { IoMdSunny } from "react-icons/io";
import classes from "./TodoHeader.module.css";

export default function TodoHeader() {
  return (
    <header className={classes.header}>
      <IoMdSunny />
      <div className={classes.header__right}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </header>
  );
}
