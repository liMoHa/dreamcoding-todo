import { useContext, useRef } from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoBody({ todoList, selectedMenu, onTodoAction, todolistRef }) {
  const theme = useContext(ThemeContext);
  

  return (
    <section
      ref={todolistRef}
      className={`${classes.body} ${theme === "dark" && classes.dark}`}
    >
      {todoList.length < 1 ? (
        <p>할일을 추가하세요!</p>
      ) : (
        <ul className={classes.list}>
          {todoList
            .filter((todo) => {
              if (selectedMenu === -1) return true;
              else if (todo.state === selectedMenu) return true;
              else return false;
            })
            .map((todo) => (
              <Todo key={todo.id} todo={todo} onTodoAction={onTodoAction} />
            ))}
        </ul>
      )}
    </section>
  );
}

export function Todo({ todo, onTodoAction }) {
  const { id, title, state } = todo;

  return (
    <li className={classes.item}>
      <div className={`${classes.todo} ${state && classes.done}`}>
        <button
          onClick={() => {
            onTodoAction("update", id);
          }}
          className={classes.checkbox}
        >
          {state ? <FaRegSquareCheck /> : <FaRegSquare />}
        </button>
        <span>{title}</span>
      </div>
      <button
        onClick={() => onTodoAction("remove", id)}
        className={classes.trash}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
