import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import { GatsbyImage } from "gatsby-plugin-image"
import { cleanStringFromHtlmTags, rowalizer } from "../../../utils/helpers"
import SeoLink from "../../../components/shared/SeoLink"
import { MobileOnlyProjectCard } from "./ProjectCard"
import { ProjectContent } from "./ProjectContent"
import { ItemImage } from "../../../components/shared/ItemImage"

const CustomStack = styled(Box)`
  height: 100%;
  & > *:not(:last-of-type) {
    margin-bottom: 24px;
  }

  .row-container {
    & > *:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1080px) {
    .row-container {
      display: flex;
      & > *:not(:last-of-type) {
        margin-right: 61px;
      }

      & > *:not(:last-of-type) {
        margin-bottom: 0px;
      }
    }
  }
`

export const Projects = ({ data }: { data: Queries.ContentfulProgetti[] }) => {
  const rows = React.useMemo(() => rowalizer(data, 2), [data])
  return (
    <CustomStack>
      {rows?.map((row, index) => (
        <Box
          key={`progetto${index}`}
          className="row-container"
          sx={{
            mb: { xs: `0px`, lg: `24px` },
          }}
        >
          {row.map((progetto) => (
            <SeoLink
              key={progetto.slug}
              isExternal={false}
              link={`/academy/progetti/${progetto?.project_category?.[0]?.slug}/${progetto?.slug}/`}
              style={{
                display: `flex`,
                width: `fit-content`,
              }}
            >
              <Box
                sx={{
                  maxWidth: { xs: `unset`, sm: `351px` },
                }}
              >
                <MobileOnlyProjectCard>
                  {progetto?.copertina?.gatsbyImageData ? (
                    <ItemImage sx={{ marginLeft: { xs: `15px`, lg: `unset` } }}>
                      <GatsbyImage
                        style={{ height: `100%` }}
                        image={progetto?.copertina?.gatsbyImageData}
                        alt={progetto?.titolo as string}
                      />
                    </ItemImage>
                  ) : null}

                  <ProjectContent
                    titolo={progetto?.titolo}
                    label={progetto?.project_category?.[0]?.title}
                    description={cleanStringFromHtlmTags(
                      progetto?.descrizione?.childMarkdownRemark?.html
                    )}
                  />
                </MobileOnlyProjectCard>
              </Box>
            </SeoLink>
          ))}
        </Box>
      ))}
    </CustomStack>
  )
}
