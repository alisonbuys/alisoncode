import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

export function K53App() {
  return (
    <>
      <main className="h-screen w-screen bg-indigo-100 p-5">
        <div className="container h-full rounded-3xl border-2 border-black bg-gradient-to-b from-sky-200 from-10% via-blue-400 via-70% to-blue-500 to-90% ">
          <div className="pt-5 text-center font-serif text-5xl tracking-tight text-white">
            K53
          </div>
          <div className="text-center font-serif text-2xl tracking-tight text-white">
            Light Motor Vehicle <br />
            Learners Test
          </div>
          <div>
            <Image
              height={200}
              width={200}
              src={"/assets/images/car.png"}
              className="mx-auto"
              alt={""}
            />
          </div>
          <div className=" m-4 justify-center rounded-3xl bg-white sm:mx-28 lg:mx-60 ">
            <IoIosInformationCircleOutline className="mx-auto h-12 w-12 pt-4 text-blue-800" />
            <div className=" m-4">
              <p className="pb-2 pl-2 text-center text-xs text-neutral-700">
                You have 68 questions to complete. The questions consist of 30
                Rules of the Road, 30 Road Signs with Road Markings and 8
                Control questions. There are 3 options at every question. You
                have to choose the correct answer to move on to the next
                question.
              </p>
            </div>
            <hr className="m-4 mt-4"></hr>
            <div className="m-4 pb-4">
              <p className="mb-1 pl-2 text-center text-xs text-neutral-700">
                1. Rules of the Road
              </p>
              <p className="mb-1 pl-2 text-center text-xs text-neutral-700">
                2. Road Signs /Road Markings
              </p>
              <p className="mb-1 pl-2 text-center text-xs text-neutral-700">
                3. Controls
              </p>
            </div>
          </div>
          <div className="mx-auto my-10 flex justify-center">
            <Link
              href={"/projects/questionspage"}
              className="my-4 w-40 rounded-md bg-blue-800 p-2 text-center text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Start Test
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
