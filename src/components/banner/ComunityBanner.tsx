import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import styled from "@emotion/styled"
import { BannerCard } from "./BannerCard"

const CustomStack = styled(Box)({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  "& > *:not(:first-of-type)": {
    marginTop: `16px`,
    marginLeft: `0px`,
  },
  "@media screen and (min-width: 768px)": {
    flexDirection: `row`,

    "& > *:not(:first-of-type)": {
      marginTop: `0px`,
      marginLeft: `24px`,
    },
  },
})

export const CommunityBanner = () => (
  <Container maxWidth="lg">
    <CustomStack
      sx={{ flexDirection: { xs: `column`, lg: `row` } }}
      justifyContent="center"
    >
      <BannerCard
        kind="discord"
        title="Incontra altri studenti e partecipa ai nostri eventi live"
        description="Studia insieme ad altre sviluppatori e lavora sulle tue soft skill grazie a percorsi ed eventi esclusivi"
        link={`https://discord.gg/ZX2rPXx2BD`}
      />
      <BannerCard
        kind="yt"
        title="Incontra altri studenti e partecipa ai nostri eventi live"
        description="Studia insieme ad altre sviluppatori e lavora sulle tue soft skill grazie a percorsi ed eventi esclusivi"
        link="https://www.youtube.com/c/HPVfilm"
      />
    </CustomStack>
  </Container>
)
