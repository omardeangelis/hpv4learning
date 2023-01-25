import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Divider } from "@mui/material"
import { BorderBox } from "../../components/layout"
import SeoLink from "../../components/shared/SeoLink"
import { Projects } from "./GuidesSection"

type ItemImageProps = {
  image: IGatsbyImageData
  alt: string
}

export type Props = Partial<NonNullable<Projects>[number]> & {
  // eslint-disable-next-line react/no-unused-prop-types
  courseSlug: string | null
  trackingCallback: () => void;
}

const StyledBorderBox = styled(BorderBox)`
  width: 100%;
  border-radius: 8px;
  max-width: 864px;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  }
`

const IconContainer = styled(Box)`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 1024px) {
    margin-top: 33px;
    margin-right: 21px;
  }
  & svg {
    width: inherit;
    height: inherit;
  }
`

export const ItemImage = ({ image, alt }: ItemImageProps) => (
  <Box
    maxWidth={{ xs: `73px`, lg: `247px` }}
    width="100%"
    height={{ xs: `41px`, lg: `140px` }}
    borderRadius={{ xs: `4px`, lg: `8px 0 0 8px` }}
    overflow="hidden"
    style={{
      transform: `translateZ(0)`,
    }}
  >
    <GatsbyImage style={{ height: `100%` }} image={image} alt={alt} />
  </Box>
)

export const GuideItem = (props: Props) => {
  const {
    articleTitle: title,
    slug,
    courseSlug,
    copertina,
    descrizione,
    body,
    trackingCallback
  } = props || {}
  return (
    <StyledBorderBox
      onClick={trackingCallback}
      component="article"
      p={{ xs: `16px`, lg: `0px` }}
      width="100%"
    >
      <SeoLink isExternal={false} link={`/progetti/${courseSlug}/${slug}`}>
        <Stack flexDirection={{ xs: `column`, lg: `row` }}>
          <Stack flexDirection="row" alignItems="center">
            {copertina?.gatsbyImageData ? (
              <ItemImage
                image={copertina?.gatsbyImageData}
                alt={title as string}
              />
            ) : null}
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
                {descrizione?.descrizione}
              </Typography>
            </Stack>
          </Stack>
          <Box display={{ xs: `block`, lg: `none` }} mt="12px">
            <Divider />
          </Box>
          <Stack
            flexDirection={{ xs: `row`, lg: `column-reverse` }}
            justifyContent="space-between"
            alignItems="center"
            mt={{ xs: `12px`, lg: `0px` }}
            pb={{ xs: `0px`, lg: `16px` }}
          >
            {` `}
            <Typography fontWeight={400} fontSize="12px" lineHeight="14px">
              {body?.childrenMarkdownRemark?.[0]?.timeToRead} min
            </Typography>
            {` `}
            <IconContainer>
              <CheckCircleOutlineIcon />
            </IconContainer>
          </Stack>
        </Stack>
      </SeoLink>
    </StyledBorderBox>
  )
}
