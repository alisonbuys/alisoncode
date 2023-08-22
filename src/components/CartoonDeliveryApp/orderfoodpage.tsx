import Image from "next/image";
import {FaSignal} from "react-icons/fa"
import {MdOutlineWifi} from "react-icons/md"
import {BsBatteryFull} from "react-icons/bs"

export function OrderFoodPage (){
    return(<><main className=" ">
    <div className="container mx-auto h-fit w-80 rounded-3xl border-2 border-black bg-gradient-to-b from-violet-300 from-10% via-pink-300 via-30% to-violet-100 to-90% ">
      <div className=" container p-2 flex flex-row ">
        <p className="text-xs ml-4 mr-48 font-semibold">9:41
        </p>
        <FaSignal className="h-4 w-4 text-right"/>
        <MdOutlineWifi className=" ml-1 text-right"/>
        <BsBatteryFull className="ml-1 text-right"/>
    
      </div>
        <div className="text-2xl font-bold text-center pt-5 tracking-tight">Order food <br/>to your door</div>
        <div>
        <Image 
        height={200}
        width={200}
        src={"/assets/images/Donutstand.png"} 
        className=""
        alt={""}/>
      </div>
      <div>
        <Image 
        height={200}
        width={200}
        src={"/assets/images/burgerstand.png"} 
        className=" ml-32"
        alt={""}/>
      </div>
      <div>
        <Image 
        height={200}
        width={200}
        src={"/assets/images/pizzastand.png"} 
        className=" "
        alt={""}/>
      </div>
      <button className="text-white text-sm rounded-3xl p-1.5 text-center my-4 w-60 bg-violet-500 mx-9 hover:bg-violet-600 transition"> + Add Address</button>
      <div className="bg-black w-24 mx-auto mb-2 mt-3 p-0.5 rounded-3xl"></div>
    
      
    </div>
    {/* <p className="text-neutral-500">Click on Add Address !</p> */}
    </main></>)

}
