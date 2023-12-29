import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-auto my-2 flex w-full justify-center text-sm">
      Osama Khalil - © {currentYear} - All rights reserved.
    </div>
  );
}
