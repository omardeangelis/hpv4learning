import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image"
import { ProjectCard, ProjectContent } from "./index"
import SeoLink from "../../../components/shared/SeoLink"
import { ItemImage } from "../../../components/shared/ItemImage"

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
    margin-top: 75px;
  }
`

export const ArticleFooter = ({
  nextProject,
  project,
}: Queries.SingleProjectQuery) => {
  const nextProjectUrl = React.useMemo(() => {
    const courseSlug = project?.project_category?.[0]?.slug
    const slug = nextProject?.slug
    return `/progetti/${courseSlug}/${slug}/`
  }, [nextProject, project])

  return (
    <div>
      <StyledTypography>Prossimo Progetto</StyledTypography>
      {/* @ts-ignore gatsby link as broken type. Update as soon as possible */}
      <SeoLink
        isExternal={false}
        link={nextProjectUrl}
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
          <ProjectCard
            sx={{
              maxWidth: { xs: `unset`, sm: `351px` },
            }}
          >
            <ItemImage
              className="img-box"
              sx={{ marginLeft: { xs: `15px`, lg: `unset` } }}
            >
              {nextProject?.copertina ? (
                <GatsbyImage
                  image={
                    getImage(
                      nextProject?.copertina as unknown as ImageDataLike
                    ) as IGatsbyImageData
                  }
                  alt={nextProject.meta_title || `Anteprima del progetto`}
                  style={{
                    height: `100%`,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    backgroundColor: `purple.A100`,
                  }}
                  width="100%"
                />
              )}
            </ItemImage>

            <ProjectContent
              titolo={nextProject?.meta_title as string | undefined}
              label={project?.project_category?.[0]?.slug}
              description={nextProject?.descrizione?.descrizione}
            />
          </ProjectCard>
        </Box>
      </SeoLink>
    </div>
  )
}
