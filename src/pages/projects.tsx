import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="h-screen bg-purple-200">
     <div className="text-6xl text-center p-6 font-serif">Projects</div>
      {/* <div className="span row-span-full m-1 flex flex-col gap-y-6 space-y-1"> */}
      <div className=" flex flex-row gap-4 p-5 justify-center ">
      <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
        <div className="px-2 py-2 pb-1">
      <Image
                height={100}
                width={200}
                src={"/assets/images/msgapp.png"}
                className=" rounded-lg pb-1 "
                alt={"project"}
              />
        <ProjectThumbnailLinks
          link={"/projects/messageapp"}
          name={"Message App"}
          description={"A simple WhatsApp clone built with react."}
        />
        </div>
        </div>

 <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
        <div className="px-2 py-2 pb-1">
      <Image
                height={100}
                width={200}
                src={"/assets/images/todo.png"}
                className=" rounded-lg pb-1 "
                alt={"project"}
              />
        <ProjectThumbnailLinks
          link={"/projects/todoapp"}
          name={"TODO App"}
          description={"A simple todo clone built with react."}
        />
        </div>
        </div>
        </div>

        <div className=" flex flex-row gap-4 p-5 justify-center ">
        <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
        <div className="px-2 py-2 pb-1">
      <Image
                height={100}
                width={200}
                src={"/assets/images/pyramid.png"}
                className=" rounded-lg pb-1 "
                alt={"project"}
              />
        <ProjectThumbnailLinks
          link={"/projects/pyramid"}
          name={"Pyramid App"}
          description={"A simple 3D clone built with react."}
        />
        </div>
        </div>

        <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
        <div className="px-2 py-2 pb-1">
      <Image
                height={100}
                width={200}
                src={"/assets/images/3dpyramid.png"}
                className=" rounded-lg pb-1 "
                alt={"project"}
              />
        <ProjectThumbnailLinks
          link={"/projects/pyramid3d"}
          name={"3D Pyramid App"}
          description={"A simple pyramid clone built with react."}
        />
        </div>
        </div>
        <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
        <div className="px-2 py-2 pb-1">
      <Image
                height={100}
                width={200}
                src={"/assets/images/appdesign.png"}
                className=" rounded-lg pb-1 "
                alt={"project"}
              />
        <ProjectThumbnailLinks
          link={"/projects/designapp"}
          name={"App Design"}
          description={"A simple App Design clone built with react."}
        />
        </div>
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
     <div className="container flex basis-1/5 flex-col rounded-lg bg-white">
     <div className="px-2 py-2 pb-1">
        <h3 className="font-serif text-purple-800">{props.name}</h3>

        <div className="font-serif pt-1 text-xs text-purple-500">{props.description}</div>
      </div>
      </div>
    </Link>
  );
}
