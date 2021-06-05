import React from "react";
import { Helmet } from "react-helmet";
import Facebook from "../SEO/Facebook";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { removeAllPointsFromString } from "../../utils/helpers";

const MetaDecorator = ({
  title,
  desc,
  keywords,
  children,
  lang,
  ogLang,
  image,
  url,
  type,
}) => {
  const img =
    image ||
    "https://res.cloudinary.com/thomasdea/image/upload/v1622903361/HPV%204%20Business/logo-scritta-hpv4_y7k7sd.png";

  const data = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    defaultUrl,
    defaultSiteLanguage,
    defaultKeywords,
    defaultOgLanguage,
  } = data.site.siteMetadata;

  return (
    <Helmet
      title={title || defaultTitle}
      titleTemplate={`${defaultTitle} | ${title || defaultTitle}`}
    >
      <html lang={lang || defaultSiteLanguage} />
      <meta name='description' content={desc || defaultDescription}></meta>
      {keywords ? (
        <meta
          name='keywords'
          content={removeAllPointsFromString(keywords.join(","))}
        ></meta>
      ) : (
        <meta name='keywords' content={defaultKeywords.join(",")}></meta>
      )}
      <meta property='image' content={img}></meta>
      <Facebook
        url={url || defaultUrl}
        type={type}
        title={title || defaultTitle}
        desc={desc || defaultDescription}
        image={img}
        lang={ogLang || defaultOgLanguage}
      />
      {children}
    </Helmet>
  );
};

export default MetaDecorator;

MetaDecorator.propTypes = {
  keywords: PropTypes.array,
  type: PropTypes.string,
  name: PropTypes.string,
};

MetaDecorator.defaultProps = {
  type: "website",
  name: null,
};

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: desc
        defaultUrl: url
        defaultSiteLanguage: siteLanguage
        defaultKeywords: keywords
        defaultOgLanguage: ogLanguage
      }
    }
  }
`;
