import TinkerHub from "@/components/Logo/TinkerHub";
import NavBar from "@/components/Nav";
import { motion } from "framer-motion";
import SectionWrap from "@/wrapper/SectionWrap";


function Hero() {

  return (
    <div className="h-full w-full max-h-fit  flex flex-col ">
      <NavBar />
      <motion.div
        className="flex flex-col-reverse my-2 md:flex-row items-center justify-evenly h-full w-full"
      >
        <div
          className="flex flex-col w-5/6 md:w-1/2 md:items-start text-clip  items-center font-Montserrat overflow-clip flex-wrap"
        >

          <h1 className="font-Montserrat text-2xl  text-center md:text-left font-bold md:text-4xl">Building the Next Generation of Innovators</h1>
          {/* <h1 className="font-Montserrat font-bold text-2xl md:text-4xl">Innovating for a Better Future.</h1> */}
          <motion.p className="mt-5  text-justify w-5/6">Join TinkerHub CEV and develop the technical and social skills needed to succeed in today's fast-paced job market.</motion.p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="px-4 w-1/3 py-2 transition duration-300 bg-secondary rounded-xl hover:bg-white/80 mt-5 hover:text-secondary md:w-1/6 ">Join Us</motion.button>
        </div>

        <TinkerHub />
      </motion.div>
    </div>
  );
}

export default SectionWrap(
  Hero,
  "hero",
  "bg-transparent"
);
