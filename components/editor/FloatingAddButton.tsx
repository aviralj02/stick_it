"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import useTodos from "@/hooks/useTodos";
import { Plus } from "lucide-react";

type Props = {};

const FloatingAddButton = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");

  const { addTodo } = useTodos();

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Enter your todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (newTodo.trim() !== "") {
                addTodo(newTodo.trim());
              }
              setNewTodo("");
              setIsModalOpen(false);
            }
          }}
        />
        <DialogFooter>
          <Button
            onClick={() => {
              if (newTodo.trim() !== "") {
                addTodo(newTodo.trim());
              }
              setNewTodo("");
              setIsModalOpen(false);
            }}
          >
            Add Todo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FloatingAddButton;
