import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";
import {
  FcHome,
  FcAbout,
  FcFolder,
  FcPhone,
  FcBusinessContact,
} from "react-icons/fc";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="m-5 flex justify-end gap-4 rounded-lg bg-purple-200 p-5">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 rounded bg-purple-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <FcHome />
          Home
        </Link>

        <Link
          href="/about"
          className="flex flex-row items-center gap-2 rounded bg-purple-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <FcAbout />
          About
        </Link>
        <Link
          href="/projects"
          className="flex flex-row items-center gap-2 rounded bg-purple-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <FcFolder />
          Projects
        </Link>
        <Link
          href="/contact"
          className="flex flex-row items-center gap-2 rounded bg-purple-100 px-4 py-2 transition hover:bg-white hover:underline"
        >
          <FcBusinessContact />
          Contact
        </Link>
      </div>

      <div className="m-5 rounded-lg bg-neutral-100 p-5">{props.children}</div>
    </>
  );
}
