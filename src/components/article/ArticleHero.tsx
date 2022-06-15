import { Box } from "@mui/system";
import React from "react";
import { Stack, Typography, css } from "@mui/material";
import styled from "@emotion/styled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkSection from "./LinkSection";
import dayjs from "dayjs";
import { ProjectProps } from "../../types";

interface Props {
  data: ProjectProps;
}

const Styledtypography = styled(Typography)(
  css({
    color: "#6C757D",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "300",
  })
);

const StyledBox = styled(Box)(
  css({
    width: "100%",
    height: "94px",
    padding: "15px",
    borderLeft: "6px solid #1AC99F",
    backgroundColor: " #F8F8F8",
    marginTop: ["25px", "36px"],
    overflowX: "hidden",
    overflowY: "auto",
  })
);

const ArticleHero = ({ data }: Props) => {
  const {
    titolo,
    url,
    createdAt,
    metaDescription,
    project_category,
    body: {
      childMarkdownRemark: { timeToRead },
    },
  } = data;

  return (
    <div>
      <LinkSection category={project_category[0].slug} url={url} />
      <Box mx='auto' sx={{ marginTop: "10px" }}>
        <Typography
          component='h1'
          fontWeight={600}
          sx={{
            fontSize: { xs: "36px", lg: "48px" },
            lineHeight: { xs: "44px", lg: "56px" },
          }}
        >
          {titolo}
        </Typography>
      </Box>

      <Stack direction='row' spacing='20px' alignItems='center' mt='10px'>
        <Styledtypography variant='caption'>By Hpv4Learning</Styledtypography>
        {timeToRead && (
          <Styledtypography
            variant='caption'
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <AccessTimeIcon /> {timeToRead} min
          </Styledtypography>
        )}
        {createdAt && (
          <Styledtypography variant='caption'>
            {dayjs(createdAt).format("DD/MM/YYYY")}
          </Styledtypography>
        )}
      </Stack>

      {metaDescription && <StyledBox>{`"${metaDescription}"`}</StyledBox>}
    </div>
  );
};

export default ArticleHero;
