import React from "react"
import { graphql, PageProps } from "gatsby"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Layout from "../components/shared/layout"
import { GuideInfo } from "../feature/guide/GuideInfo"
import { TextSection } from "../feature/guide/TextSection"
import { Hero } from "../feature/guide/Hero"
import { VideoSection } from "../feature/guide/VideoSection"
import { GuidesSection } from "../feature/guide/GuidesSection"
import { BottomBanner } from "../components/layout/BottomBanner"
import SeoLink from "../components/shared/SeoLink"
import { RoundedButton } from "../components/layout/RoundedButton"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import LinkHandler from "../components/SEO/components/LinkHandler"
import WebPageSchema from "../components/SEO/components/WebPageSchema"

const Guide = ({ data }: PageProps<Queries.GuideQuery>) => {
  const queryData = React.useMemo(
    () => data.allContentfulGuida.nodes[0],
    [data]
  )

  return (
    <Layout>
      <Hero title={queryData.title} description={queryData.metaDescription} />

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
          mx: `12px`,
        }}
      >
        {queryData.corsi_correlati ? (
          <GuideInfo
            projects={queryData.articoli_e_progetti}
            courseMinutes={queryData.corsi_correlati[0].oreDiLezione}
            price={queryData.corsi_correlati[0].prezzo}
          />
        ) : null}
      </Box>

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
          mx: `12px`,
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <TextSection
            domanda={queryData.domanda}
            rispostaPrincipale={queryData.risposta_principale}
            rispostaAggiuntiva={queryData.risposta_aggiuntiva}
          />
        </Stack>
      </Box>

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        {queryData.corsi_correlati ? (
          <VideoSection
            argomento="Git e Github"
            image={queryData.corsi_correlati[0]?.copertina?.gatsbyImageData}
            slug={queryData.corsi_correlati[0]?.slug}
          />
        ) : null}
      </Box>

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
          mx: `12px`,
        }}
      >
        <GuidesSection
          projects={queryData.articoli_e_progetti}
          courseSlug={data.allContentfulGuida.group[0].fieldValue}
        />
      </Box>

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <BottomBanner
          title="Vedi tutti i corsi"
          sx={{
            backgroundColor: `purple.A100`,
          }}
        >
          <SeoLink isExternal={false} link={`/#corsi`}>
            <RoundedButton
              size="large"
              color="primary"
              variant="contained"
              sx={{
                color: `#fff`,
                fontSize: `18px`,
              }}
            >
              Vai ai corsi
            </RoundedButton>
          </SeoLink>
        </BottomBanner>
      </Box>

      <Container maxWidth="lg" />
    </Layout>
  )
}

export const Head = ({ data }: PageProps<Queries.GuideQuery>) => {
  const queryData = React.useMemo(
    () => data.allContentfulGuida.nodes[0],
    [data]
  )
  const breadcrumbs = React.useMemo(
    () => [
      { text: `Home`, link: `/` },
      { text: `Guide`, link: `/guide/` },
      { text: `${queryData.title}`, link: `/guide/${queryData.slug}` },
    ],
    []
  )
  return (
    <>
      <MetaDecorator
        metaTitle={queryData.metaTitle as any}
        metaDescription={queryData.metaDescription as any}
      />
      <LinkHandler />
      <WebPageSchema
        title={queryData.metaTitle as any}
        description={queryData.metaDescription as any}
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}

export const query = graphql`
  query Guide {
    allContentfulGuida {
      nodes {
        argomento
        domanda
        risposta_aggiuntiva
        risposta_principale
        title
        metaTitle
        metaDescription
        slug
        articoli_e_progetti {
          articleTitle
          body {
            childrenMarkdownRemark {
              timeToRead
            }
          }
          copertina {
            gatsbyImageData
          }
          descrizione {
            descrizione
          }
          slug
        }
        corsi_correlati {
          copertina {
            gatsbyImageData
          }
          slug
          oreDiLezione
          prezzo
        }
      }
      group(field: articoli_e_progetti___project_category___slug) {
        fieldValue
      }
    }
  }
`

export default Guide
