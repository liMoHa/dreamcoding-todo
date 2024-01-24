import React from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function TodoBody({
  isDarkMode,
  todoList,
  onTodoRemove,
  onTodoStateChange,
}) {
  return (
    <div className={`${classes.body} ${isDarkMode && classes.dark}`}>
      <ul className={classes.list}>
        {todoList.map((todo, idx) => (
          <Todo
            key={`${todo}-${idx}`}
            todo={todo}
            idx={idx}
            onTodoRemove={onTodoRemove}
            onTodoStateChange={onTodoStateChange}
          />
        ))}
      </ul>
    </div>
  );
}

export function Todo({ todo, onTodoStateChange, onTodoRemove, idx }) {
  const { title, state } = todo;
  return (
    <li className={classes.item}>
      <div className={`${classes.todo} ${state ? classes.done : ""}`}>
        <button
          onClick={() => onTodoStateChange(idx)}
          className={classes.checkbox}
        >
          {state ? <FaRegSquareCheck /> : <FaRegSquare />}
        </button>
        <span>{title}</span>
      </div>
      <button onClick={() => onTodoRemove(idx)} className={classes.trash}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
