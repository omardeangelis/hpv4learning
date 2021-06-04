export const createBoldText = (text) => {
  return text.replace("**", "<strong>").replace("**", "</strong>");
};

export const createRowText = (text) => {
  return text.replace("**", "").replace("**", "");
};

export const removeAllPointsFromString = (text) => {
  return text.replace(/\./g, "");
};
