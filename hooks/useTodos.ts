import { TodoContext, TodoContextType } from "@/context/TodoContext";
import { useContext } from "react";

const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export default useTodos;
