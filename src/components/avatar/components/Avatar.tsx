import clsx from "clsx"
import React from "react"
import { Box } from "old-ui"
import { AvatarBoxVariants, avatarBox } from "../style/avatar.css"
import { BoxExtendedProps } from "../../../types/system"

type Props = BoxExtendedProps<HTMLDivElement> & {
  shape?: NonNullable<AvatarBoxVariants>["shape"]
}

export const Avatar: React.FC<Props> = ({
  children,
  className,
  shape = `circle`,
  ...rest
}) => {
  const avatarClass = avatarBox({ shape })
  return (
    <Box {...rest} className={clsx(avatarClass, className)}>
      {children}
    </Box>
  )
}
