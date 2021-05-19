import * as React from "react";
//Global Layoaut
import Layout from "../components/layout";
//Meta Title e SEO
import { indexInfo } from "../page_info/indexInfo";
import MetaDecorator from "../components/utils/MetaDecorator";
//Components
import Projects from "../components/Projects";
import BgImageSection from "../components/BgImageSection";
import ContactSection from "../components/ContactSection";
//Gastby
import { graphql } from "gatsby";
//Material UI
import Container from "@material-ui/core/Container/Container";
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MetaDecorator
        title={indexInfo.title}
        description={indexInfo.description}
      ></MetaDecorator>
      <BgImageSection>
        <ContactSection></ContactSection>
      </BgImageSection>
      <Container maxWidth="lg">
        <Projects data={data}></Projects>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProgetti(sort: { order: ASC, fields: ordine }) {
      nodes {
        id
        ordine
        titolo
        url
        copertina {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;

export default IndexPage;
