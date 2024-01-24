import React from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function TodoBody({
  isDarkMode,
  todoList,
  filterId,
  onTodoRemove,
  onTodoStateChange,
}) {
  return (
    <div className={`${classes.body} ${isDarkMode && classes.dark}`}>
      {todoList.length < 1 ? (
        <>할일을 추가하세요!</>
      ) : (
        <ul className={classes.list}>
          {todoList
            .filter((todo) => {
              if (filterId === -1) return true;
              else if (todo.state === filterId) return true;
              else return false;
            })
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onTodoRemove={onTodoRemove}
                onTodoStateChange={onTodoStateChange}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export function Todo({ todo, onTodoStateChange, onTodoRemove }) {
  const { id, title, state } = todo;

  return (
    <li className={classes.item}>
      <div className={`${classes.todo} ${state ? classes.done : ""}`}>
        <button
          onClick={() => onTodoStateChange(id)}
          className={classes.checkbox}
        >
          {state ? <FaRegSquareCheck /> : <FaRegSquare />}
        </button>
        <span>{title}</span>
      </div>
      <button onClick={() => onTodoRemove(id)} className={classes.trash}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
