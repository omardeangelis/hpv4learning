import React from "react";
//Global e Seo
import Layout from "../components/ui/navigation/layout";
import MetaDecorator from "../components/SEO/MetaDecorator";
//Utils
import { createBrandText } from "../utils/helpers";
//Custom Components
//Material UI
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
//Icon
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
//Gatsby
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
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
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.4,
    },
  },
  topHeroDescription: {
    maxWidth: "75ch",
    lineHeight: 1.8,
    "& strong": {
      color: theme.palette.primary.main,
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
      color: theme.palette.primary.main,
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
      color: theme.palette.primary.main,
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
      <Box component='main' className={classes.root}>
        <Container maxWidth='lg'>
          <Box component='section' className={classes.pageSpacer}>
            <Box component='div' className={classes.heroTextBox}>
              <Typography
                variant={mediaQuery.md ? "h4" : "h2"}
                component='h2'
                color='primary'
                className={classes.topHeroTitle}
              >
                Chi Siamo
              </Typography>
              <Typography
                variant={mediaQuery.md ? "body1" : "h6"}
                component='h6'
                className={classes.topHeroSubtitle}
              >
                La nostra missione è facilitare la diffusione di competenze
                digitali alla base {!mediaQuery.md && <br />}
                <strong>del mercato del futuro.</strong>
              </Typography>
              <Typography
                variant={mediaQuery.md ? "body2" : "body1"}
                color='textSecondary'
                className={classes.topHeroDescription}
              >
                Il Mercato del lavoro si sta rivoluzionando e con lui anche
                quello educativo e formativo. Il divario tra le{" "}
                <strong>competenze necessarie</strong> per il futuro e la
                domanda del mercato fatica ad essere coperto dalle istituzioni e
                dai percorsi formativi universitari.
                <br />
                <br />
                Molte volte nell'intervallo di tempo che intercorre tra l'inizio
                e la fine di un percorso di studio, esso viene rivoluzionato
                prima che noi possiamo accorgercene. Il nostro{" "}
                <strong>compito ed impegno</strong> è quello di individuare e
                selezionare professionisti desiderosi di insegnare il proprio
                mestiere, fornendogli tutti gli strumenti ed il supporto
                necessario per produrre corsi e percorsi formativi di qualità e
                sempre al passo con i tempi.
                <br />
                <br />
                Il Nostro percorso è solo all'inizio e al ci vede impeganti
                sulle competenze digital ma con un occhio di riguardo anche al
                mondo dell'artigianato.
              </Typography>
            </Box>
            <Box className={classes.teamSection} component='section'>
              <Typography variant={mediaQuery.md ? "h6" : "h4"} color='primary'>
                I Nostri Insegnanti
              </Typography>
              {insegnanti.map((insegnante) => {
                return (
                  <Card
                    key={insegnante.nome}
                    className={classes.card}
                    elevation={0}
                  >
                    <CardHeader
                      avatar={
                        <Avatar className={classes.avatar}>
                          <GatsbyImage
                            image={getImage(insegnante.img)}
                            alt={`${insegnante.nome} ${insegnante.cognome}`}
                            imgStyle={{
                              top: "13px",
                            }}
                          />
                        </Avatar>
                      }
                      title={`${insegnante.nome} ${insegnante.cognome}`}
                      subheader={insegnante.professione}
                    ></CardHeader>
                    <CardContent>
                      <Grid container spacing={6}>
                        <Grid item xs={12} lg={8}>
                          <Typography
                            className={classes.description}
                            variant={mediaQuery.md ? "body2" : "body1"}
                            color='textSecondary'
                            dangerouslySetInnerHTML={{
                              __html: insegnante.bio.childMarkdownRemark.html,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Typography variant='h6' color='primary'>
                            Insegna{" "}
                          </Typography>

                          <List>
                            {insegnante.corsi.map((corso) => {
                              return (
                                <ListItem key={corso.titolo}>
                                  <ListItemIcon>
                                    {corso.categoria === "videomaking" ? (
                                      <VideoCallIcon
                                        fontSize='small'
                                        color='primary'
                                      />
                                    ) : (
                                      <CodeIcon
                                        fontSize='small'
                                        color='primary'
                                      />
                                    )}
                                  </ListItemIcon>
                                  <GatsbyLink
                                    className={classes.courseLink}
                                    component={ListItemText}
                                    to={`/${corso.slug}/`}
                                    dangerouslySetInnerHTML={{
                                      __html: createBrandText(corso.titolo),
                                    }}
                                  ></GatsbyLink>
                                </ListItem>
                              );
                            })}
                          </List>
                        </Grid>
                      </Grid>
                      {mediaQuery.md && <Divider />}
                    </CardContent>
                  </Card>
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
        bio {
          childMarkdownRemark {
            html
          }
        }
        nome
        cognome
        professione
        img {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
        corsi {
          titolo
          categoria
          slug
        }
      }
    }
  }
`;

export default AboutPage;
