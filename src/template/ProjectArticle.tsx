import React from "react";
import { graphql } from "gatsby";
import { ProjectProps } from "../types/course";
import Layout from "../components/ui/navigation/layout";
import { Box, Container, Stack, Typography, css } from "@mui/material";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import "../styles/projectArticle.css";
import ListSection from "../components/ui/ListSection";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import ArticleHero from "../components/article/ArticleHero";

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

const StyledListSectionBox = styled(Box)`
  margin-top: 25px;
  border: 1px;
  border-color: #e4e7ec;
  border-radius: 12px;
  background-color: #f8f8f8;
  & > p {
    padding: 20px 16px;
    padding-bottom: 0;
    font-weight: 500;
    font-size: 20px;
  }
  & > ul > li > div > p {
    padding-left: 16px;
    font-weight: 400;
    font-size: 14px;
    color: #000;
  }
`;

const ProjectArticle = ({ data }: Props) => {
  const queryData = React.useMemo(() => {
    return data.allContentfulProgetti.nodes[0];
  }, [data]);

  console.log(queryData);

  const {
    body,
    copertina,
    descrizione,
    metaDescription,
    ordine,
    titolo,
    url,
    project_category: { slug },
    createdAt,
  } = queryData;

  const image = getImage(copertina) as IGatsbyImageData;

  const headings = React.useMemo(() => {
    const array = body.childMarkdownRemark.headings.map((heading) => {
      return heading.value;
    });
    return array;
  }, []);

  console.log(
    body,
    copertina,
    descrizione,
    metaDescription,
    ordine,
    titolo,
    url,
    headings,
    slug,
    createdAt
  );

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
                <ArticleHero
                  // category='react'
                  // titolo={titolo}
                  // url={url}
                  // createdAt={createdAt}
                  // timeToRead={body.childMarkdownRemark.timeToRead}
                  data={queryData}
                />

                {image && (
                  <GatsbyImage
                    image={image}
                    alt={titolo}
                    style={{
                      width: "100%",
                      height: "215px",
                      borderRadius: "16px",
                      marginTop: "25px",
                    }}
                  />
                )}
                <StyledListSectionBox>
                  <ListSection
                    title='Troverai nel progetto'
                    list={headings}
                    icon={<div></div>}
                  ></ListSection>
                </StyledListSectionBox>
                <ReactMarkdown children={body.body} className='markdown' />
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
