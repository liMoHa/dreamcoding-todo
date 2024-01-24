import { useState } from "react";
import classes from "./AppTodo.module.css";
import TodoBody from "./components/TodoBody";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function AppTodo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      title: "공부",
      state: 0,
    },
    {
      title: "독서",
      state: 1,
    },
  ]);

  const handleModeChange = () => {
    setIsDarkMode((mode) => !mode);
  };

  const handleTodoAdd = (input) => {
    setTodoList((todo) => [...todo, { title: input, state: 0 }]);
  };

  const handleTodoRemove = (idx) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
  };

  //   const handleTodoFilter = (e) => {
  //     console.log(e.target.id);
  //     const id =  e.target.id;
  //     const newTodoList = [...todoList]
  //     let filteredTodoList = null;
  //     switch (id){
  //       case 'all':
  //         filteredTodoList = newTodoList;
  //         break;
  //       case 'active':
  //         newTodoList.filter(todo => )
  //       case 'completed':
  //     }

  // setTodoList(filteredTodoList)

  //   };

  const handleTodoStateChange = (changeIdx) => {
    // refactoring
    const newTodoList = todoList.map((todo, idx) => {
      if (idx === changeIdx) return { ...todo, state: !todo.state };
      return todo;
    });

    setTodoList(newTodoList);
  };

  return (
    <div className={`${classes.container} ${isDarkMode && classes.dark}`}>
      <TodoHeader
        isDarkMode={isDarkMode}
        onModeChange={handleModeChange}
        // onTodoFilter={handleTodoFilter}
      />
      <TodoBody
        isDarkMode={isDarkMode}
        todoList={todoList}
        onTodoStateChange={handleTodoStateChange}
        onTodoRemove={handleTodoRemove}
      />
      <TodoInput isDarkMode={isDarkMode} onSubmit={handleTodoAdd} />
    </div>
  );
}

export default AppTodo;
