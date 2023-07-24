import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="h-screen bg-purple-100">
      <div className="p-6 text-center font-serif text-3xl">Projects</div>
      {/* <div className="span row-span-full m-1 flex flex-col gap-y-6 space-y-1"> */}
      <div className="container m-1 w-auto mx-auto rounded-lg border-2 border-white bg-purple-200 hover:bg-purple-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/msgapp.png"}
            className="rounded-lg  "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/messageapp"}
            name={"Message App"}
            description={"A simple WhatsApp clone built with react."}
          />
        </div>
      </div>

      <div className="container m-1 w-auto mx-auto rounded-lg border-2 border-white bg-purple-200 hover:bg-purple-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/todo.png"}
            className="rounded-lg  "
            alt={"projects"}
          />

          <ProjectThumbnailLinks
            link={"/projects/todoapp"}
            name={"TODO App"}
            description={"A simple todo clone built with react."}
          />
        </div>
      </div>
      <div className="container  m-1 w-auto mx-auto rounded-lg border-2 border-white bg-purple-200 hover:bg-purple-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/pyramid.png"}
            className="rounded-lg  "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/pyramid"}
            name={"Pyramid App"}
            description={"A simple 3D clone built with react."}
          />
        </div>
      </div>

      <div className="container  m-1 w-auto mx-auto rounded-lg border-2 border-white bg-purple-200 hover:bg-purple-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/3dpyramid.png"}
            className="rounded-lg  "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/pyramid3d"}
            name={"3D Pyramid App"}
            description={"A simple pyramid clone built with react."}
          />
        </div>
      </div>

      <div className="container  m-1 w-auto mx-auto rounded-lg border-2 border-white bg-purple-200 hover:bg-purple-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/appdesign.png"}
            className="rounded-lg  "
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
      <div className=" container mx-1 my-2 flex flex-col rounded-lg p-4">
        <h3 className="font-serif text-purple-900">{props.name}</h3>

        <div className="pt-1 font-serif text-xs text-black">
          {props.description}
        </div>
      </div>
    </Link>
  );
}
