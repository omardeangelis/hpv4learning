import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
// import useSeoData from '../hooks/useSeoData'

const LinkHandler = () => {
  const { href } = useLocation();
  console.log(href);

  return (
    <Helmet>
      <link href={href} rel='alternate' hrefLang={'it-IT"'} key={"it"} />
      <link href={href} rel='canonical' key={"it-IT"} />
    </Helmet>
  );
};

export default LinkHandler;
