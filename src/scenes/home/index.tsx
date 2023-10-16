import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import useMediaQuery from "~/hooks/useMediaQuery";
import ActionButton from "~/shared/ActionButton";
import { SelectedPage } from "~/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-50 py-10 md:h-screen md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                <Image
                  height={800}
                  width={800}
                  src={"/new/HomePageText2.png"}
                  className=" "
                  alt={"home-page-text"}
                />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Problem Solver eager to prove my value and talent. Desire to learn
              and use my creativity to be a web developer.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Me
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            ></AnchorLink>
            <Link
              href={"https://www.linkedin.com/in/alison-buys-a84474275"}
              className="rounded-full bg-gray-20 p-2 text-primary-500 underline hover:text-secondary-500"
            >
              <AiOutlineLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href={"https://github.com/alisonbuys"}
              className="rounded-full bg-gray-20 p-2 text-primary-500 underline hover:text-secondary-500"
            >
              <AiOutlineGithub className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <Image
            height={800}
            width={800}
            src={"/new/HomePageGraphic2.png"}
            className=""
            alt={"home-page-graphic"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
