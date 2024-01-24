import React from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function TodoBody({ isDarkMode }) {
  const isDone = true;
  return (
    <div className={`${classes.body} ${isDarkMode && classes.dark}`}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <div className={`${classes.todo} ${isDone ? classes.done : ""}`}>
            <button className={classes.checkbox}>
              {isDone ? <FaRegSquareCheck /> : <FaRegSquare />}
            </button>
            <span>공부</span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
      </ul>
    </div>
  );
}
