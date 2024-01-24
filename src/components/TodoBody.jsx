import React, { useState } from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function TodoBody({ isDarkMode, todoList }) {
  return (
    <div className={`${classes.body} ${isDarkMode && classes.dark}`}>
      <ul className={classes.list}>
        {todoList.map((todo, idx) => (
          <Todo key={`${todo}-${idx}`} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export function Todo({ todo }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <li className={classes.item}>
      <div className={`${classes.todo} ${isDone ? classes.done : ""}`}>
        <button
          onClick={() => setIsDone((check) => !check)}
          className={classes.checkbox}
        >
          {isDone ? <FaRegSquareCheck /> : <FaRegSquare />}
        </button>
        <span>{todo}</span>
      </div>
      <button className={classes.trash}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
