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
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] flex h-full w-full flex-grow flex-col items-center rounded-lg bg-stone-800 p-4 shadow-md"
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
        <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-bold text-transparent">
          {description}
        </p>
      ) : (
        <>{description}</>
      )}
    </motion.div>
  );
}
