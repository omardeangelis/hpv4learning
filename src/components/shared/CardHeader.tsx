import { Stack, StackProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type Props = {
  variant: "circular" | "square" | "rounded";
  children: React.ReactChild;
  img: React.ReactElement;
};

const CardHeader = ({ img, children, ...rest }: Props & StackProps) => {
  return (
    <Stack direction='row' justifyItems='flex-start' {...rest}>
      {img}
      <Box>{children}</Box>
    </Stack>
  );
};

export default CardHeader;
