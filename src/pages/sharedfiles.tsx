import { BsPlusLg } from "react-icons/bs";
import { FcImageFile } from "react-icons/fc";
import Nav from "~/components/designapp/nav";
import Searchbar from "~/components/designapp/searchbar";

const tabledata = [
  {
    filename: "Keynote data",
    type: "DOCx file",
    size: "500 kb",
    icon: <FcImageFile className=" h-12 w-12 rounded-lg bg-blue-500 p-2 " />,
  },
  {
    filename: "IMG_Vacation_10",
    type: "PNG file",
    size: "1 MB",
    icon: <FcImageFile className=" h-12 w-12 rounded-lg bg-pink-400 p-2 " />,
  },
  {
    filename: "Reel-video-vacay",
    type: "AVI file",
    size: "44 MB",
    icon: <FcImageFile className=" h-12 w-12 rounded-lg bg-pink-400 p-2 " />,
  },
  {
    filename: "Meme-49",
    type: "PNG file",
    size: "2 MB",
    icon: <FcImageFile className=" h-12 w-12 rounded-lg bg-cyan-500 p-2 " />,
  },
  {
    filename: "Project proposal",
    type: "DOCx file",
    size: "450 kb",
    icon: <FcImageFile className=" h-12 w-12 rounded-lg bg-cyan-500 p-2 " />,
  },
];

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
        <table className=" w-3/4 ">
          {tabledata.map((row) => (
            <tr key={row.filename} className="border-8 border-slate-200">
              <td className="w-2 rounded-l-3xl  bg-white p-2">{row.icon}</td>
              <td className=" bg-white pl-2">{row.filename}</td>
              <td className="bg-white text-center text-sm text-stone-400">
                {row.type}
              </td>
              <td className="rounded-r-3xl bg-white p-1 text-center text-sm text-stone-400">
                {row.size}
              </td>
            </tr>
          ))}
        </table>
      </Searchbar>
    </Nav>
  );
}
