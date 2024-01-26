import { useContext } from "react";

import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

import classes from "./TodoHeader.module.css";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoHeader({
  onModeChange,
  onFilterChange,
  selectedFilter,
  filters,
}) {
  const theme = useContext(ThemeContext);
  const isDark = theme === "dark";

  const handleFilterChange = (e) => {
    const currentFilter = e.target.name;
    onFilterChange(currentFilter);
  };

  return (
    <header className={`${classes.header} ${isDark && classes.dark}`}>
      <button onClick={onModeChange}>
        {isDark ? <IoMdSunny /> : <IoMdMoon />}
      </button>
      <div onClick={handleFilterChange} className={classes.header__right}>
        {filters.map((filter) => (
          <button
            name={filter}
            key={filter}
            className={`${filter === selectedFilter && classes.selectedFilter}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </header>
  );
}
