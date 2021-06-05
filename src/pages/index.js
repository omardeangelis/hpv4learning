import * as React from "react";
//Global Layoaut
import Layout from "../components/ui/navigation/layout";
import IndexInfo from "../components/IndexInfo";
import TopHeroContent from "../components/TopHeroContent";
//Meta Title e SEO e Utils
import MetaDecorator from "../components/SEO/MetaDecorator";
//Components
import Hero from "../components/ui/Hero";
import BgImageSection from "../components/ui/BgImageSection";
import ContactSection from "../components/ContactSection";
import CuorseSection from "../components/CuorseSection";
import CustomButton from "../components/ui/Button";
//Gastby
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
//Material UI
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(8),
    },
  },
  title: {
    fontWeight: 800,
    lineHeight: 1,
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      textTransform: "none",
      lineHeight: 1.2,
      fontWeight: 600,
    },
    "& > strong": {
      color: theme.palette.primary.main,
      fontWeight: 800,
      [theme.breakpoints.down("md")]: {
        fontWeight: 600,
      },
    },
  },
  bottomDescription: {
    maxWidth: "70ch",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(5),

    "& strong": {
      color: theme.palette.primary.main,
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },

  bgGatsbyImage: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const coursesPositionRef = React.useRef(null);
  const { mediaQuery } = useGlobalContext();
  const goToCourseSection = () => {
    coursesPositionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <MetaDecorator type={"website"} title='Home'></MetaDecorator>
      <Box component='main' className={classes.root}>
        <Container maxWidth='lg'>
          {/* Top Hero Image ** Manca Immagine di Background */}
          <Hero image={data.imageSharp}>
            <TopHeroContent fn={goToCourseSection} />
          </Hero>
        </Container>
        {/* Sezione con le card  */}
        <IndexInfo img={data.bgVector} />
        {/* //Contattaci per realizzare il tuo videocorso */}
        <BgImageSection>
          <ContactSection
            titolo='VUOI REGISTRARE'
            strongTitle='UN VIDEOCORSO'
            isInput={false}
          />
        </BgImageSection>
        {/* Sezione dei nostri corsi */}
        <Container maxWidth='lg'>
          <Box component='section'>
            <Typography
              variant={mediaQuery.md ? "h5" : "h4"}
              className={classes.title}
            >
              Migliora le tue competenze con {!mediaQuery.md && <br />}
              <strong>i nostri corsi</strong>
            </Typography>
            {/* Sezione dei corsi */}
            <CuorseSection reference={coursesPositionRef} />
          </Box>
        </Container>
        <Box component='section'>
          <Container maxWidth='lg'>
            <Typography
              className={classes.title}
              variant={mediaQuery.sm ? "h5" : "h4"}
              component='h3'
              align={mediaQuery.sm ? "left" : "center"}
            >
              Più di 10 anni di esperienza al fianco di{" "}
              {!mediaQuery.md && <br></br>}
              <strong> Grandi marchi ed imprese </strong>
            </Typography>
            <Typography
              className={classes.bottomDescription}
              color='textSecondary'
              component='p'
              align={mediaQuery.sm ? "left" : "center"}
            >
              Non siamo solo una piattaforma di videocorsi ma prima di tutto un'
              <strong> azienda </strong>che opera nel settore della
              comunicazione da più di 10 anni con una grande rete di partner ed
              aziende che si affidano a noi.
            </Typography>
            <Box className={classes.btnContainer}>
              <CustomButton router link='/about/' type='outlined' />
            </Box>
            <Box className={classes.bgGatsbyImage}>
              <GatsbyImage
                image={getImage(data.bgGatsby)}
                alt='hpv e partner ufficiali'
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "home-hero.png" } }) {
      gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
    }
    bgVector: imageSharp(fluid: { originalName: { eq: "VectorBG.png" } }) {
      gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
    }
    bgGatsby: imageSharp(fluid: { originalName: { eq: "bg-gatsby.png" } }) {
      gatsbyImageData(
        width: 600
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`;

export default IndexPage;
