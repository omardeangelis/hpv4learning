import * as React from "react";
//Global Layoaut
import Layout from "../components/layout";
//Meta Title e SEO
import { indexInfo } from "../page_info/indexInfo";
import MetaDecorator from "../components/utils/MetaDecorator";
//Components
import BgImageSection from "../components/BgImageSection";
import ContactSection from "../components/ContactSection";
//Gastby
import { graphql } from "gatsby";
//Material UI
import Container from "@material-ui/core/Container/Container";
const IndexPage = () => {
  return (
    <Layout>
      <MetaDecorator
        title={indexInfo.title}
        description={indexInfo.description}
      ></MetaDecorator>
      <h2>Home Page</h2>
    </Layout>
  );
};

export default IndexPage;
