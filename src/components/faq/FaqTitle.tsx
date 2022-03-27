import { BoxProps, Box, Typography } from "@mui/material";
import React from "react";

const FaqTitle = ({ text, ...rest }: BoxProps & { text: string }) => {
  return (
    <Box {...rest}>
      <Typography
        fontWeight={600}
        sx={{
          lineHeight: { xs: "29px", lg: "56px" },
          fontSize: { xs: "24px", lg: "48px" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default FaqTitle;
