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
    <div className="mx-auto flex h-full w-full max-w-[600px] flex-grow flex-col items-center rounded-xl bg-zinc-900/90 p-4 shadow-md hover:bg-zinc-800">
      <div>
        <motion.div
          className={`${className} mx-auto flex min-h-[100px] justify-center`}
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
        <h1 className="my-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl font-bold text-transparent">
          {title}
        </h1>
      </div>

      <div className="flex h-full min-h-max max-w-[600px] flex-col px-2">
        {<>{description}</>}
      </div>
    </div>
  );
}
