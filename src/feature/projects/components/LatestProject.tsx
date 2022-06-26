import React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Styledtypography } from "./ArticleHero";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SeoLink from "../../../components/shared/SeoLink";
import { createSlugFromTitle } from "../utils";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 95px;
  }
`;

export const LatestProject = (props: Queries.ProjectHomePageQuery) => {
  const latestProject = React.useMemo(() => {
    return props.node;
  }, [props]);

  const handleLabel = React.useCallback((category?: string | null) => {
    switch (category) {
      case "javascript":
        return "sviluppatori web";
      case "react":
        return "sviluppatori web";
      case "videomaker":
        return "videomaker";
    }
  }, []);

  const label = React.useMemo(() => {
    return handleLabel(latestProject?.project_category?.[0]?.slug);
  }, [latestProject]);

  const image = getImage(
    latestProject?.copertina as unknown as ImageDataLike
  ) as IGatsbyImageData;
  return (
    <StyledBox>
      <div>
        <SeoLink
          isExternal={false}
          link={`/corsi/${createSlugFromTitle(label)}/`}
        >
          <Chip
            label={label}
            variant='outlined'
            sx={{
              height: "20px",
              fontSize: "12px",
              borderRadius: "20px",
              border: "1px solid #E9E3FF",
              color: "#8769FE",
            }}
          />
        </SeoLink>
        <Typography fontSize={{ xs: "34px", lg: "48px" }} fontWeight={600}>
          {latestProject?.titolo}
        </Typography>

        <Stack direction='row' spacing='20px' alignItems='center' mt='10px'>
          <Styledtypography variant='caption'>By Hpv4Learning</Styledtypography>
          {latestProject?.body?.childMarkdownRemark?.timeToRead ? (
            <Styledtypography
              variant='caption'
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <AccessTimeIcon />{" "}
              {latestProject?.body?.childMarkdownRemark?.timeToRead} min
            </Styledtypography>
          ) : null}
          {latestProject?.createdAt ? (
            <Styledtypography variant='caption'>
              {dayjs(latestProject?.createdAt).format("DD/MM/YYYY")}
            </Styledtypography>
          ) : null}
        </Stack>

        <SeoLink
          isExternal={false}
          link={`/progetti/${
            latestProject?.project_category?.[0]?.slug
          }/${createSlugFromTitle(latestProject?.titolo)}/`}
        >
          <Button
            size='small'
            sx={{
              border: "1px solid #8769FE",
              borderRadius: "100px",
              color: "#8769FE",
              background: "trasparent",
              fontSize: "12px",
              height: { xs: "24px", lg: "36px" },
              mt: { xs: "20px", lg: "24px" },
            }}
          >
            Vedi ultimo progetto{" "}
            <ArrowForwardIcon
              sx={{ width: "12px", height: "12px", ml: "7px" }}
            />
          </Button>
        </SeoLink>
      </div>
      {image ? (
        <Box
          sx={{
            heigth: { xs: "205px", lg: "305px" },
            width: { xs: "100%", lg: "50%" },
            borderRadius: "16px",
            marginTop: { xs: "24px", lg: "0" },
            overflow: "hidden",
          }}
        >
          <GatsbyImage image={image} alt={latestProject?.titolo as string} />
        </Box>
      ) : null}
    </StyledBox>
  );
};
