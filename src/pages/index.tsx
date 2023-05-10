import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-7">
        <div className="flex h-20 bg-red-700 p-4">
          <Image
            height={100}
            width={100}
            src={"/assets/images/photo.jpg"}
            className="h-10 w-10 rounded-full "
            alt={"people"}
          />
          <div className=" mt-2 flex-auto text-base font-bold">MY PROFILE</div>
        </div>
        <div className="p-5"></div>

        <div className="rounded-2xl bg-slate-100 p-10 shadow-inner">
          <Image
            height={200}
            width={200}
            src={"/assets/images/photo.jpg"}
            className="h-800 w-800 rounded-full border border-white"
            alt={"people"}
          />
          <div className=" pt-6 text-4xl font-bold">Alison Buys...</div>

          <div>
            Outgoing and ambitious high school graduate. Eager to use my
            programming experience and communication skills to work as an
            software developer. Problem solver eager to prove my value and
            talent. Motivated to advance and expand my skill set through
            targeted mentorship and challenging projects.
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact me
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can contact me on any of the following platforms below:
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                  Cell
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>062 340 2856</p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                  Email
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>alisonbuys15@gmail.com</p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                  Linked in
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <Link
                    href={"https://www.linkedin.com/in/alison-buys-a84474275"}
                    className="text-blue-500"
                  >
                    https://www.linkedin.com/in/alison-buys-a84474275
                  </Link>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                  GitHub
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <Link
                    href={"https://github.com/alisonbuys"}
                    className="text-blue-500"
                  >
                    https://github.com/alisonbuys
                  </Link>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
                  Location
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>South Africa ,Western Cape</p>
                  <p>Mossel Bay</p>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto rounded-2xl bg-gray-100 p-4">
          <h1 className="pb-5 text-3xl font-bold tracking-tight text-gray-900">
            Projects
          </h1>
          <div className="grid grid-cols-2 grid-rows-4 gap-4">
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

            {/* <ProjectThumbnailLinks
              link={"/projects/messageapp"}
              name={"Message App"}
              description={"A simple whatsapp clone built with react."}
            />

            <ProjectThumbnailLinks
              link={"/projects/messageapp"}
              name={"Message App"}
              description={"A simple whatsapp clone built with react."}
            /> */}
          </div>
        </div>
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
      <div className="h-full rounded-lg bg-gray-300 p-4 transition hover:bg-red-300">
        <h3 className="text-red-700">{props.name}</h3>

        <p>{props.description}</p>
      </div>
    </Link>
  );
}

export default Home;
