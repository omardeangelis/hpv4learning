import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import styled from "@emotion/styled";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SeoLink from "../components/shared/SeoLink";
import Layout from "../components/shared/layout";
import { ProjectSection } from "../feature/projects/components/ProjectSection";
import { LatestProject } from "../feature/projects/components";
import { ProjectSectionProps } from "../feature/projects/types";

const LinkContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #8769fe;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const StyledStack = styled(Stack)`
  margin-top: 72px;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    margin-top: 96px;
    margin-bottom: 30px;
  }
`;

const ProjectsHome = ({ data }: PageProps<Queries.ProjectHomePageQuery>) => {
  const latestProject = React.useMemo(() => {
    return data.latestProjects.edges[0];
  }, []);
  return (
    <Layout>
      <Container maxWidth='lg'>
        {latestProject ? <LatestProject {...latestProject} /> : null}
        {data.projects.group.map((post, index) => {
          return (
            <div key={index}>
              <StyledStack direction='row' justifyContent='space-between'>
                <Typography
                  component='h2'
                  fontWeight={600}
                  fontSize={{ xs: "20px", lg: "34px" }}
                >
                  {post.fieldValue}
                </Typography>
                <LinkContainer>
                  <SeoLink
                    isExternal={false}
                    link={`/progetti/${post?.fieldValue?.toLowerCase()}/`}
                  >
                    Vedi tutti
                  </SeoLink>
                </LinkContainer>
              </StyledStack>
              <ProjectSection
                projects={post.nodes as ProjectSectionProps}
              ></ProjectSection>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ProjectHomePage {
    projects: allContentfulProgetti(sort: { fields: createdAt, order: DESC }) {
      group(field: project_category___title, limit: 3) {
        fieldValue
        nodes {
          titolo
          articleTitle
          slug
          descrizione {
            descrizione
          }
          project_category {
            slug
            title
          }
          copertina {
            gatsbyImageData
          }
        }
      }
    }
    latestProjects: allContentfulProgetti(
      sort: { fields: createdAt, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          titolo
          articleTitle
          slug
          descrizione {
            descrizione
          }
          project_category {
            slug
          }
          createdAt
          body {
            childMarkdownRemark {
              timeToRead
            }
          }
          copertina {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ProjectsHome;
