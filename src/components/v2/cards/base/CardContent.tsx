import { Stack, StackProps } from "old-ui"
import React, { HTMLAttributes } from "react"
import clsx from "clsx"

export type CardContentProps = HTMLAttributes<HTMLDivElement> & StackProps

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...rest
}) => (
  <Stack {...rest} className={clsx(className)}>
    {children}
  </Stack>
)
