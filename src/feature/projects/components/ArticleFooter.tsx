import React from "react";
import { ProjectCard, ProjectImage, ProjectContent } from "./index";

import { Box, Typography, Container } from "@mui/material";
import styled from "@emotion/styled";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { createSlugFromTitle } from "../utils";
import SeoLink from "../../../components/shared/SeoLink";

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
    margin-top: 75px;
  }
`;

export const ArticleFooter = (props: Queries.SingleProjectQuery) => {
  const nextProject = React.useMemo(() => {
    return props.nextProject;
  }, []);

  const nextProjectUrl = React.useMemo(() => {
    const courseSlug = props?.project?.project_category?.[0]?.slug;
    const slug = createSlugFromTitle(props?.nextProject?.titolo);
    return `/progetti/${courseSlug}/${slug}/`;
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <StyledTypography>Prossimo Progetto</StyledTypography>
        {/* @ts-ignore gatsby link as broken type. Update as soon as possible */}
        <SeoLink
          isExternal={false}
          link={nextProjectUrl}
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
            <ProjectCard
              sx={{
                maxWidth: { xs: "unset", sm: "351px" },
              }}
            >
              <ProjectImage>
                {nextProject?.copertina ? (
                  <GatsbyImage
                    image={
                      getImage(
                        nextProject?.copertina as unknown as ImageDataLike,
                      ) as IGatsbyImageData
                    }
                    alt={nextProject.titolo || "Anteprima del progetto"}
                    style={{
                      height: "100%",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      backgroundColor: "purple.A100",
                    }}
                    width='100%'
                  ></Box>
                )}
              </ProjectImage>

              <ProjectContent
                titolo={nextProject?.titolo as string | undefined}
                label={props.project?.project_category?.[0]?.slug}
                description={nextProject?.descrizione?.descrizione}
              ></ProjectContent>
            </ProjectCard>
          </Box>
        </SeoLink>
      </Container>
    </div>
  );
};
