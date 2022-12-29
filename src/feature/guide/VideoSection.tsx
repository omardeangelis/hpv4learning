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
  width: 322px;
  height: 174px;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    width: 692px;
    height: 374px;
  }
`

export const VideoSection = ({ argomento, image, slug }: Props) => {
  const handleNavigate = React.useCallback(() => {
    navigate(`/${slug}/`)
  }, [navigate])

  return (
    <Box
      height={[`506px`, `546px`]}
      position="relative"
      sx={{ backgroundColor: `#11081F` }}
    >
      <Box
        height={[`266px`, `433px`]}
        width={[`361px`, `588px`]}
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
        flexDirection={[`column`, `row`]}
        justifyContent="space-around"
        alignItems="center"
        gap="34px"
        py={[`68px`, `86px`]}
        px={[`36px`, `42px`]}
      >
        <Stack flexDirection="column" gap="24px">
          <Typography
            fontWeight={600}
            fontSize={[`34px`, `48px`]}
            lineHeight={[`34px`, `54px`]}
            color="#fff"
            maxWidth="552px"
            textAlign={[`center`, `left`]}
          >
            Guarda il nostro{` `}
            <span className="brand-text">videocorso completo</span>
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={[`16px`, `18px`]}
            lineHeight={[`24px`, `27px`]}
            color="#fff"
            maxWidth={[`unset`, `512px`]}
            textAlign={[`center`, `left`]}
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
