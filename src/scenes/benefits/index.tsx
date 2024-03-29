import HText from "~/shared/HText";
import { type BenefitType, SelectedPage } from "~/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import Link from "next/link";

const benefits: Array<BenefitType> = [
  {
    link: "/design2",
    imageSrc: "/new/design-2.png",
    imageAlt: "",

    title: "Social Media App Design",
    description: "A Social Media App (like Instgram), designed with Figma.",
  },
  {
    link: "/design1",
    imageSrc: "/new/design1.png",
    imageAlt: "SLIME figma design",

    title: "SLIME Clothing App Design",
    description: "A simple clothing store website , designed with Figma.",
  },

  {
    link: "/design3",
    imageSrc: "/new/design3-2.png",
    imageAlt: "",

    title: "Food Delivery App",
    description: "A simple Fast Food Delivery App , designed with Figma.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="designs" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Designs)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>FIGMA DESIGNS</HText>
          <p className="my-5 text-sm"></p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Link href={benefit.link} key={benefit.title}>
              <Benefit
                imageSrc={benefit.imageSrc}
                imageAlt={benefit.imageAlt}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            </Link>
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                ></motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
