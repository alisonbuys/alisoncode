import Link from "next/link";
import { type ReactNode } from "react";
import { FcHome, FcAbout, FcFolder, FcBusinessContact } from "react-icons/fc";
import Image from "next/image";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="flex gap-4 rounded-lg bg-purple-200 p-2">
          <div className="flex justify-start">
            <div className="flex h-20 justify-start gap-1 p-4">
              <Image
                height={100}
                width={100}
                src={"/assets/images/logo.png"}
                className="h-14 w-14 rounded-full"
                alt={"logo"}
              />
              <div className=" border-l border-purple-700 pl-2 pt-2 font-serif text-lg">
                Web Developer
              </div>
            </div>
          </div>
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
      </div>
      <div className="container m-5 mx-auto rounded-lg bg-neutral-100 p-5">
        {props.children}
      </div>
    </>
  );
}
