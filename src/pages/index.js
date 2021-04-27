import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import MetaDecorator from "../components/utils/MetaDecorator";
import { indexInfo } from "../page_info/indexInfo";
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MetaDecorator
        title={indexInfo.title}
        description={indexInfo.description}
      ></MetaDecorator>
      <Projects sectionTitle="Progetti React" data={data}></Projects>
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
