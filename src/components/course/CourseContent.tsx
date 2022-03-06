import { Box } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { createBrandText } from "../../utils/helpers";
import { CoursePreviewProps } from "../../types/course";
import CourseIcons from "./CourseIcons";
import CourseAction from "./CourseAction";
import LevelChip from "./Chip";

const CustomStack = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    & > * {
      margin-left: 0px !important;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
`;

type Props = CoursePreviewProps &
  (
    | {
        disableIcons: true;
        oreDiLezione?: never;
        livello?: never;
      }
    | {
        disableIcons?: false;
        oreDiLezione: number;
        livello: string;
      }
  );

const CourseContent = ({
  copertina,
  titolo,
  slug,
  riassunto,
  oreDiLezione,
  livello,
  categoria,
  couponLink,
  disableIcons,
}: Props) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box component='article'>
      <CustomStack>
        <Box>
          <Box
            sx={{
              maxWidth: "255px",
              width: { xs: "102px", lg: "100%" },
              height: { xs: "102px", lg: "143px" },
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <GatsbyImage
              image={getImage(copertina) as IGatsbyImageData}
              alt={"immagine di copertina"}
              style={{
                height: "100%",
              }}
            />
            {categoria && <LevelChip type={categoria} />}
          </Box>

          {!disableIcons && md && (
            <Box
              sx={{
                mt: "8px",
                border: "1px solid",
                borderColor: "purple.A200",
                borderRadius: "8px",
                display: "flex",
                p: "8px",
                maxWidth: "102px",
              }}
            >
              <CourseIcons livello={livello} oreDiLezione={oreDiLezione} />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "block" },
            flexDirection: { xs: "column", lg: "unset" },
            justifyContent: {
              xs: "space-between",
              sm: "initial",
              lg: "initial",
            },
          }}
        >
          {!disableIcons && !md && (
            <CourseIcons livello={livello} oreDiLezione={oreDiLezione} />
          )}
          <Box
            sx={{
              mt: { xs: "0px", lg: "12px" },
            }}
          >
            <Typography
              fontWeight={500}
              fontSize='16px'
              color='gray.700'
              dangerouslySetInnerHTML={{
                __html: createBrandText(titolo),
              }}
            />
          </Box>

          <Box
            sx={{
              mt: { xs: "4px", lg: "8px" },
            }}
          >
            <Typography
              fontWeight={300}
              color='gray.500'
              sx={{
                fontSize: { xs: "12px", lg: "14px" },
              }}
            >
              {riassunto.riassunto}
            </Typography>
          </Box>

          <Box
            sx={{
              mt: { xs: "4px", lg: "18px" },
            }}
          >
            <CourseAction
              isFreeCourse={categoria === "free"}
              buyLink={couponLink && couponLink}
              pageLink={slug}
            />
          </Box>
        </Box>
      </CustomStack>
    </Box>
  );
};

export default CourseContent;
