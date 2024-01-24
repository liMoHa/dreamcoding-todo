import { useState } from "react";
import classes from "./AppTodo.module.css";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

function AppTodo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterId, setFilterId] = useState(-1);
  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      title: "공부",
      state: 0,
    },
    {
      id: uuidv4(),
      title: "독서",
      state: 1,
    },
  ]);

  const handleModeChange = () => {
    setIsDarkMode((mode) => !mode);
  };

  const handleTodoAdd = (input) => {
    setTodoList((todo) => [...todo, { id: uuidv4(), title: input, state: 0 }]);
  };

  const handleTodoRemove = (id) => {
    const newTodoList = [...todoList];
    const findIdx = newTodoList.findIndex((todo) => todo.id === id);

    newTodoList.splice(findIdx, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFilter = (e) => {
    const id = Number(e.target.id);
    setFilterId(id);
  };

  const handleTodoStateChange = (id) => {
    // refactoring
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, state: Number(!todo.state) };
      return todo;
    });

    setTodoList(newTodoList);
  };

  return (
    <div className={`${classes.container} ${isDarkMode && classes.dark}`}>
      <TodoHeader
        isDarkMode={isDarkMode}
        onModeChange={handleModeChange}
        onTodoFilter={handleTodoFilter}
      />
      <TodoBody
        isDarkMode={isDarkMode}
        todoList={todoList}
        onTodoStateChange={handleTodoStateChange}
        onTodoRemove={handleTodoRemove}
        filterId={filterId}
      />
      <TodoInput isDarkMode={isDarkMode} onSubmit={handleTodoAdd} />
    </div>
  );
}

export default AppTodo;
