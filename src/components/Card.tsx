import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string | React.ReactElement;
  logo: any;
  logoSize?: number;
  animate?: boolean;
  logoHeight?: number;
};

export default function Card({
  title,
  description,
  logo,
  logoHeight,
  logoSize,
  animate = true,
}: Props): React.ReactElement {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="flex h-full w-full flex-grow flex-col items-center rounded-lg bg-stone-900 p-4 shadow-md"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileHover={{ rotate: animate ? 360 : 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`h-${logoHeight ?? 30} ${
          logoHeight ? "mb-2" : "mb-8"
        } mx-auto flex w-full justify-center`}
      >
        <Image
          src={logo}
          alt="logo"
          width={logoSize ?? 150}
          style={{ objectFit: "contain" }}
          height={logoSize ?? 150}
          quality={100}
        />
      </motion.div>

      <h1 className="mb-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl font-bold text-transparent">
        {title}
      </h1>
      {typeof description === "string" ? (
        <p className="text-small mt-2 font-bold text-zinc-300">{description}</p>
      ) : (
        <>{description}</>
      )}
    </motion.div>
  );
}
