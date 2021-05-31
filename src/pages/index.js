import * as React from "react";
//Global Layoaut
import Layout from "../components/layout";
//Meta Title e SEO e Utils
import { indexInfo } from "../page_info/indexInfo";
import MetaDecorator from "../components/utils/MetaDecorator";
import valueInfo from "../utils/indexInfo";
//Components
import Hero from "../components/Hero";
import BgImageSection from "../components/BgImageSection";
import ContactSection from "../components/ContactSection";
import CuorseSection from "../components/CuorseSection";
import CustomButton from "../components/Button";
//Gastby
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
//Material UI
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon/Icon";
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
  topHeroRoot: {
    display: "grid",
    gap: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
      gap: theme.spacing(3),
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
  topHeroDescription: {
    lineHeight: 1.7,
    maxWidth: "55ch",
    "& > strong": {
      color: theme.palette.primary.main,
    },
  },
  topHeroBtn: {
    width: "fit-content",
    height: "6vh",
    fontWeight: 600,
  },
  infoSection: {
    width: "100%",
    display: "grid",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingTop: "0px",
      gap: theme.spacing(3),
    },
  },
  cardSection: {
    display: "grid",
    gap: theme.spacing(2),
  },
  icon: {
    "& svg": {
      fontSize: "2rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "unset",
      },
    },
  },
  cardText: {
    maxWidth: "55ch",
    lineHeight: 1.8,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
}));

//Sezione Informativa
const IndexInfo = ({ img }) => {
  const classes = useStyles();
  const { mediaQuery } = useGlobalContext();

  return (
    <BgImageSection img={img} noPadding>
      <Box className={classes.infoSection} component='div'>
        <Typography
          variant={mediaQuery.md ? "h5" : "h4"}
          component='h4'
          className={classes.title}
        >
          A chi si rivolge <strong> Hpv 4 Learning</strong>
        </Typography>
        <Box component='section' className={classes.cardSection}>
          <Grid
            container
            alignItems='center'
            justify='center'
            spacing={mediaQuery.md ? 4 : 2}
          >
            {valueInfo.map((el, index) => {
              const { titolo, text, icon } = el;
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card component='article' elevation={false}>
                    <CardContent
                      style={{
                        padding: mediaQuery.md ? "0px" : "auto",
                      }}
                    >
                      <Icon
                        color='primary'
                        fontSize={mediaQuery.md ? "medium" : "large"}
                        className={classes.icon}
                      >
                        {icon}
                      </Icon>
                      <Typography
                        component='h5'
                        variant={mediaQuery.md ? "h6" : "h5"}
                      >
                        {titolo}
                      </Typography>
                      <Typography
                        color='textSecondary'
                        variant='body1'
                        className={classes.cardText}
                      >
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </BgImageSection>
  );
};

//Hero Text and Image Component
const TopHeroContent = ({ fn }) => {
  const classes = useStyles();
  const { mediaQuery } = useGlobalContext();

  return (
    <Box className={classes.topHeroRoot}>
      <Typography
        variant={mediaQuery.sm ? "h4" : "h2"}
        component='h2'
        className={classes.title}
      >
        <strong>PROFESSIONISTI</strong>
        <br />
        NON
        <br />
        PROFESSORI
      </Typography>
      <Typography
        variant='h6'
        color='textPrimary'
        className={classes.topHeroDescription}
      >
        Hpv 4 Learning è una piattaforma che seleziona i migliori corsi tenuti
        direttamente da <strong>esperti e professionisti</strong> del settore,
        per rilanciare la tua carriera digitale.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        size='large'
        className={classes.topHeroBtn}
        onClick={fn}
      >
        Vai ai Corsi
      </Button>
    </Box>
  );
};

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
      <MetaDecorator
        title={indexInfo.title}
        description={indexInfo.description}
      ></MetaDecorator>
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
            <Box className={classes.btnContainer}>
              <CustomButton router link='/about/' type='outlined' />
            </Box>
            <Box>
              <GatsbyImage image={getImage(data.bgGatsby)} />
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
      gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
    }
  }
`;

export default IndexPage;
