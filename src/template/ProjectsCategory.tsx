import { Container } from "@mui/system";
import React from "react";
import Layout from "../components/shared/layout";

type Props = {
  pageContext: { slug: string };
};

const ProjectsCategory = ({ pageContext: { slug } }: Props) => {
  return (
    <Layout>
      <Container maxWidth='lg'>
        ProjectsCategory<span> {slug}</span>
      </Container>
    </Layout>
  );
};

export default ProjectsCategory;
