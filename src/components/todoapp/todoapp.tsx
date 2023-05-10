// import React,{FormEvent,FunctionCompont as FC} from "react";
import { useState } from "react";
import { number } from "zod";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

type TodoItem = {
  id: string;
  time: Date;
  title: string;
  isDone: boolean;
  order: number;
};

export function TodoApp() {
  const [todo, todo_set] = useState<TodoItem[]>([]);

  const [newtodo, newtodo_set] = useState("");

  return (
    <div className="rounded-xl bg-rose-200 p-8 shadow-2xl">
      <div className="p-2 text-lg font-normal text-white"> TODO LIST</div>
      <div>
        <input
          type="text"
          placeholder="Add Todo..."
          className="mb-5 border p-4"
          value={newtodo}
          onChange={(e) => {
            newtodo_set(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newtodoitem: TodoItem = {
              id: crypto.randomUUID(),
              title: newtodo,
              isDone: false,
              time: new Date(),
              order: todo.length + 1,
            };

            todo_set([...todo, newtodoitem]);
          }}
          className="rounded-r-xl bg-rose-400 p-4 px-3 text-white transition hover:bg-rose-500"
        >
          Add task
        </button>
      </div>
      {todo
        .sort((a, b) => a.order - b.order)
        .map((onetodoitem) => {
          return (
            <div
              className={
                onetodoitem.isDone === true
                  ? "flex bg-rose-200 p-2 text-gray-900"
                  : "flex bg-rose-200 p-2 font-semibold"
              }
            >
              <span className="flex-1">
                {onetodoitem.order} . {onetodoitem.title}
              </span>
              <button
                onClick={() => {
                  let todolist = todo.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.order = i.order - 1;
                    }

                    return i;
                  });

                  todo_set(todolist);
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <ChevronUpIcon className="h-5 w-5"></ChevronUpIcon>{" "}
              </button>
              <button
                onClick={() => {
                  let todolist = todo.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.order = i.order + 1;
                    }

                    return i;
                  });

                  todo_set(todolist);
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>{" "}
              </button>
              <button
                onClick={() => {
                  let todolist = todo.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.isDone = true;
                    }

                    return i;
                  });

                  todo_set(todolist);
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <CheckIcon className="h-5 w-5"></CheckIcon>{" "}
              </button>

              <button
                onClick={() => {
                  let todolist = todo.filter((i) => {
                    if (i.id === onetodoitem.id) {
                      return false;
                    }

                    return true;
                  });

                  todo_set(todolist);
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <XMarkIcon className="h-5 w-5"></XMarkIcon>{" "}
              </button>
            </div>
          );
        })}
    </div>
  );
}
