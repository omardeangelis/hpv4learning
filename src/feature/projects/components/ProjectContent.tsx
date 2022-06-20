import { Stack, Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React from "react";

type Props = {
  title?: null | string;
  label?: string | null;
  description?: string | null;
};

const ProjectContent = ({
  title,
  description,
  label,
  ...rest
}: Props & BoxProps) => {
  return (
    <Box className='content-box' {...rest}>
      <Stack direction='column' alignItems='initial' spacing='8px'>
        {title ? (
          <Typography component='h3' fontWeight={600}>
            {title}
          </Typography>
        ) : null}
        {description ? (
          <Typography
            component='p'
            fontWeight={400}
            sx={{
              color: "grey.500",
            }}
          >
            {description}
          </Typography>
        ) : null}
        {label ? <Box className='label-box'>{label}</Box> : null}
      </Stack>
    </Box>
  );
};

export default ProjectContent;
