import React, { useState } from "react";

import { DarkModeProvider } from "./context/DarkModeContext";
import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";

export default function AppTodo() {
  const filters = ["all", "active", "completed"];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <TodoHeader
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <AddTodo selectedFilter={selectedFilter} />
    </DarkModeProvider>
  );
}
