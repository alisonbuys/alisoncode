import Image from "next/image";
import {FaSignal} from "react-icons/fa"
import {MdOutlineWifi} from "react-icons/md"
import {BsBatteryFull} from "react-icons/bs"
import {SlMagnifier} from "react-icons/sl"
import {AiFillAudio} from "react-icons/ai"

export function CategoriesPage (){
    return(<><main className="">
    <div className="container mx-auto h-fit w-80 border-2 border-black rounded-3xl bg-gradient-to-b from-violet-300 from-20% via-pink-300 via-50% to-violet-200 to-90% ">
      <div className=" container p-2 flex flex-row ">
        <p className="text-xs ml-4 mr-48 font-semibold">9:41
        </p>
        <FaSignal className="h-4 w-4 text-right"/>
        <MdOutlineWifi className=" ml-1 text-right"/>
        <BsBatteryFull className="ml-1 text-right"/>
    
      </div>
      <div className=" opacity-40 bg-violet-200 rounded-lg p-1.5 m-4 flex flex-row">
        <SlMagnifier className="m-1 text-neutral-700"/>
        <p className="text-neutral-700">Search</p>
        <AiFillAudio className="m-1 text-neutral-700 ml-44" />
        </div>

        <div className="text-2xl font-bold text-center pt-1 tracking-tight">Categories</div>
        <div className=" container mx-auto px-5 flex flex-row">
          <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/pizza.png"} 
        className="m-4"
        alt={""}
        />
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Pizza</div>
        </div>

        <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/asian.png"} 
        className="m-4"
        alt={""}/>
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Sushi/Asian</div>
        </div>
        </div>
       
        <div className=" container mx-auto px-5 flex flex-row">
          <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/burger.png"} 
        className="m-4"
        alt={""}
        />
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Burger & Fries</div>
        </div>

        <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/healthy.png"} 
        className="m-4"
        alt={""}/>
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Healthy</div>
        </div>
        </div>

        <div className=" container mx-auto px-5 flex flex-row">
          <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/mexican.png"} 
        className="m-4"
        alt={""}
        />
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Mexican</div>
        </div>

        <div className="flex flex-col">
        <Image 
        height={100}
        width={100}
        src={"/assets/images/dessert.png"} 
        className="m-4 "
        alt={""}/>
        <div className="mx-auto bg-white p-0.5 w-28 text-xs font-bold text-center rounded-3xl px-4">Dessert</div>
        </div>
        </div>
        
      <div className="bg-black w-24 mx-auto mb-2 p-0.5 mt-14 rounded-3xl"></div>
      
    </div>
    </main></>)

}
