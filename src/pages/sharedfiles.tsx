import { BsPlusLg } from "react-icons/bs";
import { FcImageFile } from "react-icons/fc";
import Nav from "~/components/designapp/nav";
import Searchbar from "~/components/designapp/searchbar";

export default function Sharedfiles() {
  return (
    <Nav>
      <Searchbar>
        <p className="p-4 pb-0  pl-6 pt-6 text-2xl font-extrabold text-blue-900 ">
          Your shared files
        </p>
        <div className=" flex flex-row gap-4 p-5 ">
          <div className=" flex basis-1/4 flex-col justify-center rounded-lg bg-white px-10 py-8   text-blue-900">
            <div className="border-2 border-white border-b-blue-500 pb-4">
              <p className="font-semibold">Keynote </p>
              <p>820 files</p>
            </div>
          </div>

          <div className=" flex basis-1/4 flex-col justify-center rounded-lg bg-white px-10 py-8 text-blue-900">
            <div className="border-2 border-white border-b-pink-400 pb-4">
              <p className="font-semibold">Photos</p>
              <p>115 files</p>
            </div>
          </div>

          <div className=" flex basis-1/4 flex-col justify-center rounded-lg bg-white px-10 py-8 text-blue-900">
            <div className="border-2 border-white border-b-violet-500 pb-4">
              <p className="font-semibold">Projects</p>
              <p>65 files</p>
            </div>
          </div>

          <div className=" flex basis-1/4 flex-col justify-center rounded-lg bg-white px-10 py-8 text-blue-900">
            <div className="border-2 border-white border-b-cyan-500 pb-4">
              <p className="font-semibold">Memes</p>
              <p>21 files</p>
            </div>
          </div>
          <div className=" flex basis-1/4 flex-col justify-center rounded-lg bg-slate-100 px-10 py-8 text-blue-900">
            <BsPlusLg className="mx-auto mb-2 h-6 w-6 text-blue-600" />
          </div>
        </div>

        <p className="p-4 pb-4  pl-6 pt-6 text-xl font-bold text-blue-900 ">
          Shared recently
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row rounded-lg bg-white p-2 ">
            <FcImageFile className=" h-12 w-12 rounded-lg bg-blue-500 p-2 " />
            <p className="px-3 py-3">Keynote data</p>
            <p className=" px-14 py-3 text-sm text-stone-400">DOC file</p>
            <p className=" px-8 py-3 text-sm text-stone-400">505 kb</p>
            <p className=" px-16  py-1 text-2xl text-blue-500">...</p>
          </div>
          <div className="flex flex-row rounded-lg bg-white p-2 ">
            <FcImageFile className=" h-12 w-12 rounded-lg bg-pink-400 p-2 " />
            <p className="px-3 py-3">IMG_Vac_104</p>
            <p className=" px-14 py-3 text-sm text-stone-400">PNG file</p>
            <p className=" px-8 py-3 text-sm text-stone-400">101 kb</p>
            <p className="  px-16 py-1 text-2xl text-blue-500">...</p>
          </div>
          <div className="flex flex-row rounded-lg bg-white p-2 ">
            <FcImageFile className=" h-12 w-12 rounded-lg bg-pink-400 p-2 " />
            <p className="px-3 py-3">Reel-vid-vaca</p>
            <p className=" px-14 py-3 text-sm text-stone-400">AVI file</p>
            <p className=" px-8 py-3 text-sm text-stone-400">104 MB</p>
            <p className=" px-16 py-1 text-2xl text-blue-500">...</p>
          </div>
          <div className="flex flex-row rounded-lg bg-white p-2 ">
            <FcImageFile className=" h-12 w-12 rounded-lg bg-cyan-500 p-2 " />
            <p className="px-3 py-3">Meme-10002</p>
            <p className=" px-14 py-3 text-sm text-stone-400">PNG file</p>
            <p className=" px-8 py-3 text-sm text-stone-400">254 kb</p>
            <p className=" px-16 py-1 text-2xl text-blue-500">...</p>
          </div>
          <div className="flex flex-row rounded-lg bg-white p-2 ">
            <FcImageFile className=" h-12 w-12 rounded-lg bg-violet-500 p-2 " />
            <p className="px-3 py-3">Projects prop</p>
            <p className=" px-14 py-3 text-sm text-stone-400">DOC file</p>
            <p className=" px-8 py-3 text-sm text-stone-400">450 kb</p>
            <p className=" px-16 py-1 text-2xl text-blue-500">...</p>
          </div>
        </div>
      </Searchbar>
    </Nav>
  );
}
