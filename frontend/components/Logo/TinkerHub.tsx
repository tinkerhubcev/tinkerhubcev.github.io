import Image from "next/image";
import images from './images';
import { useState } from 'react'
import { AnimatePresence, inView } from "framer-motion";
import { motion } from "framer-motion";

interface ImageData {
  id: string;
  alt: string;
  url: string;
}

const TinkerHub = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);


  return (
    <>

      <motion.div
        className="mt-5  grid h-72 w-72 md:h-96 md:w-96 md:scale-110 md:mr-2  grid-cols-4 gap-3 drop-shadow-2xl ">


        <motion.div
          layoutId={images[0].id}
          onClick={() => setSelectedImage(images[0])}
          className=" col-span-3  rounded-xl  bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            className="rounded-lg opacity-75"
            style={{ objectFit: "cover" }}
            src={images[0].url}
            alt={images[0].alt}
          ></Image>
        </motion.div>
        <motion.div
          layoutId={images[1].id}
          onClick={() => setSelectedImage(images[1])}
          className="rounded-xl bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg opacity-75"
            src={images[1].url}
            alt={images[1].alt}
          ></Image>
        </motion.div>
        <motion.div
          layoutId={images[2].id}
          onClick={() => setSelectedImage(images[2])}
          className="col-span-4  rounded-xl bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg opacity-75"
            src={images[2].url}
            alt={images[2].alt}
          ></Image>
        </motion.div>
        <motion.div
          layoutId={images[3].id}
          onClick={() => setSelectedImage(images[3])}
          className="col-span-2 rounded-xl bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg opacity-75"
            src={images[3].url}
            alt={images[3].alt}
          ></Image>
        </motion.div>
        <motion.div
          layoutId={images[4].id}
          onClick={() => setSelectedImage(images[4])}
          className=" rounded-xl bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg opacity-75"
            src={images[4].url}
            alt={images[4].alt}
          ></Image>
        </motion.div>
        <motion.div
          layoutId={images[5].id}
          onClick={() => setSelectedImage(images[5])}
          className=" rounded-xl bg-primary hover:bg-transparent transition ease-in-out duration-300  hover:-translate-y-1 hover:scale-110 backdrop-blur-3xl">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg opacity-75"
            src={images[5].url}
            alt={images[5].alt}
          ></Image>
        </motion.div>

      </motion.div>
      <AnimatePresence
        key={selectedImage?.id}
        presenceAffectsLayout
        mode="sync"
        // mode="popLayout"
        initial={false}


      >
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className=" absolute rounded  top-0 h-full w-full backdrop-blur-sm"
            layoutId={selectedImage.id}
             onClick={() => setSelectedImage(null)}>


            <Image
            fill
              // style={{ objectFit: "cover",}}
              className="rounded-2xl h-fit md:h-11/12 object-contain md:object-cover w-fit md:w-full md:scale-50  opacity-100"
              src={selectedImage.url}
              alt={selectedImage.alt}
            ></Image>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  );
};

export default TinkerHub;
