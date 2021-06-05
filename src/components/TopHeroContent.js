import React from "react";
//Material UI
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Context
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
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
}));

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

export default TopHeroContent;
