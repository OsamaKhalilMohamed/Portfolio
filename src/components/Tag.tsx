import React, { useEffect, useState } from "react";
import { getRandomTagColor } from "~/utils/colors";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  return (
    <span
      className={`rounded-lg px-2 py-1 shadow-lg ${getRandomTagColor(variant)}`}
    >
      {title}
    </span>
  );
}
