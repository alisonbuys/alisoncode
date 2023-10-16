import Image from "next/image";
import { FaSignal } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";
import { BackButton } from "../BackButton";

export function OrderFoodPage() {
  return (
    <>
      <main className=" ">
        <div className="container mx-auto h-fit w-80 rounded-3xl border-2 border-black bg-gradient-to-b from-violet-300 from-10% via-pink-300 via-30% to-violet-100 to-90% ">
          <div className=" container flex flex-row p-2 ">
            <p className="ml-4 mr-48 text-xs font-semibold">9:41</p>
            <FaSignal className="h-4 w-4 text-right" />
            <MdOutlineWifi className=" ml-1 text-right" />
            <BsBatteryFull className="ml-1 text-right" />
          </div>
          <div className="pt-5 text-center text-2xl font-bold tracking-tight">
            Order food <br />
            to your door
          </div>
          <div>
            <Image
              height={200}
              width={200}
              src={"/assets/images/Donutstand.png"}
              className=""
              alt={""}
            />
          </div>
          <div>
            <Image
              height={200}
              width={200}
              src={"/assets/images/burgerstand.png"}
              className=" ml-32"
              alt={""}
            />
          </div>
          <div>
            <Image
              height={200}
              width={200}
              src={"/assets/images/pizzastand.png"}
              className=" "
              alt={""}
            />
          </div>
          <button className="mx-9 my-4 w-60 rounded-3xl bg-violet-500 p-1.5 text-center text-sm text-white transition hover:bg-violet-600">
            {" "}
            + Add Address
          </button>
          <div className="mx-auto mb-2 mt-3 w-24 rounded-3xl bg-black p-0.5"></div>
        </div>
        {/* <p className="text-neutral-500">Click on Add Address !</p> */}
      </main>
    </>
  );
}
