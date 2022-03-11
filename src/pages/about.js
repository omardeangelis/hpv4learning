import React from "react";
//Global e Seo
import Layout from "../components/ui/navigation/layout";
import MetaDecorator from "../components/SEO/MetaDecorator";
//Utils

import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

//Gatsby
import { graphql } from "gatsby";
import { useGlobalContext } from "../context";
import Insegnante from "../components/shared/Insegnante";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: theme.spacing(3),
  },
  pageSpacer: {
    display: "grid",
    gap: theme.spacing(8),
  },
  heroTextBox: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  topHeroTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
  },
  topHeroSubtitle: {
    lineHeight: 1.1,
    "& > strong": {
      color: theme.palette.purple["400"],
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.4,
    },
  },
  topHeroDescription: {
    maxWidth: "75ch",
    lineHeight: 1.8,
    "& strong": {
      color: theme.palette.purple["400"],
    },
  },
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  description: {
    maxWidth: "65ch",
    lineHeight: 1.8,
    color: theme.palette.text.secondary,
    "& strong": {
      color: theme.palette.purple["400"],
    },
    "& a": {
      textDecoration: "underline",
    },
  },
  courseLink: {
    color: theme.palette.optional.main,
    textDecoration: "underline",
    transition: "var(--traniston)",
    "&:hover": {
      color: theme.palette.purple["400"],
    },
  },
}));

const AboutPage = ({ data }) => {
  const insegnanti = data.allContentfulInsegnante.nodes;
  const { mediaQuery } = useGlobalContext();
  const classes = useStyles();
  return (
    <Layout>
      <MetaDecorator
        title='Chi siamo'
        desc={
          "La storia dei Nostri insegnanti e le competenze che insegnano nei loro videocorsi insegnano"
        }
        keywords={[
          "migliori insegnanti",
          "migliori videocorsi",
          "migliori corsi videomaking",
          "migliori corsi di programmazione",
          "videocorso di react",
          "videocorsi competenze digitali",
          "videocorsi in italiano di programmazione",
          "videocorsi in italiano di javascript",
          "videocorso videomaker",
          "react",
          "html",
          "css",
          "javascript",
          "frontend",
        ]}
      />
      <Box
        className={classes.root}
        sx={{
          mt: { xs: "48px", lg: "96px" },
        }}
      >
        <Container maxWidth='lg'>
          <Box component='section' className={classes.pageSpacer}>
            <Box
              component='div'
              className={classes.heroTextBox}
              sx={{
                maxWidth: "712px",
              }}
            >
              <Typography
                component='h1'
                color='purple.400'
                fontWeight={600}
                sx={{
                  fontSize: { xs: "36px", lg: "72px" },
                  lineHeight: { xs: "39px", lg: "64px" },
                }}
              >
                Chi Siamo
              </Typography>
              <Typography
                color='grey.500'
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "19px", lg: "24px" },
                }}
              >
                La nostra missione è facilitare la diffusione di competenze
                digitali alla base {!mediaQuery.md && <br />}
                <strong className='brand-text'>del mercato del futuro.</strong>
              </Typography>
              <Typography
                color='grey.500'
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "19px", lg: "24px" },
                }}
              >
                Il Mercato del lavoro si sta rivoluzionando e con lui anche
                quello educativo e formativo. Il divario tra le{" "}
                <strong className='brand-text'>competenze necessarie</strong>{" "}
                per il futuro e la domanda del mercato fatica ad essere coperto
                dalle istituzioni e dai percorsi formativi universitari.
                <br />
                <br />
                Molte volte nell'intervallo di tempo che intercorre tra l'inizio
                e la fine di un percorso di studio, esso viene rivoluzionato
                prima che noi possiamo accorgercene. Il nostro{" "}
                <strong className='brand-text'>compito ed impegno</strong> è
                quello di individuare e selezionare professionisti desiderosi di
                insegnare il proprio mestiere, fornendogli tutti gli strumenti
                ed il supporto necessario per produrre corsi e percorsi
                formativi di qualità e sempre al passo con i tempi.
                <br />
                <br />
                Il Nostro percorso è solo all'inizio e al ci vede impeganti
                sulle competenze digital ma con un occhio di riguardo anche al
                mondo dell'artigianato.
              </Typography>
            </Box>
            <Box className={classes.teamSection} component='section'>
              <Typography
                color='purple.400'
                fontWeight={500}
                sx={{
                  fontSize: { xs: "24px", lg: "48px" },
                  lineHeight: { xs: "28px", lg: "56px" },
                }}
              >
                Insegnanti
              </Typography>
              {insegnanti.map((insegnante) => {
                return (
                  <Box
                    key={insegnante.nome}
                    sx={{
                      mt: { xs: "24px", lg: "48px" },
                    }}
                  >
                    <Insegnante {...insegnante} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulInsegnante {
      nodes {
        nome
        cognome
        professione
        img {
          gatsbyImageData
        }
        bio {
          bio
          childMarkdownRemark {
            html
          }
        }
        corsi {
          titolo
          slug
          category {
            slug
          }
        }
      }
    }
  }
`;

export default AboutPage;
