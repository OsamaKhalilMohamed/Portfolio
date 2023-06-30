import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  isModalOpen: boolean;
  setIsModelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function AboutModal({ isModalOpen, setIsModelOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        isModalOpen ? "visible" : "hidden"
      } fixed z-[1055] ml-4 mr-4 flex h-full w-3/4 items-center justify-center overflow-y-auto overflow-x-hidden outline-none sm:w-full`}
    >
      <div className="flex max-h-full w-full max-w-2xl align-middle">
        <div className="relative rounded-lg bg-gradient-to-r from-stone-900 to-stone-800 shadow-lg">
          <div className="flex items-start justify-between rounded-t border-b p-4 ">
            <h3 className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl  font-semibold text-cyan-100 text-transparent ">
              About Me
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
              onClick={() => setIsModelOpen(false)}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-left text-lg leading-relaxed text-transparent">
              Hello Hello, glad that you clicked on this About button, even if
              it was by mistake (most likely, but still appreciate it), anyway
              I'm Osama, I'm a mid-level front-end engineer, and I'm very
              Interested in building interactive UIs. Currently working at{" "}
              <Link href="https://www.synapse-analytics.io/" target="_blank">
                <span className="cursor-pointer italic text-cyan-100 underline underline-offset-1">
                  Synapse Analytics
                </span>
              </Link>{" "}
              <br />
              <br />
              My Top hobbies include : listening to music / watching movies /
              gaming / and avoid writing regex. A wannabe Javascript ninja
              engineer.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
