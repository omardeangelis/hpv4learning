import * as React from "react"
// Global Layoaut
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Layout from "../components/shared/layout"
import TopHeroContent from "../components/TopHeroContent"

// Meta Title e SEO e Utils
import SeoLink from "../components/shared/SeoLink"
import LinkHandler from "../components/SEO/components/LinkHandler"
// Components
import Hero from "../components/ui/Hero"
// Material UI
import { CommunityBanner } from "../components/banner"
import CourseWall from "../components/course/CourseWall"
import OrganizationSchema from "../components/SEO/components/OrganizationSchema"
import { HomeSection } from "../feature/projects/components"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import { BottomBanner, RoundedButton } from "../components/layout"
import { IndexInfo } from "../feature/home"
import { HeroSpacer } from "../feature/navigation/components/HeroSpacer"

const IndexPage = () => {
  const coursesPositionRef = React.useRef<null | HTMLDivElement>(null)
  const goToCourseSection = React.useCallback(() => {
    if (!coursesPositionRef.current) {
      return
    }
    coursesPositionRef.current?.scrollIntoView({
      behavior: `smooth`,
    })
  }, [])
  return (
    <Layout>
      <HeroSpacer />
      <Hero>
        <TopHeroContent fn={goToCourseSection} />
      </Hero>
      <Box
        sx={{
          backgroundColor: `#000`,
          py: { xs: `36px`, lg: `72px` },
        }}
      >
        <IndexInfo />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <Box component="section">
          <Typography
            component={`h2`}
            textAlign="center"
            sx={{
              fontSize: { xs: `36px`, lg: `48px` },
              fontWeight: 600,
            }}
            id="corsi"
          >
            I nostri <span className="brand-text">corsi</span>
          </Typography>
          <Box mt="34px" ref={coursesPositionRef}>
            <CourseWall />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
          py: `72px`,
          background: `#000`,
        }}
      >
        <Typography
          fontWeight={600}
          textAlign="center"
          color="white"
          component="h2"
          lineHeight={{
            xs: `39px`,
            lg: `56px`,
          }}
          fontSize={{
            xs: `34px`,
            lg: `48px`,
          }}
        >
          Scopri la nostra community di studenti
        </Typography>
        <Box
          sx={{
            mt: { xs: `24px`, lg: `34px` },
          }}
        >
          <CommunityBanner />
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <Container maxWidth="lg">
          <Box mx="auto">
            <Box mx="auto" maxWidth="656px">
              <Typography
                fontWeight={600}
                textAlign="center"
                component="h2"
                lineHeight={{
                  xs: `39px`,
                  lg: `56px`,
                }}
                fontSize={{
                  xs: `34px`,
                  lg: `48px`,
                }}
              >
                Impara realizzando dei progetti pratici
              </Typography>
            </Box>
            <Box
              mx="auto"
              maxWidth="656px"
              mt={{
                xs: `16px`,
                lg: `24px`,
              }}
            >
              <Typography
                fontWeight={400}
                textAlign="center"
                sx={{
                  color: `grey.600`,
                }}
                lineHeight={{
                  xs: `20px`,
                  lg: `29px`,
                }}
                fontSize={{
                  xs: `18px`,
                  lg: `24px`,
                }}
              >
                Un giusto equilibrio tra pratica e teoria è il miglior modo per
                padroneggiare ogni concetto
              </Typography>
            </Box>
          </Box>

          <Stack
            alignItems="center"
            justifyContent="center"
            mt={{
              xs: `24px`,
              lg: `34px`,
            }}
          >
            <SeoLink isExternal={false} link="/progetti/">
              <Button variant="contained" size="large">
                Vedi tutti
              </Button>
            </SeoLink>
          </Stack>
        </Container>
        <Box
          mt={{
            xs: `36px`,
            lg: `48px`,
          }}
        >
          <HomeSection />
        </Box>
      </Box>
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
              Hai bisogno di un <span className="brand-text">sito web </span>su
              misura per le tue esigenze ?
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
            Fissa una videochiamata in pochi step e raccontaci di che cosa hai
            bisogno.
          </Typography>
          <SeoLink link="/consulenze/" isExternal={false}>
            <RoundedButton
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: `30px`,
                width: { xs: `100%`, md: `unset` },
              }}
            >
              Scopri di più
            </RoundedButton>
          </SeoLink>
        </BottomBanner>
      </Box>
    </Layout>
  )
}

export const Head = () => (
  <>
    <MetaDecorator
      metaTitle="Videocorsi per sviluppatori web e videomakers"
      metaDescription="Diventa uno sviluppaotre web con videocorsi professionali per frontend. Inizia il tuo percorso con corsi di CSS e HTML gratuiti"
    />
    <OrganizationSchema />
    <LinkHandler />
  </>
)

export default IndexPage
