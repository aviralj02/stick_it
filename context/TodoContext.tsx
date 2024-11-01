"use client";

import React, { createContext, ReactNode, useState } from "react";

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string): void => {
    setTodos([...todos, { task, isChecked: true }]);
  };

  const deleteTodo = (index: number): void => {
    setTodos(todos.filter((_, i: number) => i !== index));
  };

  const updateTodo = (index: number): void => {
    const updatedTodos = todos.map((todo: Todo, i: number) =>
      i === index ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
