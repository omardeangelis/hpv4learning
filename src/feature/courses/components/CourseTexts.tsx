import Typography from "@mui/material/Typography"
import { css } from "@mui/system"
import styled from "@emotion/styled"
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import Box from "@mui/material/Box"

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

const StyledBox = styled(Box)`
  max-width: 1280px;
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
  width: 100%;
`

export const MarkdownH2 = ({ node, ...props }: { node: any }) => (
  <StyledH2 {...props} component="h2" />
)
export const MarkdownH3 = ({ node, ...props }: { node: any }) => (
  <StyledH3 {...props} component="h3" />
)
export const MarkdownP = ({ node, ...props }: { node: any }) => (
  <StyledP {...props} component="p" />
)

export const MarkdownCode = ({ node, ...props }: { node: any }) => {
  const { children } = props as { children: string }
  return (
    <SyntaxHighlighter language="javascript" style={dracula} {...props}>
      {children}
    </SyntaxHighlighter>
  )
}

export const MarkdownImage = ({ node, ...props }: { node: any }) => (
  <StyledBox>
    {/* eslint-disable-next-line jsx-a11y/alt-text*/}
    <img
      style={{ maxWidth: `100%`, height: `100%`, width: `100%` }}
      {...props}
    />
  </StyledBox>
)
