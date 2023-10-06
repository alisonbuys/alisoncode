import { SelectedPage, type ClassType } from "~/shared/types";
import { motion } from "framer-motion";
import HText from "~/shared/HText";
import Class from "./Class";
import Link from "next/link";

const classes: Array<ClassType> = [
  {
    link: "/projects/messageapp",
    name: " Message App",
    description: "A simple WhatsApp clone built with react.",
    image: "/new/image1.png",
  },
  {
    link: "/projects/todoapp",
    name: "Todo App ",
    description: "A simple Todo clone built with react.",
    image: "/new/image2.png",
  },
  {
    link: "/projects/designapp",
    name: "Design App",
    description: "A simple App Design built with react.",
    image: "/new/image5.png",
  },
  {
    link: "/projects/k53app",
    name: "K53 App",
    description: "A simple K53 Test App built with react.",
    image: "/new/image7.png",
  },
  {
    link: "/projects/pyramid",
    name: "Pyramid App",
    description: "A simple Number Pyramid clone built with react.",
    image: "/new/image3.png",
  },
  {
    link: "/projects/pyramid3d",
    name: "Adventure Classes",
    description: "A simple 3D Pyramid clone built with react.",
    image: "/new/image4.png",
  },

  {
    link: "/projects/deliveryapp",
    name: "Training Classes",
    description: "A simple cute Cartoon Delivery App built with react.",
    image: "/new/image6.png",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>MY REACT PROJECTS</HText>
            <p className="py-5"></p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Link href={item.link} key={`${item.name}-${index}`}>
                <Class
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
