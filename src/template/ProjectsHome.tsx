import { Stack, Typography } from "@mui/material"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import styled from "@emotion/styled"
import { graphql, PageProps } from "gatsby"
import React from "react"
import SeoLink from "../components/shared/SeoLink"
import Layout from "../components/shared/layout"
import { ProjectSection } from "../feature/projects/components/ProjectSection"
import { LatestProject } from "../feature/projects/components"
import { ProjectSectionProps } from "../feature/projects/types"
import LinkHandler from "../components/SEO/components/LinkHandler"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import WebPageSchema from "../components/SEO/components/WebPageSchema"

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
  &:hover {
    text-decoration: underline !important;
  }
`

const StyledStack = styled(Stack)`
  margin-top: 72px;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    margin-top: 96px;
    margin-bottom: 30px;
  }
`

const ProjectsHome = ({ data }: PageProps<Queries.ProjectHomePageQuery>) => {
  const latestProject = React.useMemo(() => data.latestProjects.edges[0], [])

  return (
    <Layout>
      <Container maxWidth="lg">
        {latestProject ? <LatestProject {...latestProject} /> : null}
        {data.projects.group.map((post, index) => (
          <div key={index}>
            <StyledStack direction="row" justifyContent="space-between">
              <Typography
                component="h2"
                fontWeight={600}
                fontSize={{ xs: `20px`, lg: `34px` }}
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
            <ProjectSection projects={post.nodes as ProjectSectionProps} />
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const Head = ({ data }: PageProps<Queries.ProjectHomePageQuery>) => {
  const breadcrumbs = React.useMemo(
    () => [
      {
        text: `Home`,
        link: `/`,
      },
      {
        text: `Progetti`,
        link: `/progetti/`,
      },
    ],
    []
  )

  const courseTitlesString = React.useMemo(
    () => data.projects.group.map((el) => el.fieldValue).join(`,`),
    []
  )
  return (
    <>
      <MetaDecorator
        metaTitle={`Impara grazie alla pratica`}
        metaDescription={`Consolida le tue conoscenze in ${courseTitlesString} con progetti pratici`}
      />
      <WebPageSchema
        title={`Impara grazie alla pratica`}
        description={`Consolida le tue conoscenze in ${courseTitlesString} con progetti pratici`}
        breadcrumbs={breadcrumbs}
      />
      <LinkHandler />
    </>
  )
}

export const query = graphql`query ProjectHomePage {
  projects: allContentfulProgetti(sort: {createdAt: DESC}) {
    group(field: {project_category: {title: SELECT}}, limit: 3) {
      fieldValue
      nodes {
        titolo
        meta_title
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
  latestProjects: allContentfulProgetti(sort: {createdAt: DESC}, limit: 1) {
    edges {
      node {
        titolo
        meta_title
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
}`

export default ProjectsHome
