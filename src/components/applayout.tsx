import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-max mx-auto">
        <div className="container relative w-40 justify-items-center bg-indigo-900">
          <div className="flex justify-center pb-5 pt-5">
            <Image
              height={100}
              width={100}
              src={"/assets/images/ablogo.png"}
              className=" h-16 w-16 "
              alt={"logo"}
            />
          </div>
          <div className="flex flex-col gap-7 py-5 text-base text-white">
            <Link
              href={"/"}
              className="flex gap-1 p-2 px-7  hover:bg-indigo-800 hover:font-semibold"
            >
              <AiTwotoneHome className="h-5 w-5" />
             Home
            </Link>

            <Link
              href={"/projects"}
              className="flex gap-1 p-2 px-7  hover:bg-indigo-800 hover:font-semibold"
            >
              <FaLaptopCode className="h-5 w-5" />
              Projects
            </Link>

            <Link
               href={"/contact"}
              className="flex gap-1 p-2 px-7  hover:bg-indigo-800 hover:font-semibold"
            >
              <MdPermContactCalendar className="h-5 w-5" />
              Contact
            </Link>
           
          </div>
        </div>

        <div className="container bg-indigo-100 w-full h-full py-6 px-6 ">
          {props.children}
        
        </div>
      </div>
    </>
  );
}
