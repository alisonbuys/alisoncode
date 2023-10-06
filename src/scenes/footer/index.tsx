import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image
            height={200}
            width={200}
            src={"/new/Logo.png"}
            className=" h-18 w-18 "
            alt={"logo"}
          />
          {/* <div className="my-5">
            <Image
              height={100}
              width={100}
              src={"/new/Sparkles.png"}
              className=" h-16 w-14 "
              alt={"logo"}
            />
          </div> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className=" text-lg font-bold">Links</h3>
          <div className="my-4">
            <h4 className=" flex text-sm ">GitHub</h4>
            <address className="">
              <Link
                href={"https://github.com/alisonbuys"}
                className="text-sm text-blue-500 hover:underline"
              >
                https://github.com/alisonbuys
              </Link>
            </address>
          </div>
          <div className="my-4">
            <h4 className=" flex text-sm">Linked in</h4>
            <address className="">
              <Link
                href={"  https://www.linkedin.com/in/alison-buys-a84474275"}
                className="text-sm text-blue-500 hover:underline"
              >
                https://www.linkedin.com/in/alison-buys-a84474275
              </Link>
            </address>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className="text-lg font-bold">Contact Me</h3>

          <div className="my-4">
            <h4 className="flex text-sm">Cell</h4>
            <address className="text-sm">
              <p>062 340 2856</p>
            </address>
          </div>

          <div className="my-4">
            <h4 className="flex text-sm">Email</h4>
            <address className="text-sm">
              <p>alisonbuys15@gmail.com</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
