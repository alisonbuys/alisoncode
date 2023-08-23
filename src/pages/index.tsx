import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import ProjectsPage from "./projects";
import ContactPage from "./contact";
import { FaLaptopCode } from "react-icons/fa";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Alison&apos;s webpage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="container mx-auto flex flex-col">
          <div className=" mx-auto justify-center ">
            <div className="container justify-center mx-auto">
            <div className="p-4">
              <Image
                height={200}
                width={200}
                src={"/assets/images/pfp.png"}
                className=" mx-auto"
                alt={"AI Picture of Alison"}
              />
            </div>
              <div className="pb-5 text-3xl lg:text-5xl mx-auto font-medium">
                Hello, I&apos;m Alison
              </div>
              <div>
                Problem solver eager to prove my value and talent.
                <br />
                Desire to learn and use my creativity to be a web developer.
              </div>

              <Link
                type="button"
                href="/projects"
                className="mt-5 flex w-32 rounded-lg bg-gradient-to-r from-indigo-500 to-yellow-300 font-bold p-3 
text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xs"
              >
                Projects
                <FaLaptopCode className="ml-2 h-5 w-5 font-medium" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" container py-10 sm:py-32 mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-5">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex font-serif text-3xl tracking-tight text-gray-900">
            Projects
          </div>
          <p className="mt-6 font-serif text-lg leading-8 mb-5 text-gray-600">
             
          </p>
          <div className="flex flex-row gap-4">
          <div className="container m-1 w-auto mx-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/wapp.png"}
            className="rounded-lg h-30 w-20 "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/messageapp"}
            name={"Message App"}
            description={"A simple WhatsApp clone built with react."}
          />
        </div>
      </div>
      <div className="container m-1 w-auto mx-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/tapp.png"}
            className="rounded-lg h-30 w-20 "
            alt={"projects"}
          />

          <ProjectThumbnailLinks
            link={"/projects/todoapp"}
            name={"TODO App"}
            description={"A simple todo clone built with react."}
          />
        </div>
      </div>
      </div>
      <div className="container m-1 w-auto mx-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
        <div className="m-4 flex flex-row">
          <Image
            height={100}
            width={100}
            src={"/assets/images/fdapp.png"}
            className="rounded-lg h-30 w-20   "
            alt={"projects"}
          />
          <ProjectThumbnailLinks
            link={"/projects/deliveryapp"}
            name={"Cartoon Delivery App"}
            description={"A simple Cartoon Delivery App clone built with react."}
          />
        </div>
      </div>
       
              </div>
              </div>
              </div>
        <ContactPage/>
      </main>
    </>
  );
};

function ProjectThumbnailLinks(props: {
  link: string;
  name: string;
  description: string;
}) {
  return (
    <Link href={props.link} className="">
      <div className=" container mx-1 my-2 flex flex-col rounded-lg p-4">
        <h3 className="font-serif text-indigo-900">{props.name}</h3>

        <div className="pt-1 font-serif text-xs text-black">
          {props.description}
        </div>
      </div>
    </Link>
  );
}


export default Home;
