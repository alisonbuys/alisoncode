import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

export function K53App (){
    return(<><main className="">
     
    <div className="container mx-auto h-fit rounded-3xl border-2 border-black bg-gradient-to-b from-sky-200 from-10% via-blue-400 via-70% to-blue-500 to-90% ">
      
        <div className="text-5xl font-serif text-white text-center pt-5 tracking-tight">K53</div>
        <div className="text-2xl font-serif text-white text-center tracking-tight">Light Motor Vehicle <br/>Learners Test</div>
        <div>
        <Image 
        height={200}
        width={200}
        src={"/assets/images/car.png"} 
        className="mx-auto"
        alt={""}/>
      </div>
    <div className=" rounded-3xl bg-white m-4 justify-center sm:mx-28 lg:mx-60 ">
       <IoIosInformationCircleOutline className="mx-auto h-12 w-12 pt-4 text-blue-800"/>
        <div className=" m-4">
            <p className="pl-2 pb-2 text-neutral-700 text-xs text-center">You have an hour to complete 68 questions. The questions consist of 30 Rules of the Road, 30 Road Signs with Road Markings and 8 Control questions.</p>
        </div>
        <hr className="m-4 mt-4"></hr>
        <div className="m-4 pb-4">
        <p className="pl-2 text-neutral-700 text-xs mb-1 text-center">1. Rules of the Road</p>
        <p className="pl-2 text-neutral-700 text-xs mb-1 text-center">2. Road Signs /Road Markings</p>
        <p className="pl-2 text-neutral-700 text-xs mb-1 text-center">3. Controls</p>
        </div>
    </div>
    <div className="flex mx-auto justify-center my-10">
    <Link
              href={"/projects/questionspage"}
              className="text-white text-sm rounded-md p-2 font-bold text-center my-4 w-60 bg-blue-800 hover:bg-blue-700 transition"
            >
              Start Test
            </Link>
    </div>
    
     
      
    </div>
    </main></>)

}
