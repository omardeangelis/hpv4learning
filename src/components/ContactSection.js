import React, { useState, useEffect } from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
//GlobalContext
import { useGlobalContext } from "../context";
//Axios
import axios from "axios";

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

const ContactSection = ({
  titolo,
  strongTitle,
  isInput = true,
  couponCorso,
  couponLink,
}) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ isError: false, msg: "" });
  const { mediaQuery } = useGlobalContext();

  const closeErrorAlert = () => {
    setError({ isError: false, msg: "" });
  };

  const closeSuccessAlert = () => {
    setSuccess(false);
  };

  useEffect(() => {
    if (success || error.isError) {
      const timer = setTimeout(() => {
        if (success) {
          setSuccess(false);
        }
        if (error.isError) {
          setError({ isError: false, msg: "" });
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, error.isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      setIsLoading(true);
      try {
        await axios.post(
          "/api/send-coupon",
          {
            email: input,
            couponCorso,
            couponLink,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setIsLoading(false);
        setSuccess(true);
        setInput("");
        typeof window !== "undefined" &&
          window.gtag("event", "click", {
            promotion_name: "coupon_13",
            currency: "EUR",
            value: 12.99,
          });
      } catch (error) {
        setIsLoading(false);
        setError({ isError: true, msg: "Impossibile inviare mail" });
        console.log(error);
      }
    } else {
      setError({ isError: true, msg: "Devi inserire almeno una mail" });
    }
  };
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
          {strongTitle || "Corsi a 12,99 €"}
        </Typography>{" "}
        ?
      </Typography>
      {isInput ? (
        <>
          <Typography color='textSecondary' className={classes.bodyText}>
            E' sempre un buon momento per risparmiare! Inserisci la tua mail per
            ricevere un coupon per acquistare tutti i{" "}
            <strong> nostri corsi a 12,99 €. </strong>
            Non utilizzeremo la tua mail a scopi pubblicitari o per tartassarti.
          </Typography>
          {isLoading ? (
            <CircularProgress color='secondary' />
          ) : success || error.isError ? (
            <Alert
              severity={success ? "success" : "error"}
              variant='filled'
              onClose={success ? closeSuccessAlert : closeErrorAlert}
            >
              <AlertTitle>
                {" "}
                {success ? "Email inviata con successo " : "Erorre Invio Mail"}
              </AlertTitle>
              {success ? (
                <p>
                  Controlla anche tra <strong> la posta indesiderta </strong>
                </p>
              ) : (
                <p>{error.msg}</p>
              )}
            </Alert>
          ) : (
            <Grid
              component='form'
              container
              spacing={0}
              onSubmit={handleSubmit}
            >
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
                  onChange={(e) => setInput(e.target.value)}
                  className={classes.inputMail}
                ></TextField>
              </Grid>
              <Grid item xs={3}>
                <Button type='submit' className={classes.formBtn}>
                  <Typography
                    variant='button'
                    className={classes.title}
                    style={{ color: "initial" }}
                  >
                    Richiedi{" "}
                    <Typography
                      component='span'
                      variant='button'
                      color='primary'
                    >
                      {" "}
                      Sconto{" "}
                    </Typography>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          )}
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
            href='mailto:hpv4learning@hpvfilm.it'
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
