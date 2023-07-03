import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string | React.ReactElement;
  logo: any;
  logoHeight?: number;
};

export default function Card({
  title,
  description,
  logo,
  logoHeight,
}: Props): React.ReactElement {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-grow flex-col items-center rounded-lg bg-stone-800 p-4 shadow-xl hover:bg-stone-700"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileHover={{ rotate: 360 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`h-${logoHeight ?? 30} ${logoHeight ? "mb-2" : "mb-8"}`}
      >
        <Image
          src={logo}
          alt="logo"
          width={150}
          className="object-cover"
          height={150}
        />
      </motion.div>

      <h1 className="mb-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl font-bold text-transparent">
        {title}
      </h1>
      {typeof description === "string" ? (
        <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
          {description}
        </p>
      ) : (
        description
      )}
    </motion.div>
  );
}
