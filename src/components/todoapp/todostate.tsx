import { type TodoItem } from "./todoapp";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TodoState {
  todolist: TodoItem[];
  set: (partial: Partial<TodoState>) => void;
}

export const useTodoState = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todolist: [],
        set,
      }),
      {
        name: "todo-storage",
      }
    )
  )
);
