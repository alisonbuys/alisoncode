import Link from "next/link";
import { type ReactNode } from "react";
import { FcHome, FcFolder, FcBusinessContact } from "react-icons/fc";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";

export function AppLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto flex bg-purple-100 p-3 ">
        <div className=" container justify-start">
          <Image
            className="h-8 w-auto"
            src="/assets/images/logo5.png"
            alt={"logo"}
            width={200 * 4}
            height={200 * 4}
          />
        </div>
        <div className="container flex justify-end gap-1 text-right">
          <Link
            href={"/"}
            className="py-3 px-1 text-xs font-semibold font-serif hover:text-indigo-800 transition sm:text-xs md:text-sm "
          >
            Home
          </Link>

          <Link
            href={"/projects"}
            className="py-3 px-1 text-xs font-semibold font-serif hover:text-indigo-800 transition sm:text-xs md:text-sm "
          >
            Projects
          </Link>

          <Link
            href={"/contact"}
            className="py-3 px-1 text-xs font-semibold font-serif hover:text-indigo-800 transition sm:text-xs md:text-sm "
          >
            Contact
          </Link>

          <BsMoonStarsFill className="ml-3 mt-3 h-5 text-indigo-800 sm:text-xs md:text-sm  " />
        </div>
      </div>

      <div className="container mx-auto bg-purple-200 p-5 h-auto font-serif">
        {props.children}
      </div>
    </>
  );
}
