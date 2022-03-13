import React from "react";
import Box from "@mui/material/Box";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { ProjectProps } from "../types/course";
import { createBrandText } from "../utils/helpers";
import SeoLink from "./shared/SeoLink";

const Wrapper = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;

const StyledBox = styled(Box)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--purple-200);
  @media screen and (min-width: 768px) {
    border-radius: 24px;
  }
`;

type Props = {
  data: ProjectProps;
};

const Project = ({ data: { titolo, url, copertina, descrizione } }: Props) => {
  const image = getImage(copertina) as IGatsbyImageData;
  return (
    <StyledBox p='24px 16px'>
      <Wrapper>
        <Box
          sx={{
            maxWidth: "255px",
            width: "102px",
            height: "102px",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            transform: "translateZ(0)",
          }}
        >
          <GatsbyImage
            image={image}
            alt={titolo}
            style={{
              height: "100%",
            }}
          />
        </Box>

        <Box
          sx={{
            mt: "0px",
            maxWidth: "195px",
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

          <Box
            sx={{
              mt: "4px",
            }}
          >
            <Typography
              fontWeight={300}
              color='gray.500'
              sx={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  descrizione.childMarkdownRemark.html ||
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, animi!",
              }}
            />
          </Box>
          {url && (
            <Box
              sx={{
                mt: "4px",
              }}
            >
              <SeoLink isExternal link={url} target='_blank' rel='nofollow'>
                <Button
                  variant='text'
                  color='primary'
                  size='small'
                  sx={{
                    pl: "0px",
                  }}
                >
                  Vedi
                </Button>
              </SeoLink>
            </Box>
          )}
        </Box>
      </Wrapper>
    </StyledBox>
  );
};

export default Project;
