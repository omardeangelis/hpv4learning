import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { BorderBox } from "../../components/layout"

type ItemImageProps = {
  image: IGatsbyImageData
  alt: string
}

export type Props = {
  title: string
  description: string
  timeToRead: number
  image: IGatsbyImageData
  alt: string
  courseSlug: string | null
  slug: string
}

const StyledBorderBox = styled(BorderBox)`
  width: 369px;
  height: 104px;
  border-radius: 8px;
  &:hover {
    background-color: #fafafa;
    cursor: pointer;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (min-width: 1024px) {
    width: 864px;
    height: 140px;
  }
`

export const ItemImage = ({ image, alt }: ItemImageProps) => (
  <Box
    width={[`73px`, `247px`]}
    height={[`41px`, `140px`]}
    borderRadius={[`4px`, `8px 0 0 8px`]}
    overflow="hidden"
    transform="translateZ(0)"
  >
    <GatsbyImage style={{ height: `100%` }} image={image} alt={alt} />
  </Box>
)

export const GuideItem = ({
  title,
  description,
  timeToRead,
  image,
  alt,
  courseSlug,
  slug,
}: Props) => {
  const handleNavigate = React.useCallback(() => {
    navigate(`/progetti/${courseSlug}/${slug}`)
  }, [navigate])

  return (
    <StyledBorderBox onClick={handleNavigate}>
      <Stack flexDirection={[`column`, `row`]} justifyContent="space-between">
        <Stack
          flexDirection="row"
          height={[`70px`, `100%`]}
          alignItems="center"
          justifyContent="space-between"
          mx={[`16px`, `unset`]}
        >
          <ItemImage image={image} alt={alt} />
          {` `}
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="left"
            pl={[`17px`, `30px`]}
          >
            <Typography
              fontWeight={500}
              fontSize={[`12px`, `18px`]}
              lineHeight={[`18px`, `24px`]}
              width={[`unset`, `90%`]}
            >
              {title}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={[`10px`, `16px`]}
              lineHeight={[`12px`, `24px`]}
              width={[`unset`, `90%`]}
            >
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={[`row`, `column-reverse`]}
          justifyContent="space-between"
          alignItems="center"
          height={[`34px`, `140px`]}
          mx={[`15px`, `unset`]}
        >
          {` `}
          <Typography
            fontWeight={400}
            fontSize="12px"
            lineHeight="14px"
            mb={[`unset`, `14px`]}
            mr={[`unset`, `14px`]}
          >
            {timeToRead} min
          </Typography>
          {` `}
          <Box
            width={[`15px`, `20px`]}
            height={[`15px`, `20px`]}
            mt={[`unset`, `33px`]}
            mr={[`unset`, `21px`]}
          >
            <StaticImage
              src="./images/Vector.png"
              alt="read"
              placeholder="tracedSVG"
            />
          </Box>
        </Stack>
      </Stack>
    </StyledBorderBox>
  )
}
