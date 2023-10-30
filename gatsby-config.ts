import { config as dotenv } from "dotenv"
import { GatsbyConfig } from "gatsby"

dotenv({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env.NODE_ENV)

const config: GatsbyConfig = {
  graphqlTypegen: true,
  trailingSlash: `always`,
  siteMetadata: {
    title: `Videocorsi per sviluppatori web e videomakers`,
    slogan: `hpv 4 Learning`,
    description: `Diventa uno sviluppaotre web con videocorsi professionali per frontend. Inizia il tuo percorso con corsi di CSS e HTML gratuiti.`,
    siteUrl: process.env.GASTBY_SITE_URL,
    youtube: `https://www.youtube.com/channel/UC9kv8nH9i9kSj_q0FqckiYw`,
    author: `@hpv4learning`,
    image: `/share.png`,
    imageWidth: `512`,
    imageHeight: `288`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.GATSBY_CONTENTFULL_API_KEY,
        spaceId: process.env.GATSBY_CONTENTFULL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/fonts/*": [`cache-control: public, max-age=31536000, immutable`],
          "/*.svg": [`cache-control: public, max-age=31536000, immutable`],
          "/*.png": [`cache-control: public, max-age=31536000, immutable`],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-vanilla-extract`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/progetti/javascript/2`,
          `/progetti/javascript/3`,
          `/progetti/javascript/4`,
          `/progetti/javascript/5`,
          `/progetti/javascript/6`,
          `/progetti/javascript/7`,
          `/progetti/javascript/8`,
          `/progetti/react/2`,
          `/progetti/react/3`,
          `/progetti/react/4`,
          `/progetti/react/5`,
          `/progetti/react/6`,
          `/progetti/react/7`,
          `/progetti/react/8`,
          `/progetti/videomaker/2`,
          `/progetti/videomaker/3`,
          `/progetti/videomaker/4`,
          `/progetti/videomaker/5`,
          `/progetti/videomaker/6`,
          `/progetti/videomaker/7`,
          `/progetti/videomaker/8`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GTM_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hpv 4 Learning`,
        short_name: `H4L`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#7026BA`,
        theme_color: `#ffffff`,
        icon: `./src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `consulenze-images`,
        path: `./src/feature/consulenze/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/consulenze/*`] },
    },
  ],
}

export default config
