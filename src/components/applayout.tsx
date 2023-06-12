import Link from "next/link";
import { type ReactNode } from "react";
import { FcHome, FcAbout, FcFolder, FcBusinessContact } from "react-icons/fc";
import Image from "next/image";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto mt-5 flex justify-center gap-4 rounded-lg bg-purple-200 p-5">
        <Link
          href="/"
          className=" flex flex-row items-center gap-2 rounded  transition hover:underline"
        >
          <FcHome />
          Home
        </Link>

        <Link
          href="/about"
          className="flex flex-row items-center gap-2 rounded  transition hover:underline"
        >
          <FcAbout />
          About
        </Link>
        <Link
          href="/projects"
          className="flex flex-row items-center gap-2 rounded  transition hover:underline"
        >
          <FcFolder />
          Projects
        </Link>
        <Link
          href="/contact"
          className="flex flex-row items-center gap-2 rounded  transition hover:underline"
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