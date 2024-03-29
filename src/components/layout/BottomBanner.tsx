import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"
import { Box, BoxProps, Container, css } from "@mui/system"
import React from "react"

type Props = { title: string | React.ReactElement } & Omit<BoxProps, "title">

const StyledBanner = styled(Box)(
  css({
    paddingTop: [`36px`, `72px`],
    paddingBottom: [`36px`, `72px`],
    display: `flex`,
    justifyContent: `center`,
  })
)

export const BottomBanner = ({ title, children, ...rest }: Props) => (
  <StyledBanner {...rest}>
    <Container maxWidth="lg">
      <Box maxWidth={[`unset`, `756px`]} mx="auto">
        <Stack
          direction="column"
          alignItems={`center`}
          justifyContent="center"
          spacing={`24px`}
        >
          {typeof title === `string` ? (
            <Typography
              color="purple.800"
              fontSize={[`24px`, `34px`]}
              lineHeight={[`29px`, `39px`]}
              textAlign="center"
              fontWeight={600}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
          {children || null}
        </Stack>
      </Box>
    </Container>
  </StyledBanner>
)
