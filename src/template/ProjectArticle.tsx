import React from "react";
import { graphql } from "gatsby";
import { ProjectProps } from "../types/course";
import Layout from "../components/ui/navigation/layout";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import ArticleHero from "../components/article/ArticleHero";
import ArticleBody from "../components/article/ArticleBody";

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

  return (
    <Layout>
      <FlexContainer
        sx={{
          padding: "0",
        }}
        maxWidth='lg'
      >
        <Box>
          <StyledContainer>
            <Box
              sx={{
                mt: { xs: "48px", lg: "96px" },
              }}
            >
              <Container maxWidth='lg'>
                <ArticleHero data={queryData} />
                <ArticleBody data={queryData} />
              </Container>
            </Box>
          </StyledContainer>
        </Box>
        {/* <Box>Colonna a destra</Box> */}
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
            timeToRead
          }
        }
        createdAt
        project_category {
          slug
        }
      }
    }
  }
`;
