import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.main,
  },
  navbar: {
    background: grey[900],
  },
  // menuButton: {
  //   display: "none",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "block",
  //     backgroundColor: theme.palette.secondary.main,
  //     marginRight: theme.spacing(2),
  //   },
  // },
  title: {
    flexGrow: 1,
    width: "fit-content",
    fontWeight: "600",
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  link: {
    color: theme.palette.secondary.light,
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              HPV 4 LEARNING
            </Typography>
            <Link
              component={Button}
              className={classes.link}
              href="https://www.hpvfilm.it/"
              target="_blank"
            >
              hpvfilm.it
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
