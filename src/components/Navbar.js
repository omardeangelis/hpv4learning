import React, { useState } from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

//Icon
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//gatsby
import { Link as GastbyLink, useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: "transparent",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      backgroundColor: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    width: "fit-content",
    fontWeight: "600",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  navItems: {
    paddingTop: "1rem",
    flexGrow: 1,
    height: "fit-content",
  },

  navLink: {
    fontWeight: 600,
    textAlign: "center",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const data = useStaticQuery(query);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <Container component={Toolbar} maxWidth="lg">
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={8}
            className={classes.navItems}
          >
            <Grid item md={3}>
              <Typography variant="h5" className={classes.title}>
                H4L
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Button
                className={classes.navLink}
                color="default"
                variant="text"
                component={GastbyLink}
                to="/"
              >
                {" "}
                Home{" "}
              </Button>
            </Grid>
            <Grid item md={3}>
              <Button
                className={classes.navLink}
                color="default"
                variant="text"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
              >
                Corsi
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {data.allContentfulCorsi.nodes.map((node) => {
                  return (
                    <MenuItem
                      key={node.slug}
                      onClick={handleClose}
                      component={GastbyLink}
                      to={`/${node.slug}/`}
                    >
                      {node.categoria}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Grid>
            <Grid item md={3}>
              <Button
                className={classes.navLink}
                color="default"
                variant="text"
                component={GastbyLink}
                to="/chisiamo"
              >
                {" "}
                Chi Siamo
              </Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

const query = graphql`
  {
    allContentfulCorsi {
      nodes {
        slug
        categoria
      }
    }
  }
`;

export default Navbar;
