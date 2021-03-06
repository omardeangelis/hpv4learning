import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { cleanStringFromHtlmTags, rowalizer } from "../../../utils/helpers";
import SeoLink from "../../../components/shared/SeoLink";
import { MobileOnlyProjectCard } from "./ProjectCard";
import { ProjectImage } from "./ProjectImage";
import { ProjectContent } from "./ProjectContent";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";

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

export const Projects = ({ data }: { data: Queries.ContentfulProgetti[] }) => {
  const rows = React.useMemo(() => rowalizer(data, 2), []);
  return (
    <CustomStack>
      {rows?.map((row, index) => {
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
                link={`/progetti/${progetto?.project_category?.[0]?.slug}/${progetto?.slug}/`}
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
                  <MobileOnlyProjectCard>
                    <ProjectImage>
                      {progetto?.copertina ? (
                        <GatsbyImage
                          image={
                            getImage(
                              progetto?.copertina as unknown as ImageDataLike,
                            ) as IGatsbyImageData
                          }
                          alt={
                            progetto.articleTitle || "Anteprima del progetto"
                          }
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
                      titolo={progetto?.titolo}
                      label={progetto?.project_category?.[0]?.title}
                      description={cleanStringFromHtlmTags(
                        progetto?.descrizione?.childMarkdownRemark?.html,
                      )}
                    />
                  </MobileOnlyProjectCard>
                </Box>
              </SeoLink>
            ))}
          </Box>
        );
      })}
    </CustomStack>
  );
};
