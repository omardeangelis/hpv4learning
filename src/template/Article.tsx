import { PageProps, graphql } from "gatsby"
import React from "react"
import Container from "@mui/material/Container"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Layout from "../components/shared/layout"
import { ArticleHero } from "../feature/blog"
import { ArticleBody } from "../feature/projects/components/ArticleBody"
import { BottomBanner, RoundedButton } from "../components/layout"
import SeoLink from "../components/shared/SeoLink"

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
                  <ArticleHero {...article} />
                  <ArticleBody {...article} />
                </Box>
              </Box>
            </StyledBox>
          </Box>
        </FlexContainer>
      </Container>
      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <BottomBanner
          position="relative"
          overflow="hidden"
          title={
            <Typography
              color="white"
              fontSize={[`24px`, `34px`]}
              lineHeight={[`29px`, `39px`]}
              textAlign="center"
              fontWeight={600}
            >
              Scopri la nostra guida completa su{` `}
              <span className="brand-text">
                {article?.guida?.[0]?.argomento}
                {` `}
              </span>
            </Typography>
          }
          sx={{
            backgroundColor: `purple.900`,
          }}
        >
          <Typography
            width="100%"
            fontSize="21px"
            lineHeight="24px"
            color="gray.200"
            textAlign="center"
            sx={{
              maxWidth: { xs: `unset`, lg: `611px` },
            }}
          >
            {article?.guida?.[0]?.metaDescription}
          </Typography>
          <SeoLink
            link={`/guide/${article?.guida?.[0]?.slug}/`}
            isExternal={false}
          >
            <RoundedButton
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: `30px`,
                width: { xs: `100%`, md: `unset` },
              }}
            >
              Leggi
            </RoundedButton>
          </SeoLink>
        </BottomBanner>
      </Box>
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
      meta_title
      meta_description
      createdAt
      updatedAt
      guida {
        title
        metaDescription
        slug
        argomento
        copertina {
          gatsbyImageData
        }
        corsi_correlati {
          slug
        }
      }
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
    }
  }
`
