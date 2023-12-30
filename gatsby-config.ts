import { config as dotenv } from "dotenv"
import { GatsbyConfig } from "gatsby"
import netlifyAdapter from "gatsby-adapter-netlify"

dotenv({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env.NODE_ENV)

const config: GatsbyConfig = {
  adapter: netlifyAdapter({
    excludeDatastoreFromEngineFunction: true,
  }),
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
          `/academy/progetti/javascript/2`,
          `/academy/progetti/javascript/3`,
          `/academy/progetti/javascript/4`,
          `/academy/progetti/javascript/5`,
          `/academy/progetti/javascript/6`,
          `/academy/progetti/javascript/7`,
          `/academy/progetti/javascript/8`,
          `/academy/progetti/react/2`,
          `/academy/progetti/react/3`,
          `/academy/progetti/react/4`,
          `/academy/progetti/react/5`,
          `/academy/progetti/react/6`,
          `/academy/progetti/react/7`,
          `/academy/progetti/react/8`,
          `/academy/progetti/videomaker/2`,
          `/academy/progetti/videomaker/3`,
          `/academy/progetti/videomaker/4`,
          `/academy/progetti/videomaker/5`,
          `/academy/progetti/videomaker/6`,
          `/academy/progetti/videomaker/7`,
          `/academy/progetti/videomaker/8`,
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
      options: { prefixes: [`/formazione/*`] },
    },
  ],
}

export default config
