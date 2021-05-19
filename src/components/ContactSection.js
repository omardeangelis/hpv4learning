import React from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
    "&:hover": {
      background: theme.palette.optional.main,
      "&:hover > span > span": {
        color: "white !important",
      },
      "&:hover > span > span > span": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

const ContactSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Richiedi Coupon{" "}
        <Typography
          component="span"
          variant="h3"
          color="secondary"
          className={classes.span}
        >
          {" "}
          Corsi a 9,99 €
        </Typography>{" "}
        ?
      </Typography>
      <Typography color="textSecondary" className={classes.bodyText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, est
        recusandae quia praesentium vero ut nesciunt, iste temporibus eligendi,
        tempora dolor laudantium. Aliquid adipisci in eligendi corrupti quas ut
        totam.
      </Typography>
      <Grid component="form" container spacing={0}>
        <Grid item xs={9} className={classes.formItem}>
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            aria-label="email"
            placeholder="Inserisci la tua mail"
            variant="outlined"
            autoComplete="email"
            className={classes.inputMail}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Button className={classes.formBtn}>
            <Typography
              variant="button"
              className={classes.title}
              style={{ color: "initial" }}
            >
              Richiedi{" "}
              <Typography component="span" variant="button" color="primary">
                {" "}
                Sconto{" "}
              </Typography>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
