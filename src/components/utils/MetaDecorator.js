import React from "react";
import { Helmet } from "react-helmet";
const MetaDecorator = ({ title, description, keywords, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      {keywords && <meta name="keywords" content={keywords}></meta>}
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>

      {children}
    </Helmet>
  );
};

export default MetaDecorator;
