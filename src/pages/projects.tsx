import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto rounded-2xl bg-gray-100 p-4">
      <h1 className="flex pb-5 font-serif text-3xl tracking-tight text-black">
        My Projects
        <PencilSquareIcon className=" h-10 w-10 pb-2 pl-2.5" />
      </h1>
      {/* <div className="span row-span-full m-1 flex flex-col gap-y-6 space-y-1"> */}
      <div className="flex flex-col gap-4  ">
        <ProjectThumbnailLinks
          link={"/projects/messageapp"}
          name={"Message App"}
          description={"A simple whatsapp clone built with react."}
        />

        <ProjectThumbnailLinks
          link={"/projects/todoapp"}
          name={"TODO App"}
          description={"A simple todo clone built with react."}
        />

        <ProjectThumbnailLinks
          link={"/projects/threed"}
          name={"ThreeD App"}
          description={"A simple 3D clone built with react."}
        />

        <ProjectThumbnailLinks
          link={"/projects/pyramid"}
          name={"Pyramid App"}
          description={"A simple pyramid clone built with react."}
        />
        <ProjectThumbnailLinks
          link={"/projects/pyramid3d"}
          name={"3D Pyramid App"}
          description={"A simple 3D pyramid clone built with react."}
        />

        <ProjectThumbnailLinks
          link={"/projects/designapp"}
          name={"App Design"}
          description={"A simple App Design clone built with react."}
        />
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
      <div className="h-full rounded-lg bg-gray-300 p-4 pb-4 transition hover:bg-purple-300">
        <h3 className="font-serif text-purple-700">{props.name}</h3>

        <div className="font-serif">{props.description}</div>
      </div>
    </Link>
  );
}
