import Link from "next/link";
import React from "react";

type Props = {
  link: string;
};

export default function ExternalIcon(props: Props) {
  const { link } = props;

  return (
    <Link href={link} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 cursor-pointer font-inter text-3xl"
        style={{ display: "inline", verticalAlign: "middle" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </Link>
  );
}
