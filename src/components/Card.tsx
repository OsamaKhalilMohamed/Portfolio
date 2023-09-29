import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string | React.ReactElement;
  logo: any;
  logoSize?: number;
  animate?: boolean;
  className?: string;
};

export default function Card({
  title,
  description,
  logo,
  logoSize,
  animate = true,
  className,
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
      className="mx-auto flex h-full w-full max-w-[600px] flex-grow flex-col items-center rounded-xl bg-zinc-900/90 p-4 shadow-md hover:bg-zinc-800"
    >
      <div>
        <motion.div className={`${className} min-h-[100px] mx-auto flex justify-center`}>
          <Image
            src={logo}
            alt="logo"
            width={logoSize ?? 150}
            style={{ objectFit: "contain" }}
            height={logoSize ?? 150}
            quality={100}
          />
        </motion.div>
        <h1 className="my-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl font-bold text-transparent">
          {title}
        </h1>
      </div>

      <div className="flex h-full min-h-max max-w-[600px] flex-col px-2">
        {<>{description}</>}
      </div>
    </motion.div>
  );
}
