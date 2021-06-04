require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "hpv 4 Learning",
    desc: "La piattaforma per rilanciare la tua carriera digitale grazie videocorsi offerti solo da professinisti ed eseperti del settore",
    url: "https://hpv4learning1.netlify.app",
    siteLanguage: "it",
    keywords: [
      "videocorsi in italiano",
      "diventare sviluppatore",
      "imparare a programmare",
      "diventare un videomaker",
      "premiere",
      "javascript",
      "react js",
      "programmazione frontend",
      "imparare javascript",
      "imparare react",
    ],
    ogLanguage: "it_IT",
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFULL_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFULL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hpv 4 Learning",
        short_name: "H4L",
        start_url: "/",
        display: "standalone",
        background_color: "#7026BA",
        theme_color: "#ffffff",
        icon: "./src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
