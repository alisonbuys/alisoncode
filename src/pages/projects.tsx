import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="h-screen bg-purple-100">
     <div className="text-6xl text-center p-6 font-serif">Projects</div>
      {/* <div className="span row-span-full m-1 flex flex-col gap-y-6 space-y-1"> */}
     <div className="container bg-purple-200 rounded-lg m-1 w-1/2 p-1 border-white border-2 mx-auto" >
     <div className="flex flex-row m-4">
    <Image
                height={100}
                width={100}
                src={"/assets/images/msgapp.png"}
                className="rounded-lg pb-1 "
                alt={"projects"}
              />
        <ProjectThumbnailLinks
          link={"/projects/messageapp"}
          name={"Message App"}
          description={"A simple WhatsApp clone built with react."}
        />
    </div>
     </div>
   
      
     
     <div className="container bg-purple-200 rounded-lg m-1 w-1/2 p-1 border-white border-2 mx-auto">
     <div className="flex flex-row m-4">
    <Image
                height={100}
                width={100}
                src={"/assets/images/todo.png"}
                className="rounded-lg pb-1 "
                alt={"projects"}
              />

         <ProjectThumbnailLinks
          link={"/projects/todoapp"}
          name={"TODO App"}
          description={"A simple todo clone built with react."}
        />
    
</div>
</div>
<div className="container bg-purple-200 rounded-lg m-1 w-1/2 p-1 border-white border-2 mx-auto" >
     <div className="flex flex-row m-4">
    <Image
                height={100}
                width={100}
                src={"/assets/images/pyramid.png"}
                className="rounded-lg pb-1 "
                alt={"projects"}
              />
        <ProjectThumbnailLinks
          link={"/projects/pyramid"}
          name={"Pyramid App"}
          description={"A simple 3D clone built with react."}
        />
        </div>
        </div>

        <div className="container bg-purple-200 rounded-lg m-1 w-1/2 p-1 border-white border-2 mx-auto" >
     <div className="flex flex-row m-4">
    <Image
                height={100}
                width={100}
                src={"/assets/images/3dpyramid.png"}
                className="rounded-lg pb-1 "
                alt={"projects"}
              />
        <ProjectThumbnailLinks
          link={"/projects/pyramid3d"}
          name={"3D Pyramid App"}
          description={"A simple pyramid clone built with react."}
        />
        </div>
        </div>
       
        <div className="container bg-purple-200 rounded-lg m-1 w-1/2 p-1 border-white border-2 mx-auto" >
     <div className="flex flex-row m-4">
    <Image
                height={100}
                width={100}
                src={"/assets/images/appdesign.png"}
                className="rounded-lg pb-1 "
                alt={"projects"}
              />
        <ProjectThumbnailLinks
          link={"/projects/designapp"}
          name={"App Design"}
          description={"A simple App Design clone built with react."}
        />
       </div>
       </div>
        </div>
  );
}

function ProjectThumbnailLinks(props: {
  link: string;
  name: string;
  description: string;
}) {
  return (
    <Link href={props.link} className="">
     <div className=" container mx-1 flex flex-col rounded-lg bg-purple-200 p-4 my-2">
     
        <h3 className="font-serif text-purple-900">{props.name}</h3>

        <div className="font-serif pt-1 text-xs text-black">{props.description}</div>
      </div>
 
    </Link>
  );
}
