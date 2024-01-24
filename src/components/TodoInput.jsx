import React from "react";
import classes from "./TodoInput.module.css";

export default function TodoInput() {
  return (
    <form className={classes.form}>
      <input className={classes.input} placeholder="Add Todo" type="text" />
      <button className={classes.button}>Add</button>
    </form>
  );
}
