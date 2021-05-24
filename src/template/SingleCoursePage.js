import React from "react";
import { graphql } from "gatsby";
//Global Component e Variables
import Layout from "../components/layout";
import MetaDecorator from "../components/utils/MetaDecorator";
//Components
import Projects from "../components/Projects";
import BgImageSection from "../components/BgImageSection";
import ContactSection from "../components/ContactSection";
import Video from "../components/Video";
import CustomButton from "../components/Button";
import CourseInfo from "../components/CourseInfo";
import ListSection from "../components/ListSection";
//Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
//Icons
import DoneIcon from "@material-ui/icons/Done";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PersonIcon from "@material-ui/icons/Person";
//Material Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  courseInfoContainer: {
    display: "grid",
    gap: theme.spacing(5),
  },
  headings: {
    display: "grid",
    gap: theme.spacing(2),
  },
  title: {
    fontWeight: 800,
    lineHeight: 1.05,
    maxWidth: "80%",
    textTransform: "uppercase",
    "& strong": {
      color: theme.palette.primary.main,
      fontWeight: 800,
    },
  },
  video: {
    display: "grid",
    gap: theme.spacing(2),
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  descrizione: {
    marginTop: theme.spacing(2),
    lineHeight: 1.7,
  },
}));

const SingleCoursePage = ({ data }) => {
  const { contentfulCorsi: corso } = data;
  const classes = useStyles();

  const createBoldText = (text) => {
    return text.replace("**", "<strong>").replace("**", "</strong>");
  };
  return (
    <Layout>
      <MetaDecorator title={corso.titolo}></MetaDecorator>
      <Box className={classes.root}>
        <Container maxWidth='lg' className={classes.courseInfoContainer}>
          {/* Titolo e Sottotiolo */}
          <Box component='div' className={classes.headings}>
            <Typography
              variant='h3'
              className={classes.title}
              dangerouslySetInnerHTML={{
                __html: createBoldText(corso.titolo),
              }}
            ></Typography>
            <Typography variant='h5'>{corso.sottotitolo}</Typography>
            {/* Etichette con informazioni sul Corso */}
            <CourseInfo
              livello={corso.livello}
              oreDiLezione={corso.oreDiLezione}
              lezioni={corso.lezioni}
            />
          </Box>
          {/* Container del video di anteprima */}
          <Box component='section' className={classes.video}>
            <Video videoSrcURL={corso.trailer}></Video>
          </Box>
          {/* Bottone Centrato per andare su Udemy */}
          <Box className={classes.btnContainer}>
            <CustomButton
              link={corso.udemyUrl}
              type={"contained"}
              size='large'
            ></CustomButton>
          </Box>
          <Divider />
          {/* Descrizione del corso */}
          <Box>
            <Typography variant='h3' color='primary' className={classes.title}>
              DESCRIZIONE
            </Typography>
            <Typography
              color='textSecondary'
              variant='body1'
              className={classes.descrizione}
              dangerouslySetInnerHTML={{
                __html: corso.descrizione.childMarkdownRemark.html,
              }}
            ></Typography>
          </Box>
          {/* Liste di Requisiti e Concetti del corso */}
          <Box component='section'>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <ListSection
                  title='Che Cosa'
                  titleUnderline='Imparerai'
                  icon={<DoneIcon color='primary' />}
                  list={corso.concetti}
                  className={classes.title}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <ListSection
                  title='A chi si'
                  titleUnderline='rivolge'
                  icon={<PersonIcon color='primary' />}
                  list={corso.target}
                  className={classes.title}
                />
              </Grid>
            </Grid>
          </Box>
          <Box component='section'>
            <ListSection
              title='Requisiti'
              titleUnderline='Minimi'
              icon={<ArrowRightIcon color='primary' />}
              list={corso.requisiti}
              className={classes.title}
            />
          </Box>
          <Box className={classes.btnContainer}>
            <CustomButton
              link={corso.udemyUrl}
              type={"contained"}
              size='large'
            ></CustomButton>
          </Box>
        </Container>
        {/* Banner per richiedere acquisto Coupon per i corsi a 9,99€ */}
        <BgImageSection>
          <ContactSection></ContactSection>
        </BgImageSection>
        {/* Progetti ed esercizatazioni  */}
        {corso.progetti && (
          <Container maxWidth='lg'>
            <Projects data={corso.progetti}></Projects>
            <Box className={classes.btnContainer}>
              <CustomButton
                link={corso.udemyUrl}
                type={"contained"}
                size='large'
              ></CustomButton>
            </Box>
          </Container>
        )}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query SingleCoursePage($slug: String) {
    contentfulCorsi(slug: { eq: $slug }) {
      categoria
      idCorso
      lezioni
      livello
      slug
      oreDiLezione
      prezzo
      sottotitolo
      titolo
      trailer
      udemyUrl
      videoLink
      target
      concetti
      requisiti
      riassunto {
        childMarkdownRemark {
          html
        }
      }
      descrizione {
        childMarkdownRemark {
          html
        }
      }
      copertina {
        gatsbyImageData
      }
      progetti {
        titolo
        url
        ordine
        copertina {
          gatsbyImageData
        }
      }
    }
  }
`;

export default SingleCoursePage;
