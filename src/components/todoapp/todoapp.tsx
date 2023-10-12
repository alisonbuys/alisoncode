// import React,{FormEvent,FunctionCompont as FC} from "react";
import { useEffect, useState } from "react";
import { useTodoState } from "./todostate";
import { FiTrash2 } from "react-icons/fi";
import { BiSortDown, BiSortUp, BiTask } from "react-icons/bi";
import Image from "next/image";
import { FaSignal } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";
import { BackButton } from "../BackButton";

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
    <main className="flex h-screen w-screen flex-col  bg-slate-200 p-8">
      <BackButton />
      <div className="container mx-auto w-80 rounded-3xl border-2 border-black bg-gradient-to-b from-rose-200 from-30% via-rose-300 via-70% to-yellow-200 to-90% ">
        <div className="bg container flex flex-row bg-transparent p-1 px-3 text-white ">
          <FaSignal className="mr-1 h-4 w-4" />
          <p className="text-xs font-bold ">CellC</p>
          <MdOutlineWifi className=" ml-1 " />
          <p className="mx-auto justify-center text-xs font-bold">9:41</p>
          <div className="flex flex-row ">
            <p className="text-xs font-bold">99%</p>
            <BsBatteryFull className="ml-1 " />
          </div>
        </div>
        <div className="mx-auto p-2 text-center text-3xl font-bold text-white">
          {" "}
          TODO APP
        </div>
        <Image
          height={100}
          width={100}
          src={"/assets/images/notepad.png"}
          className=" mx-auto"
          alt={"AI Picture of Alison"}
        />
        <div className="mx-1">
          <input
            type="text"
            placeholder="Add Todo..."
            className="mb-5 border p-3"
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
            className="rounded-r-xl bg-rose-400 p-3 px-2 text-white transition hover:bg-rose-500"
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
                    ? "mx-2 flex p-2 text-gray-500 line-through"
                    : "mx-2 flex p-2 font-semibold"
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
        <div className="mx-auto my-40 mb-2 w-24 rounded-3xl bg-black p-0.5"></div>
      </div>

      <p className="mx-auto p-5 text-gray-500">
        Create a TODO list !
        <br /> -Sort tasks
        <br /> -Mark tasks as completed
        <br />
        -Delete tasks
      </p>
    </main>
  );
}
