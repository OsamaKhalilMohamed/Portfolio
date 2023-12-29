import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-auto mt-2 flex w-full justify-center pb-2 text-sm">
      Osama Khalil - © {currentYear} - All rights reserved.
    </div>
  );
}
