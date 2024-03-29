import React from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import SeoLink from "../../../components/shared/SeoLink"
import { ProjectSectionProps } from "../types"
import { ProjectCard } from "./ProjectCard"
import { ProjectContent } from "./ProjectContent"
import { ItemImage } from "../../../components/shared/ItemImage"

export const ProjectSection = ({
  projects,
}: {
  projects: ProjectSectionProps
}) => (
  <Stack
    direction={{ xs: `column`, lg: `row` }}
    spacing={{ xs: `20px`, lg: `47px` }}
    alignItems="stretch"
    justifyContent="flex-start"
  >
    {projects.map((post, index) => (
      <Box key={`progetto${index}`} className="row-container">
        <SeoLink
          isExternal={false}
          link={`/academy/progetti/${post?.project_category?.[0]?.slug}/${post?.slug}/`}
          style={{
            display: `flex`,
            width: `fit-content`,
            height: `100%`,
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: `unset`, lg: `462px` },
            }}
          >
            <ProjectCard>
              <ItemImage
                className="img-box"
                sx={{ marginLeft: { xs: `15px`, lg: `unset` } }}
              >
                <GatsbyImage
                  style={{ height: `100%` }}
                  image={post?.copertina?.gatsbyImageData as IGatsbyImageData}
                  alt={post.titolo as string}
                />
              </ItemImage>

              <ProjectContent
                titolo={post?.meta_title}
                description={post.descrizione?.descrizione}
                label={post?.project_category?.[0]?.title}
              />
            </ProjectCard>
          </Box>
        </SeoLink>
      </Box>
    ))}
  </Stack>
)
