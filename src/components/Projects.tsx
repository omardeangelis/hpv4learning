import React from "react";
import { ProjectProps } from "../types/course";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { cleanStringFromHtlmTags, rowalizer } from "../utils/helpers";
import SeoLink from "./shared/SeoLink";
import { SingleProject } from "../feature/projects/components";
import ProjectImage from "../feature/projects/components/ProjectImage";
import ProjectContent from "../feature/projects/components/ProjectContent";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { createSlugFromTitle } from "../feature/projects/utils";

type Props = {
  data: ProjectProps[];
};

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
`;

const Projects = ({ data }: Props) => {
  const rows = React.useMemo(() => rowalizer(data, 2), []);
  return (
    <CustomStack>
      {rows.map((row, index) => {
        return (
          <Box
            key={"progetto" + index}
            className='row-container'
            sx={{
              mb: { xs: "0px", lg: "24px" },
            }}
          >
            {row.map((progetto) => (
              <SeoLink
                isExternal={false}
                link={`/progetti/${
                  progetto?.project_category?.[0].slug
                }/${createSlugFromTitle(progetto.titolo)}/`}
                style={{
                  display: "flex",
                  width: "fit-content",
                }}
              >
                <SingleProject
                  isMobileOnly
                  sx={{
                    maxWidth: { xs: "unset", sm: "351px" },
                  }}
                >
                  <ProjectImage>
                    <GatsbyImage
                      image={getImage(progetto.copertina) as IGatsbyImageData}
                      alt={progetto.titolo}
                      style={{
                        height: "100%",
                      }}
                    />
                  </ProjectImage>
                  <ProjectContent
                    title={progetto.titolo}
                    label={progetto?.project_category?.[0].title}
                    description={cleanStringFromHtlmTags(
                      progetto.descrizione.childMarkdownRemark.html,
                    )}
                  ></ProjectContent>
                </SingleProject>
              </SeoLink>
            ))}
          </Box>
        );
      })}
    </CustomStack>
  );
};

export default Projects;
