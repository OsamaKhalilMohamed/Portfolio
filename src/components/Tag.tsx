import React from "react";
import { useRandomColor } from "~/hooks/useRandomColor";
import { getRandomTagColor } from "~/utils/colors";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  const colorClass = useRandomColor(variant);

  return (
    <div className={`rounded-lg px-2 py-1 shadow-lg ${colorClass}`}>
      {title}
    </div>
  );
}
