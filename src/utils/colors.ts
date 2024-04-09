const twColors = [
  "red",
  "violet",
  "blue",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "indigo",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const defaultColors: any = {
  professional:
    "dark:bg-violet-800 dark:text-violet-300 bg-sky-800 text-sky-300",
  personal:
    "dark:bg-emerald-800 dark:text-emerald-300 bg-rose-800 text-rose-300",
  date: "dark:bg-lime-800 dark:text-lime-300 bg-pink-800 text-pink-300",
};

export const getRandomTagColor = (variant: any): string => {
  if (["professional", "personal", "date"].includes(variant)) {
    return defaultColors[variant];
  } else {
    const index = Math.floor(Math.random() * twColors.length);
    const selectedColor = twColors[index];

    return `bg-${selectedColor}-800 text-${selectedColor}-300`;
  }
};
