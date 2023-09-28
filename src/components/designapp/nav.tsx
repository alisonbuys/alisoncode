import { BsCloudArrowUpFill, BsPersonLock, BsStarFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { TbLogout, TbSettingsFilled } from "react-icons/tb";
import { type ReactNode } from "react";

export default function Nav(props: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-fit">
        <div className=" container relative w-64 justify-items-center rounded-l-2xl bg-blue-900">
          <div className="flex justify-center pb-5 pt-5">
            <Image
              height={100}
              width={100}
              src={"/assets/images/a.png"}
              className=" h-16 w-16 rounded-full border-2 border-white "
              alt={"logo"}
            />
          </div>
          <div className="flex flex-col gap-7 py-5 text-base text-white">
            <Link
              href={"/projects/designapp"}
              className="flex gap-1 p-2 px-7 hover:bg-blue-950 hover:font-semibold"
            >
              <BsPersonLock className="h-5 w-5" />
              My cloud
            </Link>

            <Link
              href={"/sharedfiles"}
              className="flex gap-1 p-2 px-7 hover:bg-blue-950 hover:font-semibold"
            >
              <IoIosPeople className="h-5 w-5" />
              Shared files
            </Link>

            <Link
              href={"/favorites"}
              className="flex gap-1 p-2 px-7 hover:bg-blue-950 hover:font-semibold"
            >
              <BsStarFill className="h-4 w-4" />
              Favorites
            </Link>
            <Link
              href={"/uploaded"}
              className="flex gap-1 p-2 px-7 hover:bg-blue-950 hover:font-semibold"
            >
              <BsCloudArrowUpFill className="h-5 w-5" /> Upload files
            </Link>

            <div className="absolute bottom-20 flex gap-1 p-2 px-7 hover:font-semibold">
              <TbSettingsFilled className="h-5 w-5" /> Settings
            </div>
            <div className=" absolute bottom-8 flex gap-1 p-2 px-7 hover:font-semibold">
              <TbLogout className="h-5 w-5" />
              Log out
            </div>
          </div>
        </div>

        <div className="container w-5/6 rounded-r-2xl bg-slate-200 px-6 py-6 ">
          {props.children}
          <div className="mt-7 text-right text-sm text-slate-400">
            A simple App Design clone built with React.
            <p className=" font-medium">
              Click on nav buttons to go to different pages !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
