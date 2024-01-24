import { useContext } from "react";

import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

import classes from "./TodoHeader.module.css";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoHeader({
  onModeChange,
  onTodoFilter,
  selectedMenu,
}) {
  const menuItems = [
    {
      id: -1,
      title: "All",
    },
    {
      id: 0,
      title: "Active",
    },
    {
      id: 1,
      title: "Completed",
    },
  ];

  const theme = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <header className={`${classes.header} ${isDark && classes.dark}`}>
      <button onClick={onModeChange}>
        {isDark ? <IoMdSunny /> : <IoMdMoon />}
      </button>
      <div onClick={onTodoFilter} className={classes.header__right}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            id={item.id}
            className={`${item.id === selectedMenu && classes.selectedMenu}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </header>
  );
}
