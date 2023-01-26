import Box, { BoxProps } from "@mui/system/Box"
import Stack, { StackProps } from "@mui/system/Stack"
import React from "react"
import Typography from "@mui/material/Typography"
import { BorderBox } from "../../../components/layout"

export const BannerWrapper = ({ children, ...rest }: BoxProps) => (
  <BorderBox borderRadius="8px" {...rest}>
    <Box p="16px">{children}</Box>
  </BorderBox>
)

export const BannerBody = ({ children, ...rest }: StackProps) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-start"
    {...rest}
  >
    {children}
  </Stack>
)

export const BannerAction = ({ children, ...rest }: StackProps) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    {...rest}
  >
    {children}
  </Stack>
)

export const BannerActionIcon = ({
  icon,
  content,
  ...rest
}: { icon: React.ReactNode; content: string | number } & StackProps) => (
  <Stack flexDirection="row" alignItems="center" {...rest}>
    {icon}
    <Typography
      sx={{
        ml: `4px`,
        fontSize: `12px`,
        lineHeight: `14px`,
      }}
    >
      {content}
    </Typography>
  </Stack>
)
