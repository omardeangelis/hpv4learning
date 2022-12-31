import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

type Props = {
  argomento: string
  image: IGatsbyImageData | undefined | null
  slug: string | undefined | null
}

const StyledBox = styled(Box)`
  width: 260px;
  height: 145px;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    width: 280px;
    height: 162px;
  }
  @media screen and (min-width: 1024px) {
    width: 692px;
    height: 389px;
  }
`

export const VideoSection = ({ argomento, image, slug }: Props) => {
  const handleNavigate = React.useCallback(() => {
    navigate(`/${slug}/`)
  }, [slug])

  return (
    <Box
      height={{ xs: `506px`, lg: `546px` }}
      position="relative"
      sx={{ backgroundColor: `#11081F` }}
    >
      lg:
      <Box
        height={{ xs: `266px`, lg: `433px` }}
        width={{ xs: `280px`, sm: `361px`, lg: `588px` }}
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
      <Stack
        flexDirection={{ xs: `column`, lg: `row` }}
        justifyContent="space-around"
        alignItems="center"
        py={{ xs: `14px`, sm: `68px`, lg: `86px` }}
        px={{ xs: `36px`, lg: `42px` }}
      >
        <Stack flexDirection="column" mr={{ xs: `unset`, lg: `34px` }}>
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
        </Stack>

        <StyledBox onClick={handleNavigate}>
          {image ? (
            <GatsbyImage image={image} alt={`Copertina ${argomento}`} />
          ) : null}
        </StyledBox>
      </Stack>
    </Box>
  )
}
