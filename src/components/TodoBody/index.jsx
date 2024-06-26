import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./index.module.css";

export default function TodoBody({ filteredTodos, onTodoAction, todolistRef }) {
  const { isDarkMode } = useDarkMode();

  return (
    <ul
      ref={todolistRef}
      className={`${styles.container} ${isDarkMode && styles.dark}`}
    >
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} onTodoAction={onTodoAction} />
      ))}
    </ul>
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
    <li className={styles.item}>
      <div className={`${styles.todo} ${state === "completed" && styles.done}`}>
        <button onClick={handleChange} className={styles.checkbox}>
          {state === "active" ? <FaRegSquare /> : <FaRegSquareCheck />}
        </button>
        <span>{title}</span>
      </div>
      <button onClick={handleRemove} className={styles.trash}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
