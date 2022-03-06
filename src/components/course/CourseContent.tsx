import { Box } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import { Link } from "gatsby";
import { createBrandText } from "../../utils/helpers";
import { CoursePreviewProps } from "../../types/course";
import CourseIcons from "./CourseIcons";

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
            }}
          >
            <GatsbyImage
              image={getImage(copertina) as IGatsbyImageData}
              alt={"immagine di copertina"}
              style={{
                height: "100%",
              }}
            />
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
            <Link
              to={`/${slug}/`}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                endIcon={<ArrowRightAltSharpIcon />}
                size={md ? "small" : "medium"}
                variant='contained'
                color='primary'
              >
                Vedi
              </Button>
            </Link>
          </Box>
        </Box>
      </CustomStack>
    </Box>
  );
};

export default CourseContent;
