import { Box } from "old-ui"
import React from "react"
import { BoxExtendedProps } from "../../../types/system"
import { heroSpacer } from "../style/HeroSpacer.css"

type Props = Omit<BoxExtendedProps<HTMLDivElement>, "children">

export const HeroSpacer: React.FC<Props> = ({ ...rest }) => (
  <Box className={heroSpacer} {...rest} />
)
