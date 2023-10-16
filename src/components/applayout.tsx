import Link from "next/link";
import { type ReactNode } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto flex bg-purple-100 p-3 ">
        <div className=" container justify-start"></div>
        <div className="container flex justify-end gap-1 text-right">
          <Link
            href={"/"}
            className="px-1 py-3 font-serif text-xs font-semibold transition hover:text-indigo-800 sm:text-xs md:text-sm "
          >
            Home
          </Link>

          <Link
            href={"/projects"}
            className="px-1 py-3 font-serif text-xs font-semibold transition hover:text-indigo-800 sm:text-xs md:text-sm "
          >
            Projects
          </Link>

          <Link
            href={"/contact"}
            className="px-1 py-3 font-serif text-xs font-semibold transition hover:text-indigo-800 sm:text-xs md:text-sm "
          >
            Contact
          </Link>

          <BsMoonStarsFill className="ml-3 mt-3 h-5 text-indigo-800 sm:text-xs md:text-sm  " />
        </div>
      </div>

      <div className="container mx-auto w-screen">{props.children}</div>
    </>
  );
}
