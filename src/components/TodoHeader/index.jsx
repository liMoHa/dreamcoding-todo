import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./index.module.css";

export default function TodoHeader({
  onFilterChange,
  selectedFilter,
  filters,
}) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode, "isDarkMode");

  return (
    <header className={`${styles.header} ${isDarkMode && styles.dark}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter) => (
          <li
            key={filter}
            className={`${filter === selectedFilter && styles.selectedFilter}`}
          >
            <button
              onClick={() => {
                onFilterChange(filter);
              }}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
