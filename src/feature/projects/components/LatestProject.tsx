import React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { Box, Chip, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Styledtypography } from "./ArticleHero";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SeoLink from "../../../components/shared/SeoLink";
import { createSlugFromTitle } from "../utils";
import { RoundedButton } from "../../../components/layout";

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

const StyledChip = styled(Chip)`
  height: 20px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #e9e3ff;
  color: #8769fe;
  cursor: pointer;

  &:hover {
    background-color: #e9e3ff;
  }
`;

export const LatestProject = (
  props: Queries.ProjectHomePageQuery["latestProjects"]["edges"][number],
) => {
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
        return "videomakers";
    }
  }, []);

  const label = React.useMemo(() => {
    return handleLabel(latestProject?.project_category?.[0]?.slug);
  }, [latestProject]);

  const image = getImage(
    latestProject?.copertina as unknown as ImageDataLike,
  ) as IGatsbyImageData;

  return (
    <StyledBox>
      <div>
        <SeoLink
          isExternal={false}
          link={`/corsi/${createSlugFromTitle(label)}/`}
        >
          <StyledChip label={label} variant='outlined' />
        </SeoLink>
        <Box
          sx={{
            maxWidth: { lg: "486px" },
            mt: { xs: "10px", lg: "16px" },
          }}
        >
          <Typography
            fontSize={{ xs: "34px", lg: "48px" }}
            lineHeight={{ xs: "39px", lg: "54px" }}
            fontWeight={600}
          >
            {latestProject?.articleTitle}
          </Typography>
          <Box mt={{ xs: "6px", lg: "8px" }}>
            <Typography
              fontSize='16px'
              lineHeight='20px'
              sx={{
                color: "grey.600",
              }}
            >
              {latestProject.descrizione?.descrizione}
            </Typography>
          </Box>
        </Box>

        <Stack direction='row' spacing='20px' alignItems='center' mt='12px'>
          <Styledtypography variant='caption'>By Hpv4Learning</Styledtypography>
          {latestProject?.body?.childMarkdownRemark?.timeToRead ? (
            <Styledtypography
              variant='caption'
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ mr: "7px" }} />{" "}
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
          link={`/progetti/${latestProject?.project_category?.[0]?.slug}/${latestProject?.slug}/`}
        >
          <RoundedButton
            size='small'
            variant='outlined'
            sx={{
              height: { xs: "24px", lg: "36px" },
              mt: { xs: "20px", lg: "24px" },
            }}
          >
            Vedi ultimo progetto{" "}
            <ArrowForwardIcon
              sx={{ width: "12px", height: "12px", ml: "7px" }}
            />
          </RoundedButton>
        </SeoLink>
      </div>
      {image ? (
        <Box
          sx={{
            maxHeight: { xs: "205px", lg: "305px" },
            maxWidth: "535px",
            width: "100%",
            borderRadius: "16px",
            marginTop: { xs: "24px", lg: "0" },
            overflow: "hidden",
            transform: "translateZ(0)",
          }}
        >
          <GatsbyImage
            image={image}
            alt={latestProject?.articleTitle as string}
          />
        </Box>
      ) : null}
    </StyledBox>
  );
};
