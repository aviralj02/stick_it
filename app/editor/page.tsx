"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useState } from "react";

export default function Editor() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r w-64 py-4 px-6 flex flex-col gap-16">
        <div className="flex items-center gap-2">
          <Image height={20} width={20} src="/logo.png" alt="logo" />
          <h1
            className={`font-sans tracking-tight cursor-pointer font-bold text-lg text-black`}
          >
            stick it.
          </h1>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <Label htmlFor="filters">Filters</Label>
          </div>
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
          <div className="flex flex-col gap-2">
            <Label htmlFor="todo">Todo</Label>
            <div className="flex">
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
            <div className="flex flex-col gap-2">
              {todos.map((todo, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox />
                  <span>{todo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4"></main>
    </div>
  );
}
