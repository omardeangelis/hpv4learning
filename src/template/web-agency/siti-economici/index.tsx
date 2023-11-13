import { Router } from "@reach/router"
import React from "react"
import LinkHandler from "../../../components/SEO/components/LinkHandler"
import MetaDecorator from "../../../components/SEO/components/MetaDecorator"
import WebPageSchema from "../../../components/SEO/components/WebPageSchema"
import { ReservationModal } from "../../../feature/consulenze/components"
import { SitiEconomiciPage } from "../../../feature/web-agency/pages/SitiEconomiciPage"

const SitiEconomici = () => (
  <>
    <Router basepath="/web-agency/siti-economici">
      <ReservationModal path="/prenota/" />
    </Router>
    <SitiEconomiciPage />
  </>
)

export const Head = () => (
  <>
    <MetaDecorator
      metaTitle="Siti economici a partire da 100€"
      metaDescription="Soluzioni per PMI, professionisti e privati che vogliono inziare a digitalizzare i propri servizi"
    />
    <WebPageSchema
      title="Siti economici a partire da 100€"
      description="Soluzioni per PMI, professionisti e privati che vogliono inziare a digitalizzare i propri servizi"
      breadcrumbs={[]}
    />
    <LinkHandler />
  </>
)

export default SitiEconomici
