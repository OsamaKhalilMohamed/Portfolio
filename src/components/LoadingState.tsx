import React from "react";

type Props = {};

export default function LoadingState({}: Props) {
  return (
    <div className="fixed flex h-full w-full items-center justify-center overflow-hidden bg-red-200 dark:bg-yellow-900">
      <div className="border-1 flex items-center rounded-md border border-amber-600 p-2  dark:border-amber-100">
        <div className="loader"></div>
        <p className="ml-4 mr-4 font-bold">Loading..</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}
