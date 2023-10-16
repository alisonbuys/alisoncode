import { SelectedPage } from "~/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefit({
  imageSrc,
  imageAlt,
  title,
  description,
  setSelectedPage,
}: Props) {
  const [loaded, set_loaded] = useState<boolean>();

  useEffect(() => {
    if (!loaded) {
      set_loaded(true);
    }
  }, []);

  if (!loaded) return <></>;

  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center transition hover:bg-gray-50"
    >
      <div className="mb-4 flex justify-center">
        <div className="border border-gray-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactMe)}
        href={`#${SelectedPage.ContactMe}`}
      ></AnchorLink>
    </motion.div>
  );
}
