import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/shared/layout"
import { ConsulenzeLayout } from "../feature/pages/ConsulenzeLayout"
import { ReservationModal } from "../feature/consulenze/components"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import WebPageSchema from "../components/SEO/components/WebPageSchema"
import LinkHandler from "../components/SEO/components/LinkHandler"

const Consulenze = () => (
  <Layout>
    <Router basepath="/formazione/">
      <ReservationModal path="/prenota/" />
    </Router>
    <ConsulenzeLayout />
  </Layout>
)

const breadcrumbs = [
  {
    text: `Home`,
    link: `/`,
  },
  {
    text: `Contattaci`,
    link: `/formazione/`,
  },
]

export const Head = () => (
  <>
    <MetaDecorator
      metaTitle="Contattaci: Siti Web per professionisti"
      metaDescription="Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo per il tuo sito web"
      disableSlogan
    />
    <WebPageSchema
      title="Contattaci: Siti Web per professionisti"
      description="Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo per il tuo sito web"
      type="ContactPage"
      breadcrumbs={breadcrumbs}
    />
    <LinkHandler />
  </>
)

export default Consulenze
