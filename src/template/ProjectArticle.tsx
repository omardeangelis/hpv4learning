import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/shared/layout";
import { Box, Button, Container } from "@mui/material";
import styled from "@emotion/styled";
import {
  ArticleBody,
  ArticleHero,
  ProjectBanner,
  ArticleFooter,
} from "../feature/projects/components";
import MetaDecorator from "../components/SEO/components/MetaDecorator";
import { createRowText } from "../utils/helpers";
import ArticleSchema from "../components/SEO/components/ArticleSchema";
import LinkHandler from "../components/SEO/components/LinkHandler";
import { BottomBanner } from "../components/layout";
import SeoLink from "../components/shared/SeoLink";

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
    return data.project;
  }, [data]);

  const breadcrumbs = React.useMemo(() => {
    const courseSlug = queryData?.project_category?.[0]?.slug;
    const slug = queryData?.slug;
    return [
      { text: "Home", link: "/" },
      { text: "Progetti", link: "/progetti/" },
      { text: `Progetti ${courseSlug}`, link: `/progetti/${courseSlug}/` },
      {
        text: queryData?.articleTitle,
        link: `/progetti/${courseSlug}/${slug}/`,
      },
    ];
  }, [queryData]);

  const bannerTitle = React.useMemo(() => {
    const corsi = queryData?.corsi?.[0];
    return `Inizia ora a studiare ${createRowText(corsi?.titolo as string)}`;
  }, [queryData?.corsi?.[0]]);

  return (
    <Layout>
      <MetaDecorator
        metaTitle={createRowText(queryData?.articleTitle as any)}
        metaDescription={queryData?.metaDescription as any}
        image={
          queryData && (("https:" + queryData?.copertina?.file?.url) as any)
        }
      ></MetaDecorator>
      <LinkHandler />
      <ArticleSchema
        title={createRowText(queryData?.articleTitle as any)}
        description={queryData?.descrizione?.descrizione as any}
        authorName='hpv4learning'
        breadcrumbs={breadcrumbs as any}
        image={
          queryData && (("https:" + queryData?.copertina?.file?.url) as any)
        }
        imageAltText={createRowText(queryData?.articleTitle as any)}
        modifiedDate={queryData?.updatedAt as any}
        publishDate={queryData?.createdAt as any}
      />
      <Container sx={{ padding: "0px" }} maxWidth={"lg"}>
        <FlexContainer sx={{ position: "relative", alignItems: "flex-start" }}>
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
          <ProjectBanner
            courseTitle={queryData?.corsi?.[0]?.titolo}
            prezzo={queryData?.corsi?.[0]?.prezzo}
            couponLink={queryData?.corsi?.[0]?.couponLink}
          />
        </FlexContainer>
        <Container maxWidth='lg'>
          <ArticleFooter {...data} />
        </Container>
      </Container>
      <BottomBanner
        title={bannerTitle}
        sx={{ backgroundColor: "purple.A100", mt: { xs: "48px", lg: "96px" } }}
      >
        <SeoLink isExternal={false} link={`/${queryData?.corsi?.[0]?.slug}/`}>
          <Button
            size='large'
            sx={{
              borderRadius: "100px",
              background: "#8769FE",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Vai al corso
          </Button>
        </SeoLink>
      </BottomBanner>
    </Layout>
  );
};

export default ProjectArticle;

export const query = graphql`
  query SingleProject($id: String, $nextProjectOrder: Int, $courseId: String) {
    project: contentfulProgetti(id: { eq: $id }) {
      id
      titolo
      articleTitle
      slug
      metaDescription
      ordine
      url
      copertina {
        gatsbyImageData
        file {
          url
        }
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
      updatedAt
      project_category {
        slug
      }
      linkGithub
      corsi {
        titolo
        prezzo
        couponLink
        slug
      }
    }
    nextProject: contentfulProgetti(
      ordine: { eq: $nextProjectOrder }
      corsi: { elemMatch: { idCorso: { eq: $courseId } } }
    ) {
      articleTitle
      slug
      descrizione {
        descrizione
      }
      copertina {
        gatsbyImageData
      }
    }
  }
`;
