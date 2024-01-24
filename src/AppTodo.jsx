import React, { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import { ThemeContext } from "./context/ThemeContext";

export default function AppTodo() {
  const [theme, setTheme] = useState("light");
  const handleModeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <TodoContainer onModeChange={handleModeChange}/>
    </ThemeContext.Provider>
  );
}
