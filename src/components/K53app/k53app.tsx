import Image from "next/image";
import {FaSignal} from "react-icons/fa"
import {MdOutlineWifi} from "react-icons/md"
import {BsBatteryFull} from "react-icons/bs"
import { IoIosInformationCircleOutline } from "react-icons/io";

export function K53App (){
    return(<><main className="">
    <div className="container mx-auto h-fit w-80 rounded-3xl border-2 border-black bg-gradient-to-b from-sky-200 from-10% via-blue-400 via-70% to-blue-500 to-90% ">
      <div className=" container p-2 flex flex-row ">
        <p className="text-xs ml-4 mr-48 font-semibold">9:41
        </p>
        <FaSignal className="h-4 w-4 text-right"/>
        <MdOutlineWifi className=" ml-1 text-right"/>
        <BsBatteryFull className="ml-1 text-right"/>
    
      </div>
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
    <div className=" rounded-3xl bg-white m-4">
       <IoIosInformationCircleOutline className="mx-auto h-12 w-12 pt-4 text-blue-800"/>
        <div className=" m-4">
            <p className="pl-2 pb-2 text-neutral-700 text-xs">You have an hour to complete 68 questions. The questions consist of 30 Rules of the Road, 30 Road Signs with Road Markings and 8 Control questions.</p>
        </div>
        <hr className="m-4 mt-4"></hr>
        <div className="m-4 pb-4">
        <p className="pl-2 text-neutral-700 text-xs mb-1">1. Rules of the Road</p>
        <p className="pl-2 text-neutral-700 text-xs mb-1">2. Road Signs /Road Markings</p>
        <p className="pl-2 text-neutral-700 text-xs mb-1">3. Controls</p>
        </div>
    </div>
      <button className="text-white text-sm rounded-md p-2 font-bold text-center my-4 w-60 bg-blue-800 mx-9 hover:bg-blue-700 transition">Start Test</button>
      <div className="bg-black w-24 mx-auto mb-2 p-0.5 rounded-3xl"></div>
      
    </div>
    </main></>)

}
