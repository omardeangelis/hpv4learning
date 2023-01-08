import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { graphql, useStaticQuery } from "gatsby"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image"
import { text } from "../utils/constants"
import { LabelSquaredBox } from "../../../components/ui/LabelSquaredBox"
import { BorderBox } from "../../../components/layout"

type ImageKey = "first" | "second" | "third"

const CardWrapper = styled(BorderBox)({
  borderRadius: `16px`,
  boxShadow: ` 0px 1px 15px rgba(0, 0, 0, 0.05)`,
})

export const CardsSection = () => {
  const { cards } = text
  const data: Queries.ConsulenzeCardImageQuery = useStaticQuery(query)
  const images = React.useMemo(
    () => ({
      first: data.firstImage,
      second: data.secondImage,
      third: data.thirdImage,
    }),
    [data.firstImage, data.secondImage, data.thirdImage]
  )
  return (
    <Container maxWidth="lg">
      <Typography
        component="h2"
        fontWeight={600}
        textAlign="center"
        sx={{
          fontSize: { xs: `34px`, lg: `48px` },
          lineHeight: { xs: `39px`, lg: `56px` },
        }}
      >
        Perché realizzare un sito web ?
      </Typography>
      <Box sx={{ mt: { xs: `24px`, lg: `48px` } }}>
        <Stack flexDirection="column" alignItems="center">
          {cards.map((card, index) => {
            const isInverted = index % 2 !== 0
            return (
              <CardWrapper
                key={card.title}
                sx={{
                  maxWidth: `920px`,
                  ":not(:last-of-type)": {
                    mb: { xs: `48px`, lg: `96px` },
                  },
                }}
              >
                <Stack
                  sx={{
                    flexDirection: {
                      xs: `column`,
                      lg: isInverted ? `row` : `row-reverse`,
                    },
                  }}
                >
                  <Box
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flex={1}
                    sx={{
                      py: { xs: `24px`, lg: `48px` },
                      backgroundColor: card.color,
                      borderRadius: {
                        xs: `16px 16px 0px 0px`,
                        lg: isInverted
                          ? `16px 0px 0px 16px`
                          : `0px 16px 16px 0px`,
                      },
                    }}
                  >
                    {images?.[card.image as ImageKey] &&
                    getImage(
                      images?.[card.image as ImageKey] as ImageDataLike
                    ) ? (
                      <Box
                        sx={{
                          maxWidth: { xs: `157px`, lg: `325px` },
                          width: `100%`,
                        }}
                      >
                        <GatsbyImage
                          image={
                            getImage(
                              images?.[card.image as ImageKey]
                                ?.childImageSharp as ImageDataLike
                            ) as IGatsbyImageData
                          }
                          alt={card.description}
                        />
                      </Box>
                    ) : null}
                    <Box
                      top="0px"
                      bottom="0px"
                      left="0px"
                      right="0px"
                      width="100%"
                      position="absolute"
                    >
                      <StaticImage
                        src="../images/small-overlay.png"
                        alt={card.title}
                        placeholder="dominantColor"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      maxWidth: { xs: `unset`, lg: `50%` },
                      p: { xs: `24px`, lg: `48px` },
                      backgroundColor: `white`,
                      borderRadius: {
                        xs: `0px 0px 16px 16px`,
                        lg: isInverted
                          ? `0px 16px 16px 0px`
                          : `16px 0px 0px 16px`,
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        component="h3"
                        fontWeight={600}
                        sx={{
                          fontSize: { xs: `24px`, lg: `34px` },
                          lineHeight: { xs: `29px`, lg: `39px` },
                        }}
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        component="p"
                        fontWeight={400}
                        color="grey.600"
                        sx={{
                          fontSize: { xs: `18px`, lg: `24px` },
                          lineHeight: { xs: `24px`, lg: `36px` },
                          mt: { xs: `16px`, lg: `24px` },
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        mt: { xs: `34px`, lg: `16px` },
                      }}
                    >
                      <Typography
                        component="p"
                        fontWeight={400}
                        sx={{
                          fontSize: { xs: `14px`, lg: `16px` },
                          lineHeight: { xs: `24px`, lg: `36px` },
                          mt: { xs: `16px`, lg: `24px` },
                        }}
                      >
                        Consigliato per:
                      </Typography>
                      <Stack
                        flexDirection="row"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                          mt: { xs: `8px`, lg: `8px` },
                          "& >*": {
                            mt: { xs: `4px`, lg: `8px` },
                            ":not(:last-of-type)": {
                              mr: { xs: `4px`, lg: `8px` },
                            },
                          },
                        }}
                      >
                        {card.customers.map((customer) => (
                          <LabelSquaredBox
                            key={customer}
                            color="grey.600"
                            sx={{
                              backgroundColor: `rgba(248, 248, 248, 1)`,
                            }}
                          >
                            {customer}
                          </LabelSquaredBox>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
              </CardWrapper>
            )
          })}
        </Stack>
      </Box>
    </Container>
  )
}

export const StandardImageFragment = graphql`
  fragment FileImageFragment on File {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
  }
`

const query = graphql`
  query ConsulenzeCardImage {
    firstImage: file(
      sourceInstanceName: { eq: "consulenze-images" }
      relativePath: { eq: "first-card.png" }
    ) {
      ...FileImageFragment
    }
    secondImage: file(
      sourceInstanceName: { eq: "consulenze-images" }
      relativePath: { eq: "second-card.png" }
    ) {
      ...FileImageFragment
    }
    thirdImage: file(
      sourceInstanceName: { eq: "consulenze-images" }
      relativePath: { eq: "third-card.png" }
    ) {
      ...FileImageFragment
    }
  }
`
