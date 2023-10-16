import Link from "next/link";
import { ReactNode } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export function BackButton() {
  return (
    <>
      <Link href={"/"}>
        <div className=" m-4 flex w-fit items-center rounded bg-gray-500 p-4 font-bold text-white transition hover:bg-slate-700">
          {" "}
          <IoArrowBackCircleSharp className=" h-10 w-10" />
          BACK
        </div>
      </Link>
    </>
  );
}
