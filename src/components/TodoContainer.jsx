import { useContext, useState } from "react";

import classes from "./TodoContainer.module.css";
import { ThemeContext } from "../context/ThemeContext";
import TodoHeader from "./TodoHeader";
import AddTodo from "./AddTodo";

export default function TodoContainer({ onModeChange }) {
  const filters = ["all", "active", "completed"];
  const theme = useContext(ThemeContext);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  return (
    <section
      className={`${classes.container} ${theme === "dark" && classes.dark}`}
    >
      <TodoHeader
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onModeChange={onModeChange}
      />
      <AddTodo selectedFilter={selectedFilter} />
    </section>
  );
}
