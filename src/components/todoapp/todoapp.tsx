// import React,{FormEvent,FunctionCompont as FC} from "react";
import { useEffect, useState } from "react";
import { useTodoState } from "./todostate";
import { FiTrash2 } from "react-icons/fi";
import { BiSortDown, BiSortUp, BiTask } from "react-icons/bi";

export type TodoItem = {
  id: string;
  time: Date;
  title: string;
  isDone: boolean;
  order: number;
};

export function TodoApp() {
  const todostate = useTodoState();
  // const [todo, todo_set] = useState<TodoItem[]>([]);
  const [newtodo, newtodo_set] = useState("");

  const [loaded, loaded_set] = useState(false);

  useEffect(() => {
    if (!loaded) loaded_set(true);
  }, [loaded]);

  if (!loaded) return <div>loading...</div>;

  return (
    <div className="rounded-xl  bg-rose-200 p-8 shadow-2xl">
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
              order: todostate.todolist.length + 1,
            };

            const todolist = [...todostate.todolist, newtodoitem];

            todostate.set({ todolist });
          }}
          className="rounded-r-xl bg-rose-400 p-4 px-2 text-white transition hover:bg-rose-500"
        >
          Add task
        </button>
      </div>
      {todostate.todolist
        .sort((a, b) => a.order - b.order)
        .map((onetodoitem) => {
          return (
            <div
              key={onetodoitem.id}
              className={
                onetodoitem.isDone === true
                  ? "flex bg-rose-200 p-2 text-gray-500"
                  : "flex bg-rose-200 p-2 font-semibold"
              }
            >
              <span className="flex-1">
                {onetodoitem.order} . {onetodoitem.title}
              </span>
              <button
                onClick={() => {
                  const todolist = todostate.todolist.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.order = i.order - 1;
                    }

                    return i;
                  });

                  todostate.set({ todolist: todolist });
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <BiSortUp className="h-5 w-5"></BiSortUp>{" "}
              </button>
              <button
                onClick={() => {
                  const todolist = todostate.todolist.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.order = i.order + 1;
                    }

                    return i;
                  });

                  todostate.set({ todolist: todolist });
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <BiSortDown className="h-5 w-5"></BiSortDown>{" "}
              </button>
              <button
                onClick={() => {
                  const todolist = todostate.todolist.map((i) => {
                    if (i.id === onetodoitem.id) {
                      i.isDone = true;
                    }

                    return i;
                  });

                  todostate.set({ todolist: todolist });
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <BiTask className="h-5 w-5"></BiTask>{" "}
              </button>

              <button
                onClick={() => {
                  const todolist = todostate.todolist.filter((i) => {
                    if (i.id === onetodoitem.id) {
                      return false;
                    }

                    return true;
                  });

                  todostate.set({ todolist: todolist });
                }}
                className="rounded-md border bg-rose-400 p-2 text-white transition hover:bg-rose-500"
              >
                {" "}
                <FiTrash2 className="h-5 w-5"></FiTrash2>{" "}
              </button>
            </div>
          );
        })}
    </div>
  );
}
