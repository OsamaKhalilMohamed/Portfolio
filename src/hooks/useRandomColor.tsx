import { useState, useEffect } from "react";
import { getRandomTagColor } from "~/utils/colors";

export const useRandomColor = (variant) => {
  const [colorClass, setColorClass] = useState("");

  useEffect(() => {
    setColorClass(getRandomTagColor(variant)); // Assuming getRandomTagColor is your existing function
  }, [variant]);

  return colorClass;
};
