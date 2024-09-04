"use client";

import DesktopCanvas from "@/components/DesktopCanvas";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Editor() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (): void => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index: number): void => {
    const remainingTodos = todos.filter((_, i: number) => i !== index);
    setTodos(remainingTodos);
  };

  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r w-96 py-4 px-6 flex flex-col gap-12">
        <div className="flex items-center gap-2">
          <Image height={20} width={20} src="/logo.png" alt="logo" />
          <h1
            className={`font-sans tracking-tight cursor-pointer font-bold text-lg text-black`}
          >
            stick it.
          </h1>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-2 text-xs">
            <Label htmlFor="orientation">Orientation</Label>
            <ToggleGroup type="single" defaultValue="landscape">
              <ToggleGroupItem className="text-xs" value="landscape">
                Landscape
              </ToggleGroupItem>
              <ToggleGroupItem className="text-xs" value="portrait">
                Portrait
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="todo">Todo</Label>
            <div className="flex gap-2">
              <Input
                id="todo"
                placeholder="Add a todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTodo();
                  }
                }}
              />
              <Button onClick={addTodo}>Add</Button>
            </div>

            <div className="flex flex-col gap-3">
              {todos.map((todo, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Checkbox />
                    <span className="text-sm">{todo}</span>
                  </div>
                  <Trash2
                    onClick={() => deleteTodo(index)}
                    className="w-4 h-4 mx-1 flex-shrink-0 text-red-600 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4">
        <DesktopCanvas todos={todos} />
      </main>
    </div>
  );
}
