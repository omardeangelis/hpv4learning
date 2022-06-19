import { Stack, Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React from "react";
import { BlockDescriptionProps } from "../../../types";

type Props = {
  label?: string;
} & BlockDescriptionProps;

const ProjectContent = ({
  title,
  description,
  label,
  ...rest
}: Props & BoxProps) => {
  return (
    <Box className='content-box' {...rest}>
      <Stack direction='column' alignItems='initial' spacing='8px'>
        <Typography component='h3' fontWeight={600}>
          {title}
        </Typography>
        <Typography
          component='p'
          fontWeight={400}
          sx={{
            color: "grey.500",
          }}
        >
          {description}
        </Typography>
        {label ? <Box className='label-box'>{label}</Box> : null}
      </Stack>
    </Box>
  );
};

export default ProjectContent;
