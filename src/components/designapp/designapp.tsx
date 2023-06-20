import Head from "next/head";
import { BsFillPersonFill, BsPlusLg, BsStarFill } from "react-icons/bs";
import {
  FcAudioFile,
  FcDocument,
  FcImageFile,
  FcVideoFile,
} from "react-icons/fc";

import { ImUpload3 } from "react-icons/im";

import { MdOutlineWork } from "react-icons/md";
import { BiCabinet } from "react-icons/bi";
import Nav from "~/components/designapp/nav";
import Searchbar from "~/components/designapp/searchbar";

export function DesignApp() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-fit">
        {/* Nav Bar */}

        <Nav>
          {}

          {/* Main container */}

          <Searchbar>
            {}
            <p className="p-4 pb-0  pl-6 pt-6 text-xl font-semibold text-blue-900 ">
              Categories
            </p>
            <div className="flex flex-row gap-4 p-5">
              <div className=" basis-1/4 flex-col rounded-lg bg-indigo-500 ">
                <div className="flex">
                  <FcImageFile className="mb-2 ml-4 mt-4 h-8 w-8 rounded-full bg-white p-1" />
                  <BsStarFill className=" ml-12 mt-5 h-6 w-6 text-yellow-300" />
                </div>
                <p className="ml-4 font-semibold text-white">Pictures</p>
                <p className="mb-6 ml-4 text-xs text-white">480 files</p>
              </div>
              <div className="basis-1/4 flex-col rounded-lg bg-cyan-600  ">
                <FcDocument className="mb-2 ml-4 mt-4 h-8 w-8 rounded-full bg-white p-1" />{" "}
                <p className="ml-4 font-semibold text-white">Documents</p>
                <p className=" ml-4 text-xs text-white">190 files</p>
              </div>
              <div className="basis-1/4 flex-col rounded-lg bg-pink-400  ">
                <FcVideoFile className="mb-2 ml-4 mt-4 h-8 w-8 rounded-full bg-white p-1" />{" "}
                <p className="ml-4 font-semibold text-white">Videos</p>
                <p className=" ml-4 text-xs text-white">30 files</p>
              </div>
              <div className="basis-1/4 flex-col rounded-lg bg-blue-500  ">
                <FcAudioFile className="mb-2 ml-4 mt-4 h-8 w-8 rounded-full bg-white p-1" />
                <p className="ml-4 font-semibold text-white">Audio</p>
                <p className=" ml-4 text-xs text-white">80 files</p>
              </div>
            </div>

            <p className="p-4 pb-0 pl-6 pt-6 text-xl font-semibold text-blue-900 ">
              Files
            </p>
            <div className="flex flex-row gap-4 p-5 text-center">
              <div className=" basis-1/4 flex-col rounded-lg bg-slate-50 px-8 py-6 font-semibold  text-blue-800">
                <MdOutlineWork className="mx-auto mb-2 h-6 w-6 text-violet-500" />{" "}
                Work
                <hr />
              </div>
              <div className=" basis-1/4 flex-col rounded-lg bg-slate-50 px-8 py-6 font-semibold text-blue-800">
                <BsFillPersonFill className="mx-auto mb-2 h-6 w-6 text-cyan-500" />
                Personal
                <hr />
              </div>
              <div className=" basis-1/4 flex-col rounded-lg bg-slate-50 px-8 py-6 font-semibold text-blue-800">
                <BiCabinet className="mx-auto mb-2 h-6 w-6 text-blue-600" />{" "}
                Archive
                <hr />
              </div>
              <div className=" basis-1/4 flex-col rounded-lg bg-slate-100 px-8 py-6 ">
                <BsPlusLg className="mx-auto my-auto mb-2 h-6 w-6 text-blue-600" />
              </div>
            </div>

            <p className="p-4 pb-4 pl-6 pt-6 text-xl font-semibold text-blue-900 ">
              Recent Files
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row rounded-lg bg-white p-2 ">
                <FcVideoFile className=" h-12 w-12 rounded-lg bg-pink-400 p-2" />
                <p className="px-3 py-3">Startup pitch</p>
                <p className=" px-14 py-3 text-sm text-stone-400">AVI file</p>
                <p className=" px-8 py-3 text-sm text-stone-400">105 MB</p>
                <p className=" px-16 py-1 text-2xl text-blue-500">...</p>
              </div>
            </div>
          </Searchbar>
        </Nav>

        <div className=" container mx-6 flex w-96 rounded-2xl bg-white">
          <div className="mx-auto flex flex-col gap-4 p-5">
            <div className=" mx-auto rounded-lg bg-slate-100 px-20 py-20 text-center text-sm font-semibold text-blue-900">
              {" "}
              <ImUpload3 className="mx-auto flex h-14 w-14 pb-2 text-blue-600" />{" "}
              Add new files
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-slate-100 p-5 ">
              <div className="flex flex-row gap-6">
                <p className=" text-sm font-semibold text-blue-900">
                  Your storage
                </p>
                <p className="text-xs font-semibold text-teal-500">100% left</p>
              </div>
              <div className=" flex gap-1 rounded-2xl bg-slate-300 p-1 "></div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg bg-slate-100 p-10  ">
              <p className="text-base font-semibold text-blue-900">
                Your shared folders
              </p>

              <div className=" rounded-lg border-2 border-slate-300 p-3 text-slate-400">
                + Add
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
