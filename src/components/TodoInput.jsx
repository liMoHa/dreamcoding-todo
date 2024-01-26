import { useContext, useState } from "react";
import classes from "./TodoInput.module.css";
import { ThemeContext } from "../context/ThemeContext";

import { v4 as uuidv4 } from "uuid";

export default function TodoInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const theme = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      alert("1개 이상의 텍스트를 입력하세요!");
      return;
    }
    onSubmit("add", { id: uuidv4(), title: input, state: 0 });
    setInput(""); // 값 비우는 방법?
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${classes.form} ${theme === "dark" && classes.dark}`}
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
