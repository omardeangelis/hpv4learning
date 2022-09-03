import React from "react";
import Layout from "../components/shared/layout";
import { Button } from "@mui/material";
import { Router } from "@reach/router";
import { Modal } from "../feature/consulenze/components";
import { ConsulenzeLayout } from "../feature/pages/ConsulenzeLayout";
import { navigate } from "gatsby";

const Consulenze = () => {
  return (
    <>
      <Layout disableColor>
        <Router basepath='/consulenze/'>
          <Modal path='/prenota/' prova='prova' />
        </Router>
        <ConsulenzeLayout />
      </Layout>
    </>
  );
};

export default Consulenze;
