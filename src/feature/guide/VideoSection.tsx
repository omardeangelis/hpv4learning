import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { Container } from "@mui/system"
import { RoundedButton } from "../../components/layout/RoundedButton"
import SeoLink from "../../components/shared/SeoLink"
import { triggerGACustomEvent } from "../../utils/tracking"

type Props = {
  argomento: string
  image: IGatsbyImageData | undefined | null
  slug: string | undefined | null
}

const StyledBox = styled(Box)`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    max-width: 692px;
  }
`

export const VideoSection = ({ argomento, image, slug }: Props) => {
  const handleNavigate = React.useCallback(() => {
    navigate(`/${slug}/`)
  }, [slug])

  return (
    <Box
      position="relative"
      sx={{ backgroundColor: `#11081F` }}
      py={{ xs: `36px`, lg: `72px` }}
    >
      <Box
        height={{ xs: `266px`, lg: `433px` }}
        maxWidth="568px"
        position="absolute"
        sx={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: `auto`,
          marginBottom: `auto`,
          background: `radial-gradient(50% 50% at 50% 50%, rgba(135, 105, 254, 0.3) 0%, rgba(135, 105, 254, 0) 98.96%)`,
        }}
      />
      <Container maxWidth="xl">
        <Stack
          flexDirection={{ xs: `column`, lg: `row` }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack
            flexDirection="column"
            mr={{ xs: `unset`, lg: `34px` }}
            alignItems={{ xs: `center`, lg: `unset` }}
          >
            <Typography
              fontWeight={600}
              fontSize={{ xs: `34px`, lg: `48px` }}
              lineHeight={{ xs: `34px`, lg: `54px` }}
              color="#fff"
              maxWidth={{ xs: `unset`, lg: `512px` }}
              textAlign={{ xs: `center`, lg: `left` }}
              mb="24px"
            >
              Guarda il nostro{` `}
              <span className="brand-text">videocorso completo</span>
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ xs: `16px`, lg: `18px` }}
              lineHeight={{ xs: `24px`, lg: `27px` }}
              color="#fff"
              maxWidth={{ xs: `unset`, lg: `512px` }}
              textAlign={{ xs: `center`, lg: `left` }}
              mb="24px"
            >
              Il modo più veloce per scoprire {argomento} è mettere le mani in
              pasta seguendo il nostro videocorso di {argomento}
            </Typography>
            <SeoLink isExternal={false} link={`/${slug}/`}>
              <RoundedButton
                onClick={triggerGACustomEvent({ event: "guide_to_course" })}
                size="large"
                color="primary"
                variant="contained"
                sx={{
                  color: `#fff`,
                  fontSize: `18px`,
                  marginBottom: `24px`,
                }}
              >
                inizia ora
              </RoundedButton>
            </SeoLink>
          </Stack>

          <StyledBox onClick={handleNavigate}>
            {image ? (
              <GatsbyImage image={image} alt={`Copertina ${argomento}`} />
            ) : null}
          </StyledBox>
        </Stack>
      </Container>
    </Box>
  )
}
