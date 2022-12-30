import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { BorderBox } from "../../components/layout"
import SeoLink from "../../components/shared/SeoLink"

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
    maxWidth={{ xs: `73px`, lg: `247px` }}
    width="100%"
    height={{ xs: `41px`, lg: `140px` }}
    borderRadius={{ xs: `4px`, lg: `8px 0 0 8px` }}
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
}: Props) => (
  <SeoLink isExternal={false} link={`/progetti/${courseSlug}/${slug}`}>
    <StyledBorderBox component="article">
      <Stack
        flexDirection={{ xs: `column`, lg: `row` }}
        justifyContent="space-between"
      >
        <Stack
          flexDirection="row"
          height={{ xs: `70px`, lg: `100%` }}
          alignItems="center"
          justifyContent="space-between"
          mx={{ xs: `16px`, lg: `unset` }}
        >
          <ItemImage image={image} alt={alt} />
          {` `}
          <Stack
            flexDirection="column"
            justifyContent="center"
            pl={{ xs: `17px`, lg: `30px` }}
          >
            <Typography
              component="h3"
              fontWeight={500}
              fontSize={{ xs: `12px`, lg: `18px` }}
              lineHeight={{ xs: `18px`, lg: `24px` }}
              width={{ xs: `unset`, lg: `90%` }}
            >
              {title}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ xs: `10px`, lg: `16px` }}
              lineHeight={{ xs: `12px`, lg: `24px` }}
              width={{ xs: `unset`, lg: `90%` }}
            >
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={{ xs: `row`, lg: `column-reverse` }}
          justifyContent="space-between"
          alignItems="center"
          height={{ xs: `34px`, lg: `140px` }}
          mx={{ xs: `15px`, lg: `unset` }}
        >
          {` `}
          <Typography
            fontWeight={400}
            fontSize="12px"
            lineHeight="14px"
            mb={{ xs: `unset`, lg: `14px` }}
            mr={{ xs: `unset`, lg: `14px` }}
          >
            {timeToRead} min
          </Typography>
          {` `}
          <Box
            width={{ xs: `15px`, lg: `20px` }}
            height={{ xs: `15px`, lg: `20px` }}
            mt={{ xs: `unset`, lg: `33px` }}
            mr={{ xs: `unset`, lg: `21px` }}
          >
            <CheckCircleOutlineIcon />
          </Box>
        </Stack>
      </Stack>
    </StyledBorderBox>
  </SeoLink>
)
