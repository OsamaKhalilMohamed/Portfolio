import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type PhotoFramesProps = {
  images: [StaticImageData, StaticImageData, StaticImageData];
};

export const PhotoFrames = ({ images }: PhotoFramesProps) => {
  const [activeFrame, setActiveFrame] = useState<number | null>(null);

  const frames = [
    {
      id: 2,
      zIndex: 10,
      rotate: -12,
      hoverRotate: -5,
      position: { left: "15%" },
      image: images[2],
      alt: "Photo 3",
    },
    {
      id: 1,
      zIndex: 20,
      rotate: 3,
      hoverRotate: 0,
      position: {},
      image: images[1],
      alt: "Photo 2",
    },
    {
      id: 0,
      zIndex: 10,
      rotate: 15,
      hoverRotate: 8,
      position: { right: "15%" },
      image: images[0],
      alt: "Photo 1",
    },
  ];

  const handleFrameTap = (id: number) => {
    setActiveFrame(activeFrame === id ? null : id);
  };

  return (
    <div
      className="relative mb-8 flex h-48 w-full items-center justify-center"
      // Tap outside to deselect on mobile
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveFrame(null);
        }
      }}
    >
      {frames.map((frame) => {
        const isActive = activeFrame === frame.id;

        return (
          <motion.div
            key={frame.id}
            className="absolute h-32 w-24 cursor-pointer rounded-sm bg-white p-1.5 shadow-lg md:h-40 md:w-32 md:p-2"
            style={{
              ...frame.position,
            }}
            initial={{ rotate: frame.rotate, scale: 1 }}
            animate={{
              rotate: isActive ? frame.hoverRotate : frame.rotate,
              scale: isActive ? 1.15 : 1,
              zIndex: isActive ? 30 : frame.zIndex,
            }}
            whileHover={{
              scale: 1.15,
              rotate: frame.hoverRotate,
              zIndex: 30,
            }}
            whileTap={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleFrameTap(frame.id);
            }}
          >
            <div className="relative h-[75%] w-full overflow-hidden bg-gray-200">
              <Image
                src={frame.image}
                alt={frame.alt}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
            <div className="h-[25%] w-full" />
          </motion.div>
        );
      })}
    </div>
  );
};
