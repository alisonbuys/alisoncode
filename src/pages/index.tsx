import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
            <div className="container mx-auto justify-center">
              <div className="p-4">
                <Image
                  height={200}
                  width={200}
                  src={"/assets/images/pfp.png"}
                  className=" mx-auto"
                  alt={"AI Picture of Alison"}
                />
              </div>
              <div className="mx-auto pb-5 text-3xl font-medium lg:text-5xl">
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
                className="mt-5 flex w-32 rounded-lg bg-gradient-to-r from-indigo-500 to-yellow-300 p-3 text-xs 
font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                Projects
                <FaLaptopCode className="ml-2 h-5 w-5 font-medium" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" container mx-auto py-10 sm:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex font-serif text-3xl tracking-tight text-gray-900">
                Projects
              </div>
              <p className="mb-5 mt-6 font-serif text-lg leading-8 text-gray-600"></p>
              <div className="flex flex-row gap-4">
                <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
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
                <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
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
              </div>
              <div className="flex flex-row gap-4">
                <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
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
                      name={"Pyramid App"}
                      description={"A simple 3D clone built with react."}
                    />
                  </div>
                </div>
                <div className="container m-1 mx-auto w-auto rounded-lg border-2 border-white bg-slate-300 hover:bg-indigo-50 sm:mx-auto sm:w-96 md:mx-auto md:w-96 lg:mx-auto lg:w-1/2">
                  <div className="m-4 flex flex-row">
                    <Image
                      height={100}
                      width={100}
                      src={"/assets/images/K53_app.png"}
                      className="rounded-lg  "
                      alt={"projects"}
                    />
                    <ProjectThumbnailLinks
                      link={"/projects/k53app"}
                      name={"K53 Test App"}
                      description={
                        "A simple K53 Test App clone built with react."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactPage />
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
