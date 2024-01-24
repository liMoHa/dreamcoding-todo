import React from "react";
import classes from "./TodoInput.module.css";

export default function TodoInput({ isDarkMode }) {
  return (
    <form className={`${classes.form} ${isDarkMode && classes.dark}`}>
      <input className={classes.input} placeholder="Add Todo" type="text" />
      <button className={classes.button}>Add</button>
    </form>
  );
}
