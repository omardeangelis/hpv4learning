import { Box, BoxProps, Stack, StackProps } from "@mui/system"
import React from "react"
import MoneyOffCsredSharpIcon from "@mui/icons-material/MoneyOffCsredSharp"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { Typography } from "@mui/material"
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

export const BannerAction = ({
  isFree,
  children,
  ...rest
}: StackProps & { isFree?: boolean }) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    {...rest}
  >
    {isFree ? (
      <MoneyOffCsredSharpIcon
        sx={{
          color: `purple.400`,
        }}
        fontSize="small"
      />
    ) : (
      <AttachMoneyIcon
        sx={{
          color: `purple.400`,
        }}
        fontSize="small"
      />
    )}
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
