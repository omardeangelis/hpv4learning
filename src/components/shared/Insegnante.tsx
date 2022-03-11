import { Box } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import CardHeader from "./CardHeader";
import { Stack, Typography } from "@mui/material";
import { Link as GatsbyLink } from "gatsby";
import { getIcon } from "../../utils/general";
import { InsegnanteProps } from "../../types/course";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { createBrandText } from "../../utils/helpers";

const CustomStack = styled(Box)`
  & > * {
    padding: 16px 8px;
    &:not(:first-of-type) {
      border-top: 1px solid;
      border-top-color: var(--purple-200);
    }
  }
  strong {
    color: var(--grey-600);
  }

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;

    & > * {
      padding: 24px;

      &:not(:first-of-type) {
        border-top: none;
        border-bottom-color: none;
        border-left: 1px solid;
        border-left-color: var(--purple-200);
      }
    }
  }
`;

const Insegnante = ({
  nome,
  bio,
  corsi,
  professione,
  cognome,
  img,
}: InsegnanteProps) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "purple.200",
        width: "100%",
        borderRadius: { xs: "16px", lg: "24px" },
      }}
    >
      <CustomStack>
        <Box>
          <CardHeader
            variant='circular'
            spacing={[1, 2]}
            alignItems='center'
            img={
              <Box
                sx={{
                  height: { xs: "34px", lg: "64px" },
                  width: { xs: "34px", lg: "64px" },
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <GatsbyImage
                  image={getImage(img) as IGatsbyImageData}
                  alt={nome}
                />
              </Box>
            }
          >
            <Box>
              <Box>
                <Typography
                  color='purple.800'
                  fontWeight={500}
                  sx={{
                    fontSize: { xs: "14px", lg: "18px" },
                  }}
                >
                  {`${nome} ${cognome}`}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: { xs: "4px", lg: "6px" },
                }}
              >
                <Typography
                  color='grey.500'
                  fontWeight={400}
                  sx={{
                    fontSize: { xs: "10px", lg: "12px" },
                  }}
                >
                  {professione}
                </Typography>
              </Box>
            </Box>
          </CardHeader>
          <Box
            sx={{
              mt: { xs: "16px", lg: "24px" },
              maxWidth: { xs: "325px", lg: "688px" },
            }}
          >
            <Typography
              color='grey.500'
              fontWeight={300}
              dangerouslySetInnerHTML={{
                __html: bio.childMarkdownRemark.html,
              }}
              sx={{
                fontSize: { xs: "12px", lg: "14px" },
                lineHeight: { xs: "16px", lg: "21px" },
              }}
            ></Typography>
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography
              color='grey.600'
              fontWeight={600}
              sx={{
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              Insegna in
            </Typography>
            <Box
              sx={{
                mt: { xs: "6px", lg: "8px" },
              }}
            >
              {corsi.map((corso) => {
                return (
                  <GatsbyLink to={`/${corso.slug}/`}>
                    <Box mb='6px'>
                      <Stack
                        direction='row'
                        spacing={[1]}
                        alignItems='baseline'
                      >
                        <Box display='flex'>
                          {getIcon(corso.category[0].slug, {
                            xs: "10px",
                            lg: "12px",
                          })}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "10px", lg: "12px" },
                            fontWeight: 500,
                          }}
                          color='purple.400'
                          dangerouslySetInnerHTML={{
                            __html: createBrandText(corso.titolo),
                          }}
                        ></Typography>
                      </Stack>
                    </Box>
                  </GatsbyLink>
                );
              })}
            </Box>
          </Box>
        </Box>
      </CustomStack>
    </Box>
  );
};

export default Insegnante;
