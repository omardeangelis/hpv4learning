import React from "react";
import Layout from "../components/shared/layout";
import { Button } from "@mui/material";
import { Router } from "@reach/router";
import { Modal } from "../feature/consulenze/components";
import { navigate } from "gatsby";

const Consulenze = () => {
  return (
    <>
      <Layout>
        <Router basepath='/consulenze/'>
          <Modal path='/prenota/' prova='prova' />
        </Router>
        <Button onClick={() => navigate("/consulenze/prenota/")}>
          Fissa una chiamata
        </Button>
      </Layout>
    </>
  );
};

export default Consulenze;
