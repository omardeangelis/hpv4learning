import React, { useContext, createContext } from "react";
//Material UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const theme = useTheme();
  const mediaQuery = {
    sm: useMediaQuery(theme.breakpoints.down("sm")),
    md: useMediaQuery(theme.breakpoints.down("md")),
    lg: useMediaQuery(theme.breakpoints.down("lg")),
  };
  return (
    <AppContext.Provider
      value={{
        mediaQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
