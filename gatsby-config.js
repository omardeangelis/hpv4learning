require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
