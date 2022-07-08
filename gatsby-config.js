require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "hpv 4 Learning",
    slogan: "hpv 4 Learning",
    description:
      "Corsi di Programmazione e videomaking in italiano creati da professionisti del settore.",
    siteUrl: process.env.GASTBY_SITE_URL,
    youtube: "https://www.youtube.com/channel/UC9kv8nH9i9kSj_q0FqckiYw",
    author: "@hpv4learning",
    image: "/share.png",
    imageWidth: "512",
    imageHeight: "288",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFULL_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFULL_SPACE_ID,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: [
        "/progetti/javascript/2",
        "/progetti/javascript/3",
        "/progetti/javascript/4",
        "/progetti/javascript/5",
        "/progetti/javascript/6",
        "/progetti/javascript/7",
        "/progetti/javascript/8",
        "/progetti/react/2",
        "/progetti/react/3",
        "/progetti/react/4",
        "/progetti/react/5",
        "/progetti/react/6",
        "/progetti/react/7",
        "/progetti/react/8",
        "/progetti/videomaker/2",
        "/progetti/videomaker/3",
        "/progetti/videomaker/4",
        "/progetti/videomaker/5",
        "/progetti/videomaker/6",
        "/progetti/videomaker/7",
        "/progetti/videomaker/8",
      ],
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GA4_TRACKING_URL, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
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
