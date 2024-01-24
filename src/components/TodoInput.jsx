import React, { useState } from "react";
import classes from "./TodoInput.module.css";

export default function TodoInput({ isDarkMode, onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${classes.form} ${isDarkMode && classes.dark}`}
    >
      <input
        className={classes.input}
        placeholder="Add Todo"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={classes.button}>Add</button>
    </form>
  );
}
