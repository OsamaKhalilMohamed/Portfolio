export const getRandomClassName = () => {
  const random = Math.random();
  return random < 0.5
    ? "text-gray-500 dark:text-gray-500"
    : "text-gray-900 dark:text-gray-300";
};

export const renderTextWithRandomClasses = (text: string) => {
  const words = text.split(" ");
  return words.map((word, index) => (
    <span key={index} className={getRandomClassName()}>
      {word}{" "}
    </span>
  ));
};
