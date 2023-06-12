import { FcInfo } from "react-icons/fc";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="">
        <div className="flex flex-row">
          <Image
            height={200}
            width={200}
            src={"/assets/images/photo.jpg"}
            className="rounded-lg"
            alt={"a picture of myself"}
          />
        </div>
        <div className="flex flex-row gap-1 font-serif text-3xl">
          <FcInfo />
          Alison Buys
        </div>
        <div className="font-serif">
          Outgoing and ambitious high school graduate.
          <br />
          Eager to use my programing skills to work as an software developer.
          <br />
          Problem solver eager to prove my value and talent.
          <br />
          Motivated to advance and expand my skill set through targeted
          mentorship and challenging projects.
        </div>
      </div>
    </>
  );
}
