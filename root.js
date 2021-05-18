import React from "react";
const defaultTheme = "light";
export const ThemeContext = React.createContext(defaultTheme);
export const ThemeWrapper = ({ element }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {element}
    </ThemeContext.Provider>
  );
};
