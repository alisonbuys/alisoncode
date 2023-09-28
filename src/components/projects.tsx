import Link from "next/link";
import Image from "next/image";

export function ProjectsPage() {
  return (
    <div className="w-screen bg-indigo-100 ">
      <div className="flex flex-row justify-start">
        {" "}
        <Image
          height={200}
          width={200}
          src={"/assets/images/treedec.png"}
          className=""
          alt={"AI Picture of Alison"}
        />
      </div>
      <div className="justify-center pb-4 text-center font-sans text-3xl font-semibold text-indigo-950">
        PROJECTS
      </div>
      {/* <div className="span row-span-full m-1 flex flex-col gap-y-6 space-y-1"> */}
      <div className="container m-1 w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/wapp.png"}
            className="h-30 w-20 rounded-lg "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/messageapp"}
            name={"Message App"}
            description={"A simple WhatsApp clone built with react."}
          />
        </div>
      </div>

      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/tapp.png"}
            className="h-30 w-20 rounded-lg "
            alt={"projects"}
          />

          <ProjectThumbnailLinks
            link={"/projects/todoapp"}
            name={"TODO App"}
            description={"A simple todo clone built with react."}
          />
        </div>
      </div>
      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/Pyramid.png"}
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

      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/3D_pyramid.png"}
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

      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/App_design.png"}
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
      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={200}
            width={200}
            src={"/assets/images/delapp.png"}
            className="h-30 w-20 rounded-lg   "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/deliveryapp"}
            name={"Cartoon Delivery App"}
            description={
              "A simple Cartoon Delivery App clone built with react."
            }
          />
        </div>
      </div>
      <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-indigo-200 hover:bg-indigo-100 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/K53_app.png"}
            className="h-30 w-32 rounded-lg   "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/k53app"}
            name={"K53 Test App"}
            description={"A simple K53 Test App built with react."}
          />
        </div>
      </div>
      <div className="flex flex-row ">
        {" "}
        <Image
          height={200}
          width={200}
          src={"/assets/images/tree_bottom2.png"}
          className="mt-3"
          alt={"AI Picture of Alison"}
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
      <div className=" container mx-1 my-2 flex flex-col rounded-lg p-4">
        <h3 className="font-sans text-indigo-900">{props.name}</h3>

        <div className="pt-1 font-sans text-xs text-black">
          {props.description}
        </div>
      </div>
    </Link>
  );
}
