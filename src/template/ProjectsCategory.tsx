import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { createRowText, rowalizer } from "../utils/helpers";
import Layout from "../components/ui/navigation/layout";
import { ProjectSectionProps } from "../feature/projects/types";
import { ProjectSection } from "../feature/projects/components";
import { BottomBanner, RoundedButton } from "../components/layout";
import SeoLink from "../components/shared/SeoLink";

type Props = {
  pageContext: {
    slug: string;
    hasNextPage: boolean;
    pages: number;
    currentPage: number;
    title: string;
    description: string;
  };
};

const ProjectsCategory = ({
  pageContext: { slug, hasNextPage, pages, currentPage, title, description },
  data: {
    allContentfulProgetti: { nodes: progetti },
    corso,
  },
}: PageProps<Queries.ProjectCategoryPageQuery> & Props) => {
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box maxWidth='756px' mx='auto' mt={{ xs: "48px", lg: "96px" }}>
          <Typography
            fontWeight={600}
            component='h1'
            textAlign='center'
            sx={{
              fontSize: { xs: "34px", lg: "56px" },
              lineHeight: { xs: "39px", lg: "64px" },
            }}
          >
            {`Realizza Progetti pratici per ${title}`}
          </Typography>

          <Typography
            component='p'
            textAlign='center'
            sx={{
              fontSize: { xs: "18px", lg: "24px" },
              lineHeight: { xs: "22px", lg: "28px" },
              color: "grey.600",
              mt: { xs: "16px", lg: "24px" },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Container>
      <Container maxWidth='lg'>
        <Stack
          flexDirection='column'
          spacing={{ xs: "48px", lg: "72px" }}
          sx={{
            mt: { xs: "48px", lg: "96px" },
          }}
        >
          {rowalizer(progetti as ProjectSectionProps)?.map((row, index) => {
            return <ProjectSection projects={row} key={slug + index} />;
          })}
        </Stack>
      </Container>
      <BottomBanner
        title={`${createRowText(corso?.titolo as any)}`}
        sx={{ backgroundColor: "purple.A100", mt: { xs: "48px", lg: "96px" } }}
      >
        <SeoLink isExternal={false} link={`/${corso?.slug}/`}>
          <RoundedButton variant='contained' color='primary' size='large'>
            Inizia ora
          </RoundedButton>
        </SeoLink>
      </BottomBanner>
    </Layout>
  );
};

export const query = graphql`
  query ProjectCategoryPage($id: String!, $skip: Int!, $limit: Int!) {
    allContentfulProgetti(
      filter: { project_category: { elemMatch: { id: { eq: $id } } } }
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        titolo
        copertina {
          gatsbyImageData
        }
        descrizione {
          descrizione
        }
        project_category {
          title
        }
      }
    }
    corso: contentfulCorsi(
      progetti: {
        elemMatch: { project_category: { elemMatch: { id: { eq: $id } } } }
      }
    ) {
      titolo
      slug
    }
  }
`;

export default ProjectsCategory;
