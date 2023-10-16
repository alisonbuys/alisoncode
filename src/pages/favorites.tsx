import { BsStarFill } from "react-icons/bs";
import { FcImageFile } from "react-icons/fc";
import Nav from "~/components/designapp/nav";
import Searchbar from "~/components/designapp/searchbar";
import Image from "next/image";

export default function Favorites() {
  return (
    <>
      <div className=" flex h-full w-screen bg-indigo-200">
        <Nav>
          <Searchbar>
            <p className="p-4 pb-0 pl-6 pt-6 text-2xl font-extrabold text-blue-900 ">
              Favorites
            </p>
            <div className="flex flex-row gap-4 p-5">
              <div className=" flex-col  rounded-lg bg-indigo-500 pr-8 ">
                <div className="flex">
                  <FcImageFile className="mb-6 ml-4 mt-4 h-8 w-8 rounded-full bg-white p-1" />
                  <BsStarFill className=" ml-16 mt-5 h-6 w-6 text-yellow-300" />
                </div>
                <p className="ml-4 font-semibold text-white">Pictures</p>
                <p className="mb-6 ml-4 text-xs text-white">480 files</p>
              </div>
            </div>
            <p className="p-4 pb-4  pl-6 pt-6 text-xl font-bold text-blue-900 ">
              Files
            </p>
            <div className=" flex flex-row gap-4 p-5">
              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/tropical.jpg"}
                    className="rounded-lg pb-1 "
                    alt={"view of beach"}
                  />
                  <p className="pt-2 text-blue-900">IMG_01</p>
                  <p className="pt- text-xs text-blue-500">Feb 01, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2 pb-1">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/couple.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"couple on beach"}
                  />
                  <p className="text-blue-900">IMG_02</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 01, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/beach.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"sunset"}
                  />
                  <p className="text-blue-900">IMG_03</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 01, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/tropicalsunset.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"people at a bonfire"}
                  />
                  <p className="text-blue-900">IMG_04</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 01, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/sunset.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"couple on hike"}
                  />
                  <p className="text-blue-900">IMG_05</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 01, 2023</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-row gap-4 p-5 ">
              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/tent.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"a tent"}
                  />
                  <p className="text-blue-900">IMG_06</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 03, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/view.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"a tent"}
                  />
                  <p className="text-blue-900">IMG_07</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 03, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/bonfire.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"people at a bonfire"}
                  />
                  <p className="text-blue-900">IMG_04</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 03, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/smores.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"couple on hike"}
                  />
                  <p className="text-blue-900">IMG_05</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 03, 2023</p>
                </div>
              </div>

              <div className="container flex basis-1/5 flex-col rounded-lg bg-white  ">
                <div className="px-2 py-2">
                  <Image
                    height={100}
                    width={200}
                    src={"/assets/images/drinks.jpg"}
                    className=" rounded-lg pb-1 "
                    alt={"a tent"}
                  />
                  <p className="text-blue-900">IMG_07</p>
                  <p className="pt-1 text-xs text-blue-500">Feb 03, 2023</p>
                </div>
              </div>
            </div>
          </Searchbar>
        </Nav>
      </div>
    </>
  );
}
