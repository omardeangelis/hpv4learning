import React from "react";
import { SocialBar } from "../utils/link";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    background: grey[900],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "4rem",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <SocialBar />
    </footer>
  );
};

export default Footer;
