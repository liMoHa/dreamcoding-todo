import classes from "./AppTodo.module.css"
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function AppTodo() {
  return (
    <div className={classes.container}>
      <TodoHeader />
      <TodoBody />
      <TodoInput />
    </div>
  );
}

export default AppTodo;
