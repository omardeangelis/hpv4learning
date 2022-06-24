import React from "react";
import { SingleProject } from "./index";
import { BottomBanner } from "../../../components/layout";
import { ArticleNodeProps } from "../types";
import { Box, Button, Typography, css } from "@mui/material";
import styled from "@emotion/styled";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { cleanStringFromHtlmTags } from "../../../utils/helpers";
import { Link as GatsbyLink } from "gatsby";

type Props = ArticleNodeProps;

// const StyledTypography = styled(Typography)(
//   css({
//     fontWeight: "600",
//     fontSize: ["20px", "24px"],
//     marginTop: ["48px", "75px"],
//     marginBottom: ["20px", "40px"],
//   })
// );

const StyledTypography = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
    margin-top: 75px;
    margin-bottom: 40px;
  }
`;

export const ArticleFooter = (props: Props) => {
  const corsi = React.useMemo(() => {
    return props.project.nodes[0].corsi[0];
  }, []);

  const bannerTitle = React.useMemo(() => {
    return `Inizia ora a studiare ${corsi.titolo}`;
  }, [corsi]);

  const nextProject = React.useMemo(() => {
    return props.nextProject.nodes[0];
  }, []);

  const nextProjectUrl = React.useMemo(() => {
    const courseSlug = props.project.nodes[0].project_category[0].slug;
    let slug = props.nextProject.nodes[0].titolo;
    slug = slug
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();
    return `/progetti/${courseSlug}/${slug}/`;
  }, []);

  return (
    <div>
      <StyledTypography>Prossimo Progetto</StyledTypography>
      <SingleProject
        sx={{
          maxWidth: { xs: "unset", sm: "351px" },
        }}
      >
        {/* @ts-ignore gatsby link as broken type. Update as soon as possible */}
        <GatsbyLink to={nextProjectUrl}>
          <ProjectImage>
            {nextProject?.copertina ? (
              <GatsbyImage
                image={
                  getImage(
                    nextProject?.copertina as unknown as ImageDataLike
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
            title={nextProject?.titolo as string | undefined}
            label={nextProject?.project_category?.[0]?.title}
            description={cleanStringFromHtlmTags(
              nextProject?.descrizione?.descrizione
            )}
          ></ProjectContent>
        </GatsbyLink>
      </SingleProject>

      <BottomBanner title={bannerTitle}>
        <Button
          size='large'
          sx={{
            borderRadius: "100px",
            background: "#8769FE",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          Riscatta coupon
        </Button>
      </BottomBanner>
    </div>
  );
};