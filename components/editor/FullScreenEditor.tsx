"use client";

import DesktopCanvas from "@/components/editor/DesktopCanvas";
import MobileCanvas from "@/components/editor/MobileCanvas";
import Sidebar from "@/components/editor/Sidebar";
import { useState } from "react";

export default function FullScreenEditor() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isDesktopView, setIsDesktopView] = useState<boolean>(true);

  const filteredTodos = todos.filter((todo) => todo.isChecked);

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        todos={todos}
        setTodos={setTodos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        setIsDesktopView={setIsDesktopView}
      />

      <main className="flex-1 p-4">
        {isDesktopView ? (
          <DesktopCanvas todos={filteredTodos} />
        ) : (
          <MobileCanvas todos={filteredTodos} />
        )}
      </main>
    </div>
  );
}
