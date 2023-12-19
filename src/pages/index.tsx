import * as React from "react"
// Global Layoaut

import Layout from "../components/shared/layout"

// Meta Title e SEO e Utils
import LinkHandler from "../components/SEO/components/LinkHandler"
// Components
import { Hero as NewHero } from "../feature/home/components/hero/Hero"
// Material UI
import OrganizationSchema from "../components/SEO/components/OrganizationSchema"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import { HeroSpacer } from "../feature/navigation/components/HeroSpacer"

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
