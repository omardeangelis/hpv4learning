import { Box, Container } from "@mui/system";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SeoLink from "../components/shared/SeoLink";
import Layout from "../components/ui/navigation/layout";
import { LatestProject } from "../feature/projects/components";

const ProjectsHome = ({ data }: PageProps<Queries.ProjectHomePageQuery>) => {
  const latestProject = React.useMemo(() => {
    return data.latestProjects.edges[0];
  }, []);
  return (
    <Layout>
      <Container maxWidth='lg'>
        {latestProject ? <LatestProject {...latestProject} /> : null}
        {data.projects.group.map((section) => (
          <Box>
            <SeoLink
              isExternal={false}
              link={section.nodes[0].project_category?.[0]?.slug as string}
            >
              {section.fieldValue}
            </SeoLink>
          </Box>
        ))}
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
          descrizione {
            descrizione
          }
          project_category {
            slug
          }
          copertina {
            gatsbyImageData
          }
        }
      }
    }
    latestProjects: allContentfulProgetti(
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          titolo
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
