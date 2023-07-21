import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";

export default function ContactPage() {
  return (
    <>
    <div className="h-screen bg-purple-100">
    <div className="py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex font-serif text-3xl tracking-tight text-gray-900">
            Contact me
          </div>
          <p className="mt-6 font-serif text-lg leading-8 text-gray-600">
            You can contact me on any of the following platforms below:
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="flex flex-row gap-1 border-l border-indigo-600 pl-6 font-serif font-semibold text-gray-900">
              <BsPhone className="h-6 w-6" />
              Cell
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>062 340 2856</p>
            </address>
          </div>
          <div>
            <h3 className="flex flex-row gap-1 border-l border-indigo-600 pl-6 font-serif font-semibold text-gray-900">
              <AiOutlineMail className="h-6 w-6" />
              Email
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>alisonbuys15@gmail.com</p>
            </address>
          </div>
          <div>
            <h3 className=" flex flex-row gap-1 border-l border-indigo-600 pl-6 font-serif font-semibold text-gray-900">
              <AiOutlineLinkedin className="h-6 w-6" />
              Linked in
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 text-sm not-italic text-gray-600">
              <Link
                href={"https://www.linkedin.com/in/alison-buys-a84474275"}
                className="text-blue-500 hover:underline"
              >
                https://www.linkedin.com/in/alison-buys-a84474275
              </Link>
            </address>
          </div>
          <div>
            <h3 className="flex flex-row gap-1 border-l border-indigo-600 pl-6  font-serif font-semibold text-gray-900">
              <AiOutlineGithub className="h-6 w-6" />
              GitHub
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 text-sm not-italic text-gray-600">
              <Link
                href={"https://github.com/alisonbuys"}
                className="text-blue-500 hover:underline"
              >
                https://github.com/alisonbuys
              </Link>
            </address>
          </div>
          <div>
            <h3 className="flex flex-row gap-1 border-l border-indigo-600 pl-6 font-serif font-semibold text-gray-900">
              <BiMap className="h-6 w-6" />
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
    </div>
    </>
  );
}
