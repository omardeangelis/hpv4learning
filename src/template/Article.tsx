import { PageProps, graphql } from "gatsby"
import React from "react"
import Layout from "../components/shared/layout"
import Container from "@mui/material/Container"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import { ArticleHero } from "../feature/projects/components/ArticleHero"
import { ArticleBody } from "../feature/projects/components/ArticleBody"

const FlexContainer = styled(Box)`
  display: block;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const StyledBox = styled(Box)`
  padding: 0px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 887px;
    padding-right: 84px;
  }
`

const Article = ({ data }: PageProps<Queries.SingleArticleQuery>) => {
  const article = React.useMemo(() => data.article, [data])
  return (
    <Layout>
      <Container sx={{ padding: `0px` }} maxWidth={`lg`}>
        <FlexContainer
          sx={{
            position: `relative`,
            alignItems: `flex-start`,
            justifyContent: `center`,
          }}
        >
          <Box>
            <StyledBox>
              <Box
                sx={{
                  mt: { xs: `48px`, lg: `96px` },
                }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: `unset`, lg: `1080px` },
                    margin: `auto`,
                  }}
                >
                  <div>{article?.titolo}</div>
                  <ArticleHero {...article} />
                  <ArticleBody {...article} />
                </Box>
              </Box>
            </StyledBox>
          </Box>
        </FlexContainer>
      </Container>
    </Layout>
  )
}

// const breadcrumbs = [
//   {
//     text: `Home`,
//     link: `/`,
//   },
//   {
//     text: `Contattaci`,
//     link: `/consulenze/`,
//   },
// ]

// export const Head = () => (
//   <>
//     <MetaDecorator
//       metaTitle="Contattaci: Siti Web per professionisti"
//       metaDescription="Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo per il tuo sito web"
//       disableSlogan
//     />
//     <WebPageSchema
//       title="Contattaci: Siti Web per professionisti"
//       description="Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo per il tuo sito web"
//       type="ContactPage"
//       breadcrumbs={breadcrumbs}
//     />
//     <LinkHandler />
//   </>
// )

export default Article

export const query = graphql`
  query SingleArticle($id: String!) {
    article: contentfulArticolo(id: { eq: $id }) {
      id
      titolo
      slug
      ordine
      copertina {
        gatsbyImageData
        file {
          url
        }
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
    }
  }
`
