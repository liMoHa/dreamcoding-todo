import { useState } from "react";
import classes from "./TodoInput.module.css";

export default function TodoInput({ isDarkMode, onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 1) return;
    onSubmit(input);
    setInput(""); // 값 비우는 방법?
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${classes.form} ${isDarkMode && classes.dark}`}
    >
      <input
        className={classes.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
        type="text"
      />
      <button className={classes.button}>Add</button>
    </form>
  );
}
