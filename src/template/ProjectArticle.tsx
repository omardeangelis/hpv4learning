import React from "react";
import { graphql } from "gatsby";
import { ProjectProps } from "../types/course";
import Layout from "../components/ui/navigation/layout";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  data: {
    allContentfulProgetti: {
      nodes: ProjectProps[];
    };
  };
};

const FlexContainer = styled(Container)`
  display: block;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StyledContainer = styled(Box)`
  padding: 0px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 887px;
    padding-right: 84px;
  }
`;

const ProjectArticle = ({ data }: Props) => {
  const queryData = React.useMemo(() => {
    return data.allContentfulProgetti.nodes[0];
  }, [data]);

  const { body, copertina, descrizione, metaDescription, ordine, titolo, url } =
    queryData;

  console.log(
    body,
    copertina,
    descrizione,
    metaDescription,
    ordine,
    titolo,
    url
  );

  return (
    <Layout>
      <FlexContainer maxWidth='lg'>
        <Box>
          <StyledContainer>
            <Box
              sx={{
                mt: { xs: "48px", lg: "96px" },
              }}
            >
              <Container maxWidth='lg'>
                <Box mx='auto'>
                  <Typography
                    component='h1'
                    textAlign='center'
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: "36px", lg: "48px" },
                      lineHeight: { xs: "44px", lg: "56px" },
                    }}
                  >
                    {titolo}
                  </Typography>
                </Box>
              </Container>
            </Box>
          </StyledContainer>
        </Box>
        {/* <Box>{Colonna a destra}</Box> */}
      </FlexContainer>
    </Layout>
  );
};

export default ProjectArticle;

export const query = graphql`
  query SingleProject($id: String) {
    allContentfulProgetti(filter: { id: { eq: $id } }) {
      nodes {
        id
        titolo
        metaDescription
        ordine
        url
        copertina {
          gatsbyImageData
        }
        descrizione {
          descrizione
        }
        body {
          body
          childMarkdownRemark {
            headings {
              value
            }
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`;
