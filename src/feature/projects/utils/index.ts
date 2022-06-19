export const createSlugFromTitle = (text: string) => {
  const reg = /\s/g;
  const regex = /[^a-zA-Z0-9-]/g;
  return text.replace(reg, "-").replace(regex, "").toLowerCase();
};
