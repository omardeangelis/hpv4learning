/* eslint-disable react/no-unused-prop-types */
import React from "react"
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Box, { BoxProps } from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Divider } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { BorderBox } from "../../components/layout"
import SeoLink from "../../components/shared/SeoLink"
import { Projects } from "./GuidesSection"
import { ItemImage } from "../../components/shared/ItemImage"

export type Props = {
  descrizione: any
  project_category: any[]
  tag: {
    slug: string
  }
} & Partial<NonNullable<Projects>[number]> &
  BoxProps
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
  }
  & svg {
    width: inherit;
    height: inherit;
  }
`

export const GuideItem = (props: Props) => {
  const {
    titolo,
    copertina,
    descrizione,
    body,
    internal,
    project_category,
    slug,
    tag,
  } = props || {}

  const baseLink = React.useMemo(
    () =>
      internal?.type === `ContentfulProgetti`
        ? `/progetti/${project_category?.[0]?.slug}/${slug}/`
        : `/blog/${tag?.slug}/${slug}/`,
    [internal?.type, project_category, slug, tag?.slug]
  )

  return (
    <StyledBorderBox
      component="article"
      p={{ xs: `16px`, lg: `0px` }}
      width="100%"
    >
      <SeoLink isExternal={false} link={baseLink}>
        <Stack
          flexDirection={{ xs: `column`, lg: `row` }}
          alignItems={{ xs: `space-between` }}
          justifyContent="space-between"
          width="100%"
        >
          <Stack flexDirection="row" alignItems="center">
            {copertina?.gatsbyImageData ? (
              <ItemImage>
                <GatsbyImage
                  style={{ height: `100%` }}
                  image={copertina?.gatsbyImageData}
                  alt={titolo as string}
                />
              </ItemImage>
            ) : null}
            {` `}
            <Stack
              flexDirection="column"
              justifyContent="center"
              pl={{ xs: `16px`, lg: `30px` }}
              maxWidth="487px"
            >
              <Typography
                component="h3"
                fontWeight={500}
                fontSize={{ xs: `12px`, lg: `18px` }}
                lineHeight={{ xs: `18px`, lg: `24px` }}
                width={{ xs: `unset`, lg: `100%` }}
              >
                {titolo}
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ xs: `10px`, lg: `16px` }}
                lineHeight={{ xs: `12px`, lg: `24px` }}
                width={{ xs: `unset`, lg: `100%` }}
              >
                {descrizione?.descrizione || descrizione}
              </Typography>
            </Stack>
          </Stack>
          <Box display={{ xs: `block`, lg: `none` }} mt="12px">
            <Divider />
          </Box>
          <Stack
            flexDirection={{ xs: `row`, lg: `column-reverse` }}
            justifyContent="space-between"
            alignItems="flex-end"
            pt={{ xs: `12px`, lg: `30px` }}
            pr={{ xs: `0px`, lg: `30px` }}
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
