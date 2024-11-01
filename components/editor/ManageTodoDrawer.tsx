import useTodos from "@/hooks/useTodos";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Menu, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from "../ui/drawer";

type Props = {};

const ManageTodoDrawer = (props: Props) => {
  const { todos, updateTodo, deleteTodo } = useTodos();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="absolute left-4 top-4">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Manage Todos</DrawerTitle>
          <DrawerDescription>
            View, uncheck or delete your todos.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col p-4 gap-4">
          {todos.length !== 0 ? (
            todos.map((todo: Todo, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={todo.isChecked}
                    onCheckedChange={() => updateTodo(index)}
                  />
                  <span className="text-sm">{todo.task}</span>
                </div>

                <button>
                  <Trash2
                    onClick={() => deleteTodo(index)}
                    className="w-4 h-4 mx-1 text-red-600"
                  />
                </button>
              </div>
            ))
          ) : (
            <span className="self-center text-sm text-muted-foreground">
              Nothing is here.
            </span>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ManageTodoDrawer;
