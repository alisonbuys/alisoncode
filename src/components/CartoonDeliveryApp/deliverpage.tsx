
import Image from "next/image";
import {FaSignal} from "react-icons/fa"
import {MdOutlineWifi} from "react-icons/md"
import {BsBatteryFull} from "react-icons/bs"

export function DeliveryFoodPage (){
    return(<><main className="">
    <div className="container mx-auto h-fit w-80 rounded-3xl border-2 border-black bg-gradient-to-b from-violet-300 from-30% via-blue-500 via-70% to-violet-100 to-90% ">
      <div className=" container p-2 flex flex-row ">
        <p className="text-xs ml-4 mr-48 font-semibold">9:41
        </p>
        <FaSignal className="h-4 w-4 text-right"/>
        <MdOutlineWifi className=" ml-1 text-right"/>
        <BsBatteryFull className="ml-1 text-right"/>
    
      </div>
        <div className="text-2xl font-bold text-center pt-5 tracking-tight">The fastest food<br/> delivery service</div>
        <div>
        <Image 
        height={200}
        width={200}
        src={"/assets/images/deliveryboy.png"} 
        className="mx-auto"
        alt={""}/>
      </div>
    <div className=" rounded-3xl bg-white m-4">
        <p className="text-2xl p-4">Address Details</p>
        <div className="bg-neutral-100 rounded-lg m-4">
            <p className="text-xs p-2 text-neutral-700">Address Search</p>
            <p className="pl-2 pb-2 text-neutral-700"> Enter your street address</p>
        </div>
        <hr className="p-16 m-4 mt-4"></hr>
    </div>
      <button className="text-white text-sm rounded-3xl p-1.5 text-center my-4 w-60 bg-violet-500 mx-9 hover:bg-violet-600 transition">Start Order</button>
      <div className="bg-black w-24 mx-auto mb-2 p-0.5 rounded-3xl"></div>
      
    </div>
    </main></>)

}
