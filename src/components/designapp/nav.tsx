import { BsCloudArrowUpFill, BsPersonLock, BsStarFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function NavPage() {
  return (
    <>
      <div className="w-48 rounded-l-md bg-blue-900 p-7">
        <div className="flex justify-center pb-5 pt-5">
          <Image
            height={100}
            width={100}
            src={"/assets/images/profile.jpeg"}
            className=" h-14 w-14 rounded-full border-2 border-white "
            alt={"logo"}
          />
        </div>
        <div className="flex flex-col gap-7 py-5 text-sm font-semibold text-white">
          <div className="flex gap-1  hover:bg-blue-950">
            <BsPersonLock className="h-5 w-5" />
            My cloud
          </div>
          <div className="flex gap-1 hover:bg-blue-950">
            <IoIosPeople className="h-5 w-5" />
            Shared files
          </div>
          <div className="flex gap-1 hover:bg-blue-950">
            <BsStarFill className="h-4 w-4" />
            Favorites
          </div>
          <div className="flex gap-1 hover:bg-blue-950">
            <BsCloudArrowUpFill className="h-5 w-5" /> Upload files
          </div>
          <div className="flex gap-1 hover:bg-blue-950">Settings</div>
          <div className="flex gap-1 hover:bg-blue-950">Log out</div>
        </div>
      </div>
    </>
  );
}
