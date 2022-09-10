import React from "react";
import Layout from "../components/shared/layout";
import { Router } from "@reach/router";
import { ConsulenzeLayout } from "../feature/pages/ConsulenzeLayout";
import { ReservationModal } from "../feature/consulenze/components";
import MetaDecorator from "../components/SEO/components/MetaDecorator";
import WebPageSchema from "../components/SEO/components/WebPageSchema";
import LinkHandler from "../components/SEO/components/LinkHandler";

const Consulenze = () => {
  return (
    <>
      <Layout disableColor>
        <Router basepath='/consulenze/'>
          <ReservationModal path='/prenota/' />
        </Router>
        <ConsulenzeLayout />
      </Layout>
    </>
  );
};

export const Head = () => {
  const breadcrumbs = React.useMemo(() => {
    return [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Contattaci",
        link: "consulenze",
      },
    ];
  }, []);
  return (
    <>
      <MetaDecorator
        metaTitle='Contattaci: Siti Web professinali'
        metaDescription='Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo misurato sulle tue esigenze'
        disableSlogan
      />
      <WebPageSchema
        title='Contattaci: Siti Web professinali'
        description='Fissa una chiamata per studiare con noi la miglior soluzione e sviluppare un preventivo misurato sulle tue esigenze'
        breadcrumbs={breadcrumbs}
      />
      <LinkHandler />
    </>
  );
};

export default Consulenze;
