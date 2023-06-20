import { FcAudioFile, FcImageFile } from "react-icons/fc";
import Nav from "~/components/designapp/nav";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { ImCheckmark, ImCross } from "react-icons/im";

export default function Uploadfiles() {
  return (
    <Nav>
      <div className=" container mx-auto flex w-1/2 justify-center rounded-2xl bg-white">
        <div className="mx-auto flex flex-col gap-4 p-5">
          <p className="p-5 text-center text-3xl font-extrabold text-blue-900">
            Upload Files
          </p>
          <div className=" mx-auto rounded-lg bg-slate-50 px-20 py-28 text-center text-sm font-semibold text-blue-900">
            {" "}
            <FaCloudUploadAlt className="mx-auto mb-4 flex h-14 w-14 text-center text-blue-500" />
            <p className="mx-6 text-lg "> Drag & drop your files here</p>
            <p className="mb-3 mt-3">or</p>
            <div className="mx-6 rounded-xl border-2 border-blue-400 p-4 text-blue-400 ">
              Choose files from your computer
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto mt-4 flex w-1/2 justify-center rounded-2xl bg-white">
        <div className="flex flex-col gap-4 p-5">
          <p className="flex flex-row p-5 text-center text-2xl font-extrabold text-blue-900">
            <BiLoaderCircle className="mr-3 flex h-8 w-8 flex-row text-blue-500" />{" "}
            Upload progress
          </p>
          <div className="flex flex-col gap-2">
            <div className="px-18 mt-3 flex flex-row rounded-lg bg-slate-50 py-3">
              <FcAudioFile className="ml-3 mr-3 h-12 w-12 rounded-lg bg-cyan-500 p-2 " />
              <div className="flex flex-col">
                <p className=" mb-2 text-blue-900">Summer-vibes.mp3</p>
                <div className=" flex gap-1 rounded-2xl bg-slate-300  ">
                  <div className=" flex rounded-2xl bg-blue-500 p-1 px-12"></div>
                </div>
              </div>
              <ImCross className=" ml-14 mt-4 text-blue-300" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row rounded-lg bg-slate-50 py-3">
              <FcImageFile className=" ml-3 mr-3 h-12 w-12 rounded-lg bg-pink-400 p-2 " />
              <div className="flex flex-col">
                <p className=" text-blue-900">Summer-vibes.jpeg</p>
                <p className="text-sm text-slate-400">500 kb</p>
              </div>
              <ImCheckmark className=" ml-14 mt-4 text-green-300" />
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
}
