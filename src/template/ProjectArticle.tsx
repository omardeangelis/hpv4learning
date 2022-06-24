import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/ui/navigation/layout";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import {
  ArticleBody,
  ArticleHero,
  ArticleFooter,
} from "../feature/projects/components";

const FlexContainer = styled(Box)`
  display: block;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StyledBox = styled(Box)`
  padding: 0px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 887px;
    padding-right: 84px;
  }
`;

const ProjectArticle = ({ data }: PageProps<Queries.SingleProjectQuery>) => {
  const queryData = React.useMemo(() => {
    return data.project.nodes[0];
  }, [data]);

  return (
    <Layout>
      <Container sx={{ padding: "0px" }} maxWidth={"lg"}>
        <FlexContainer>
          <Box>
            <StyledBox>
              <Box
                sx={{
                  mt: { xs: "48px", lg: "96px" },
                }}
              >
                <Container maxWidth='lg'>
                  <ArticleHero {...queryData} />
                  <ArticleBody {...queryData} />
                </Container>
              </Box>
            </StyledBox>
          </Box>
          {/* <Box>Colonna a destra</Box> */}
        </FlexContainer>
        <Container maxWidth='lg'>
          <ArticleFooter {...data} />
        </Container>
      </Container>
    </Layout>
  );
};

export default ProjectArticle;

export const query = graphql`
  query SingleProject(
    $id: String
    $nextProjectOrder: Int
    $courseTitle: String
  ) {
    project: allContentfulProgetti(filter: { id: { eq: $id } }) {
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
            headings(depth: h2) {
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
        linkGithub
        corsi {
          titolo
        }
      }
    }
    nextProject: allContentfulProgetti(
      filter: {
        ordine: { eq: $nextProjectOrder }
        corsi: { elemMatch: { titolo: { eq: $courseTitle } } }
      }
    ) {
      nodes {
        titolo
        descrizione {
          descrizione
        }
        copertina {
          gatsbyImageData
        }
      }
    }
  }
`;
