import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box, { BoxProps } from "@mui/system/Box"

type Props = {
  titolo?: null | string
  label?: string | null
  description?: string | null
}

export const ProjectContent = ({
  titolo,
  description,
  label,
  ...rest
}: Props & BoxProps) => (
  <Box className="content-box" {...rest}>
    <Stack
      direction="column"
      alignItems="initial"
      spacing={{ xs: "4px", lg: "8px" }}
    >
      {titolo ? (
        <Typography component="h3" fontWeight={600}>
          {titolo}
        </Typography>
      ) : null}
      {description ? (
        <Typography
          component="p"
          fontWeight={400}
          sx={{
            color: `grey.500`,
          }}
        >
          {description}
        </Typography>
      ) : null}
      {label ? (
        <Box sx={{ display: { xs: "none", lg: "flex" } }} className="label-box">
          {label}
        </Box>
      ) : null}
    </Stack>
  </Box>
)
