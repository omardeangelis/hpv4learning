import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMobile, setIsMobile] = React.useState<boolean>();

  React.useEffect(() => {
    setIsMobile(sm);
  }, [sm]);

  return isMobile;
};
