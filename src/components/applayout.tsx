import Link from "next/link";
import { type ReactNode } from "react";
import { FcHome, FcFolder, FcBusinessContact } from "react-icons/fc";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto mt-5 flex justify-center gap-4 rounded-lg bg-purple-200 p-5">
        <Link
          href="/"
          className="flex flex-row items-center gap-1 rounded bg-purple-100 p-1 font-serif font-bold 
          transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white"
        >
          <FcHome />
          Home
        </Link>

        <Link
          href="/projects"
          className=" flex flex-row items-center gap-1 rounded bg-purple-100 p-1  font-serif font-bold  
          transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white"
        >
          <FcFolder />
          Projects
        </Link>
        <Link
          href="/contact"
          className="flex flex-row items-center gap-1 rounded bg-purple-100 p-1  font-serif font-bold  
          transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white"
        >
          <FcBusinessContact />
          Contact
        </Link>
      </div>

      <div className="container m-5 mx-auto rounded-lg bg-neutral-100 p-5">
        {props.children}
      </div>
    </>
  );
}
