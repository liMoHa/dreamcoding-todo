import React from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

export default function TodoBody() {
  return (
    <div className={classes.body}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button  className={classes.checkbox}>
              <FaRegSquare />
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
