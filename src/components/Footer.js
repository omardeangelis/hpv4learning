import React from "react";
import { SocialBar } from "../utils/link";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    background: grey[900],
    minHeight: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" className={classes.socialSection}>
        <SocialBar />
      </Container>
    </footer>
  );
};

export default Footer;
