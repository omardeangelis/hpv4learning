export const createBrandText = (text: string) => {
  return text
    .replace("**", "<strong class='brand-text'>")
    .replace("**", "</strong>");
};

export const createRowText = (text: string) => {
  return text.replace("**", "").replace("**", "");
};

export const removeAllPointsFromString = (text: string) => {
  return text.replace(/\./g, "");
};

export const convertToHHMMSS = (time: number, short = false) => {
  const H = Math.floor(time / 3600);
  const i = Math.floor((time % 3600) / 60);
  const s = time % 60;
  if (short) {
    return (time / 3600).toFixed(1);
  }
  return `${H}:${i}:${s}`;
};
