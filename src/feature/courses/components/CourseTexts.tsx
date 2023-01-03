import Typography from "@mui/material/Typography"
import { css } from "@mui/system"
import styled from "@emotion/styled"
import React from "react"

const StyledH2 = styled(Typography)(
  css({
    fontSize: [`24px`, `28px`],
    fontWeight: `600`,
    lineHeigth: `29px`,
    marginTop: `24px`,
  })
) as typeof Typography

const StyledH3 = styled(Typography)(
  css({
    fontSize: [`20px`, `22px`],
    fontWeight: `600`,
    lineHeigth: `25px`,
    marginTop: `20px`,
  })
) as typeof Typography

const StyledP = styled(Typography)(
  css({
    fontSize: [`16px`, `18px`],
    fontWeight: `400`,
    lineHeigth: `12px`,
    marginTop: `16px`,
  })
) as typeof Typography

export const MarkdownH2 = ({ node, ...props }: { node: any }) => (
  <StyledH2 {...props} component="h2" />
)
export const MarkdownH3 = ({ node, ...props }: { node: any }) => (
  <StyledH3 {...props} component="h3" />
)
export const MarkdownP = ({ node, ...props }: { node: any }) => (
  <StyledP {...props} component="p" />
)
