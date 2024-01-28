import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useDarkMode } from "../../context/DarkModeContext";

import styles from "./index.module.css";

export default function TodoInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const { isDarkMode } = useDarkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      alert("1개 이상의 텍스트를 입력하세요!");
      return;
    }
    onSubmit("add", { id: uuidv4(), title: input, state: "active" });
    setInput(""); // 값 비우는 방법?
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${isDarkMode === "dark" && styles.dark}`}
    >
      <input
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
        type="text"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
