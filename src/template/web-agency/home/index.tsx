import React from "react"
import { WebAgencyHomePage } from "../../../feature/web-agency/pages/WebAgencyHomePage"
import MetaDecorator from "../../../components/SEO/components/MetaDecorator"
import LinkHandler from "../../../components/SEO/components/LinkHandler"
import WebPageSchema from "../../../components/SEO/components/WebPageSchema"
import { PageWithForm } from "../../../feature/web-agency/components/core/PageWithForm"

const WebAgencyHome = () => (
  <PageWithForm>
    <WebAgencyHomePage />
  </PageWithForm>
)

export const Head = () => (
  <>
    <MetaDecorator
      metaTitle="Siti web per aziende e professionisti"
      metaDescription="Siamo un’agenzia creativa che realizza siti web su misura e personalizzati per ogni azienda. "
    />
    <WebPageSchema
      title="Siti web per aziende e professionisti"
      description="Siamo un’agenzia creativa che realizza siti web su misura e personalizzati per ogni azienda. "
      breadcrumbs={[]}
    />
    <LinkHandler />
  </>
)

export default WebAgencyHome
