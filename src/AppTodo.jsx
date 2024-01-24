import classes from "./AppTodo.module.css";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function AppTodo() {
  const isDarkMode = false;
  return (
    <div className={`${classes.container} ${isDarkMode && classes.dark}`}>
      <TodoHeader isDarkMode={isDarkMode} />
      <TodoBody isDarkMode={isDarkMode} />
      <TodoInput isDarkMode={isDarkMode} />
    </div>
  );
}

export default AppTodo;
