import Head from "next/head";
import Image from "next/image";

import {
  ArrowLeftIcon,
  LockClosedIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BsBatteryFull, BsFillTelephoneFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";

export type ChatMessage = {
  id: string;
  from: string;
  to: string;
  time: Date;
  message: string;
  seen: boolean;
};

export function MessageApp() {
  const thisuser = "Chloe";
  const otheruser = "Brian";

  const [chats, chats_update] = useState<ChatMessage[]>([
    {
      id: "y21839u21389",
      from: thisuser,
      to: otheruser,
      message: "How was last night?",
      seen: true,
      time: new Date(),
    },
    {
      id: "hfd4839ufhjuoi4",
      from: otheruser,
      to: thisuser,
      message: "It was crazy",
      seen: true,
      time: new Date(),
    },
  ]);

  const [message, messsage_update] = useState<string>("");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-sky-100 p-8">
        <div className="h-fit w-80 overflow-hidden rounded-2xl border-2 border-black bg-orange-50 shadow-xl">
          <div className="container flex flex-row bg-emerald-900 p-1 px-3 text-white ">
            <FaSignal className="mr-1 h-4 w-4" />
            <p className="text-xs font-bold ">CellC</p>
            <MdOutlineWifi className=" ml-1 " />
            <p className="mx-auto justify-center text-xs font-bold">9:41</p>
            <div className="flex flex-row ">
              <p className="text-xs font-bold">99%</p>
              <BsBatteryFull className="ml-1 " />
            </div>
          </div>
          {/* TOP GREEN BAR */}

          <div className="flex flex-row gap-2 bg-emerald-800 p-2 ">
            <ArrowLeftIcon className="mt-4 h-5 w-5 text-white" />

            <div className="mt-1 h-11 w-11 overflow-hidden rounded-full">
              <Image
                src={"/assets/images/profilepic.png"}
                width={100}
                height={100}
                alt="girl"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-normal text-white">Chloe</h3>
              <span className="text-xs text-white">
                last seen today 9:29 AM
              </span>
            </div>

            <div className=" flex flex-row gap-2 pt-3">
              <VideoCameraIcon className="h-5 w-5 text-white" />
              <BsFillTelephoneFill className="mt-0.5 h-4 w-4 text-white" />
              <HiDotsVertical className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="mt-2 flex w-full">
            <span className="m-auto flex rounded-md bg-sky-200 p-2 text-center text-sm">
              7 August 2020
            </span>
          </div>
          <div className=" mt-2 flex w-full">
            <span className="m-5 flex rounded-md bg-yellow-200 p-4 text-center text-sm shadow-sm">
              <LockClosedIcon className="text-grey mr-1 h-8 w-8 pb-4" />{" "}
              Messages and calls and end-to-end encrypted. No one outside of
              this chat not even WhatsApp can read or listen to them. Tap to
              learn more.{" "}
            </span>
          </div>

          {chats.map((chat) => {
            if (chat.from == otheruser) {
              return (
                <div
                  key={chat.id}
                  className="mt-6 flex w-full flex-row justify-end"
                >
                  <span className="m-4 rounded-xl border-lime-200 bg-lime-200 p-3 text-right shadow-md">
                    {chat.message}
                  </span>
                </div>
              );
            }

            return (
              <div key={chat.id} className="mt-6 w-full flex-row pb-5">
                <span className="m-4 rounded-xl border-white bg-white p-3 shadow-md">
                  {chat.message}
                </span>
              </div>
            );
          })}

          {/* <div className="mt-6 flex w-full flex-row justify-end">
            <span className="flex rounded-xl border-lime-200 bg-lime-200 p-3 text-right shadow-md">
              <ArrowUpCircleIcon className="text-grey-100 h-4 w-4" />
              Photo
            </span>
          </div> */}

          <div className=" flex flex-row gap-1 pb-5">
            <input
              placeholder="Type a message"
              className=" ml-4 flex-1 rounded-3xl border bg-white p-4 shadow-xl"
              value={message}
              onChange={(e) => {
                messsage_update(e.target.value);
              }}
            />
            <button
              className="mr-4 rounded-full border bg-emerald-800 px-4 text-white"
              onClick={() => {
                console.log("ClICKE!");
                console.log(message);

                const newchatmessage: ChatMessage = {
                  id: crypto.randomUUID(),
                  from: thisuser,
                  to: otheruser,
                  message,
                  seen: false,
                  time: new Date(),
                };

                chats_update([...chats, newchatmessage]);
              }}
            >
              <IoMdSend className="h-6 w-6" />
            </button>
          </div>
        </div>

        <p className="p-5 text-gray-500">Type a message and send it !</p>
      </main>
    </>
  );
}
