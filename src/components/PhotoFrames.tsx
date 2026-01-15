// Add this component above your Home function or in a separate file

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type PhotoFramesProps = {
  images: [StaticImageData, StaticImageData, StaticImageData];
};

export const PhotoFrames = ({ images }: PhotoFramesProps) => {
  return (
    <div className="relative mb-8 flex h-48 w-full items-center justify-center">
      {/* Pic 3 - Left */}
      <motion.div
        className="absolute z-10 h-32 w-24 cursor-pointer rounded-sm bg-white p-1.5 shadow-lg md:h-40 md:w-32 md:p-2"
        style={{
          rotate: -12,
          left: "15%",
        }}
        initial={{ rotate: -12 }}
        whileHover={{
          scale: 1.15,
          rotate: -5,
          zIndex: 30,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div className="relative h-[75%] w-full overflow-hidden bg-gray-200">
          <Image src={images[2]} alt="Photo 3" fill className="object-cover" />
        </div>
        <div className="h-[25%] w-full" /> {/* Polaroid bottom space */}
      </motion.div>

      {/* Pic 2 - Center */}
      <motion.div
        className="absolute z-20 h-32 w-24 cursor-pointer rounded-sm bg-white p-1.5 shadow-xl md:h-40 md:w-32 md:p-2"
        style={{ rotate: 3 }}
        initial={{ rotate: 3 }}
        whileHover={{
          scale: 1.2,
          rotate: 0,
          zIndex: 30,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div className="relative h-[75%] w-full overflow-hidden bg-gray-200">
          <Image src={images[1]} alt="Photo 2" fill className="object-cover" />
        </div>
        <div className="h-[25%] w-full" />
      </motion.div>

      {/* Pic 1 - Right */}
      <motion.div
        className="absolute z-10 h-32 w-24 cursor-pointer rounded-sm bg-white p-1.5 shadow-lg md:h-40 md:w-32 md:p-2"
        style={{
          rotate: 15,
          right: "15%",
        }}
        initial={{ rotate: 15 }}
        whileHover={{
          scale: 1.15,
          rotate: 8,
          zIndex: 30,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div className="relative h-[75%] w-full overflow-hidden bg-gray-200">
          <Image src={images[0]} alt="Photo 1" fill className="object-cover" />
        </div>
        <div className="h-[25%] w-full" />
      </motion.div>
    </div>
  );
};
