import { Button, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { Box, BoxProps, Stack } from "@mui/system"
import React from "react"
import { navigate } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"
import { BorderBox } from "../layout"
import { triggerGACustomEvent } from "../../utils/tracking"

const Wrapper = styled(BorderBox)(() => ({
  maxWidth: `520px`,
  width: `100%`,
  borderRadius: `8px`,
  borderColor: `#343A40`,
}))

type Props = {
  title: string
  description: string
  link: string
  kind: "yt" | "discord"
} & Omit<BoxProps, "title">

export const BannerCard = ({
  title,
  description,
  link,
  kind,
  ...rest
}: Props) => {
  const handleNavigation = React.useCallback(() => {
    const event = kind === `discord` ? `join_discord` : `yt_channel_view`
    triggerGACustomEvent({ event })()
    navigate(link)
  }, [link, kind])
  return (
    <Wrapper
      {...rest}
      sx={{
        backgroundColor: kind === `yt` ? `#000` : `purple.900`,
        p: { xs: `16px`, lg: `24px` },
        "&:hover": {
          cursor: `pointer`,
          filter:
            kind === `yt`
              ? `drop-shadow(3px 3px 20px rgba(255, 52, 52, 0.3))`
              : `drop-shadow(3px 3px 20px rgba(88, 101, 242, 0.3))`,
        },
      }}
    >
      <Stack
        spacing="24px"
        flexDirection="column"
        sx={{
          alignItems: { xs: `center`, lg: `flex-start` },
        }}
      >
        <Typography
          fontWeight={500}
          sx={{
            fontSize: { xs: `24px`, lg: `36px` },
            lineHeight: { xs: `32px`, lg: `45px` },
            textAlign: { xs: `center`, lg: `left` },
            color: `white`,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: `16px`,
            lineHeight: `22px`,
            textAlign: { xs: `center`, lg: `left` },
            color: `white`,
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: `fit-content`,
            backgroundColor: kind === `yt` ? `red.300` : `blue.400`,
            borderRadius: `100px`,
          }}
          onClick={handleNavigation}
        >
          unisciti
        </Button>
      </Stack>
      <Stack
        flexDirection="column"
        sx={{
          alignItems: `center`,
        }}
        mt="34px"
      >
        <Box maxWidth="220px">
          {kind === `yt` ? (
            <StaticImage src="./images/yt.png" alt="Youtube Logo" />
          ) : (
            <StaticImage src="./images/discord.png" alt="discord logo" />
          )}
        </Box>
      </Stack>
    </Wrapper>
  )
}
