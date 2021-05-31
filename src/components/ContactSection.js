import React from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useGlobalContext } from "../context";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gap: theme.spacing(5),
  },
  title: {
    fontWeight: 600,
    color: "white",
    textTransform: "uppercase",
    "& span": {
      textTransform: "inherit",
      fontWeight: "inherit",
    },
  },
  bodyText: {
    maxWidth: "70ch",
    color: "#f0f0f0",
    lineHeight: 2,
    "& > strong": {
      color: theme.palette.secondary.main,
    },
  },
  inputMail: {
    background: "white",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  formItem: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "0px",
    },
  },
  formBtn: {
    height: "100%",
    border: "transparent",
    background: theme.palette.tertiary.main,
    padding: "0rem 2rem",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    transition: "var(--transition)",

    "&:hover": {
      background: theme.palette.optional.main,
      "&:hover > span > span": {
        color: "white !important",
      },
      "& > span > span > span": {
        color: theme.palette.secondary.main,
      },
    },
  },
  simpleBtn: {
    background: theme.palette.tertiary.main,
    width: "fit-content",
    padding: "0rem 2rem",
    height: "6vh",
    fontSize: "1.3em",
    textDecoration: "none",
    transition: "var(--transition)",
    "& > span > span > span": {
      fontSize: "1.1em",
    },
    "&:hover": {
      transform: "scale(1.02)",
      background: theme.palette.tertiary.main,
      textDecoration: "none",
      "& > span > span > span": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const ContactSection = ({ titolo, strongTitle, isInput = true }) => {
  const classes = useStyles();
  const { mediaQuery } = useGlobalContext();
  return (
    <Box className={classes.root}>
      <Typography
        variant={mediaQuery.md ? "h5" : "h3"}
        className={classes.title}
      >
        {titolo || "Richiedi Coupon "}
        <Typography
          component='span'
          variant={mediaQuery.md ? "h5" : "h3"}
          color='secondary'
          className={classes.span}
        >
          {" "}
          {strongTitle || "Corsi a 9,99 €"}
        </Typography>{" "}
        ?
      </Typography>
      {isInput ? (
        <>
          <Typography color='textSecondary' className={classes.bodyText}>
            E' sempre un buon momento per risparmiare! Inserisci la tua mail per
            ricevere un coupon per acquistare tutti i{" "}
            <strong> nostri corsi a 9,99 €. </strong>
            Non utilizzeremo la tua mail a scopi pubblicitari o per tartassarti.
          </Typography>
          <Grid component='form' container spacing={0}>
            <Grid item xs={6} md={9} className={classes.formItem}>
              <TextField
                fullWidth
                id='email'
                name='email'
                type='email'
                aria-label='email'
                placeholder='Inserisci la tua mail'
                variant='outlined'
                autoComplete='email'
                className={classes.inputMail}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.formBtn}>
                <Typography
                  variant='button'
                  className={classes.title}
                  style={{ color: "initial" }}
                >
                  Richiedi{" "}
                  <Typography component='span' variant='button' color='primary'>
                    {" "}
                    Sconto{" "}
                  </Typography>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Typography color='textSecondary' className={classes.bodyText}>
            Monetizza le tue competenze ed i tuoi anni di studio ed esperienza
            grazie ad Hpv 4 Learning. Il nostro team è a tua disposizione, per
            <strong> valutare la tua proposta, </strong>
            registrare, montare e mettere online il tuo corso in poche settimane{" "}
          </Typography>
          <Button
            className={classes.simpleBtn}
            component={Link}
            href='mailto:info@hpvfilm.it'
            color='secondary'
          >
            <Typography
              variant='button'
              className={classes.title}
              style={{ color: "initial" }}
            >
              <Typography component='span' variant='button' color='primary'>
                {" "}
                Contattaci{" "}
              </Typography>
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};

export default ContactSection;
