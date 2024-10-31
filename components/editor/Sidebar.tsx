"use client";

import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import {
  PanelRightClose,
  PanelRightOpen,
  MonitorDot,
  TabletSmartphone,
  Trash2,
  Plus,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Checkbox } from "../ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  todos: Todo[];
  newTodo: string;
  setTodos: (todos: Todo[]) => void;
  setNewTodo: (newTodo: string) => void;
  setIsDesktopView: (state: boolean) => void;
};

const Sidebar = ({
  todos,
  newTodo,
  setTodos,
  setNewTodo,
  setIsDesktopView,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { task: newTodo.trim(), isChecked: true }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index: number): void => {
    const remainingTodos = todos.filter((_, i: number) => i !== index);
    setTodos(remainingTodos);
  };

  const updateTodos = (index: number): void => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <aside
      className={cn(
        "h-full bg-background border-r flex flex-col py-4 gap-12",
        "overflow-hidden transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-96 px-6"
      )}
    >
      <div
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "justify-between"
        )}
      >
        {!isCollapsed && (
          <Link href={"/"} className="flex items-center gap-2">
            <Image height={20} width={20} src="/logo.png" alt="logo" />

            <h1
              className={`font-sans tracking-tight cursor-pointer font-bold text-lg text-black`}
            >
              stick it.
            </h1>
          </Link>
        )}

        <button onClick={() => setIsCollapsed((prev) => !prev)}>
          {isCollapsed ? (
            <PanelRightClose className="w-6 h-auto" />
          ) : (
            <PanelRightOpen className="w-6 h-auto" />
          )}
        </button>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="flex flex-col gap-2 text-xs">
          {!isCollapsed && <Label htmlFor="orientation">Orientation</Label>}
          <ToggleGroup
            type="single"
            defaultValue="landscape"
            variant="outline"
            className={isCollapsed ? "flex flex-col" : ""}
          >
            <ToggleGroupItem
              className="text-xs flex gap-2"
              value="landscape"
              onClick={() => setIsDesktopView(true)}
            >
              <MonitorDot className="w-5 h-auto" />
              {!isCollapsed && <span>Landscape</span>}
            </ToggleGroupItem>
            <ToggleGroupItem
              className="text-xs flex gap-2"
              value="portrait"
              onClick={() => setIsDesktopView(false)}
            >
              <TabletSmartphone className="w-5 h-auto" />
              {!isCollapsed && <span>Portrait</span>}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {isCollapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    setIsCollapsed(false);

                    setTimeout(() => {
                      todoInputRef.current?.focus();
                    }, 100);
                  }}
                  className="mx-auto rounded-full"
                  size="icon"
                >
                  <Plus className="w-5 h-auto" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a Todo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <div className="flex flex-col gap-4">
            <Label htmlFor="todo">Todo</Label>
            <div className="flex gap-2">
              <Input
                id="todo"
                ref={todoInputRef}
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
                    <Checkbox
                      checked={todo.isChecked}
                      onCheckedChange={() => updateTodos(index)}
                    />
                    <span className="text-sm">{todo.task}</span>
                  </div>
                  <Trash2
                    onClick={() => deleteTodo(index)}
                    className="w-4 h-4 mx-1 flex-shrink-0 text-red-600 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
