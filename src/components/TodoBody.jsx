import { useContext } from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoBody({
  todoList,
  selectedFilter,
  onTodoAction,
  todolistRef,
}) {
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
              return selectedFilter === "all"
                ? true
                : selectedFilter === todo.state;
              // if (selectedFilter === "all") return true;
              // else if (todo.state === "active") return todo.state === "active";
              // else return false;
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
  const { title, state } = todo;

  const handleChange = () => {
    const state = todo.state === "active" ? "completed" : "active";
    const newState = { ...todo, state };
    onTodoAction("update", newState);
  };

  const handleRemove = () => {
    onTodoAction("remove", todo);
  };

  return (
    <li className={classes.item}>
      <div
        className={`${classes.todo} ${state === "completed" && classes.done}`}
      >
        <button onClick={handleChange} className={classes.checkbox}>
          {state === "active" ? <FaRegSquare /> : <FaRegSquareCheck />}
        </button>
        <span>{title}</span>
      </div>
      <button onClick={handleRemove} className={classes.trash}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
