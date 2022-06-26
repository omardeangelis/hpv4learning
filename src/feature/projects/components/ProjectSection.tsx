import { Box, Stack } from "@mui/material";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import React from "react";
import SeoLink from "../../../components/shared/SeoLink";
import { ProjectSectionProps } from "../types";
import { createSlugFromTitle } from "../utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

export const ProjectSection = ({
  projects,
}: {
  projects: ProjectSectionProps;
}) => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={{ xs: "20px", lg: "0px" }}
      alignItems='stretch'
      justifyContent='space-between'
    >
      {projects.map((post, index) => {
        return (
          <Box
            key={"progetto" + index}
            className='row-container'
            sx={{
              mb: { xs: "0px", lg: "24px" },
            }}
          >
            <SeoLink
              isExternal={false}
              link={`/progetti/${
                post?.project_category?.[0]?.slug
              }/${createSlugFromTitle(post?.titolo)}/`}
              style={{
                display: "flex",
                width: "fit-content",
              }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "unset", sm: "351px" },
                }}
              >
                <ProjectCard>
                  <ProjectImage>
                    <GatsbyImage
                      style={{
                        height: "100%",
                      }}
                      image={
                        getImage(
                          post.copertina?.gatsbyImageData as ImageDataLike,
                        ) as IGatsbyImageData
                      }
                      alt={post.titolo as string}
                    />
                  </ProjectImage>
                  <ProjectContent
                    titolo={post.titolo}
                    description={post.descrizione?.descrizione}
                    label={post?.project_category?.[0]?.title}
                  />
                </ProjectCard>
              </Box>
            </SeoLink>
          </Box>
        );
      })}
    </Stack>
  );
};
