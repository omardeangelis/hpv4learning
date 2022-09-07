import React from "react";
import Layout from "../components/shared/layout";
import { Router } from "@reach/router";
import { ConsulenzeLayout } from "../feature/pages/ConsulenzeLayout";
import { ReservationModal } from "../feature/consulenze/components";

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

export default Consulenze;
