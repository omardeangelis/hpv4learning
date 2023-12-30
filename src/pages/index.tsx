import * as React from "react"
// Global Layoaut

import { Box } from "old-ui"
import Layout from "../components/shared/layout"

// Meta Title e SEO e Utils
import LinkHandler from "../components/SEO/components/LinkHandler"
// Components
import { Hero as NewHero } from "../feature/home/components/hero/Hero"
// Material UI
import OrganizationSchema from "../components/SEO/components/OrganizationSchema"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import { HeroSpacer } from "../feature/navigation/components/HeroSpacer"
import { ServiceSection } from "../feature/home/components/service/ServiceSection"
import { HomeBanner } from "../feature/home/components/banner/HomeBanner"

const IndexPage = () => (
  <Layout>
    <HeroSpacer
      background="grey10"
      display={{
        mobile: `none`,
        lg: `block`,
      }}
    />
    <NewHero />
    <Box
      mt={{
        mobile: 48,
        lg: 96,
      }}
    >
      <ServiceSection />
    </Box>
    <Box
      mt={{
        mobile: 48,
        lg: 96,
      }}
    >
      <HomeBanner />
    </Box>
  </Layout>
)

export const Head = () => (
  <>
    <MetaDecorator
      metaTitle="Corsi di formazione e servizi digitali per aziende e professionisti."
      metaDescription="Professionisti che insegnano a professionisti. Corsi di formazione online e servizi digitali professionali per aziende e professionisti."
    />
    <OrganizationSchema />
    <LinkHandler />
  </>
)

export default IndexPage
