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
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//Context
import { useGlobalContext } from "../../../context";
//Icon
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CodeIcon from "@material-ui/icons/Code";
import VideoCallIcon from "@material-ui/icons/VideoCall";
//gatsby
import { Link as GastbyLink, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
  toggleBtn: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linksContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const data = useStaticQuery(query);
  const { mediaQuery, toggleSidebar } = useGlobalContext();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar} elevation={0}>
        <Container component={Toolbar} maxWidth='lg'>
          <Grid
            container
            justify='space-between'
            alignItems='center'
            className={classes.navItems}
          >
            <Grid item md={mediaQuery.sm ? 6 : 2}>
              <GastbyLink to='/'>
                <StaticImage
                  src='../../../images/logo.png'
                  alt='Logo Hpv 4 Learning'
                  placeholder='tracedSVG'
                  layout='fixed'
                  height={70}
                  width={70}
                />
              </GastbyLink>
            </Grid>
            <Grid item xs={6} className={classes.toggleBtn}>
              <IconButton onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              container
              md={10}
              spacing={4}
              className={classes.linksContainer}
            >
              <Grid item sm={4}>
                <Button
                  className={classes.navLink}
                  color='default'
                  size='large'
                  variant='text'
                  startIcon={<HomeIcon color='primary' />}
                  component={GastbyLink}
                  to='/'
                >
                  {" "}
                  Home{" "}
                </Button>
              </Grid>
              <Grid item sm={4}>
                <Button
                  className={classes.navLink}
                  color='default'
                  variant='text'
                  startIcon={<SchoolIcon color='primary' />}
                  size='large'
                  aria-controls='fade-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Corsi
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuList>
                    {data.allContentfulCorsi.nodes.map((node) => {
                      return (
                        <MenuItem
                          key={node.slug}
                          onClick={handleClose}
                          component={GastbyLink}
                          to={`/${node.slug}/`}
                        >
                          <ListItemIcon>
                            {node.categoria === "videomaking" ? (
                              <VideoCallIcon fontSize='small' color='primary' />
                            ) : (
                              <CodeIcon fontSize='small' color='primary' />
                            )}{" "}
                          </ListItemIcon>
                          <Typography variant='button'>
                            {node.categoria}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              </Grid>
              <Grid item sm={4}>
                <Button
                  className={classes.navLink}
                  color='default'
                  size='large'
                  startIcon={<AssignmentIndIcon color='primary' />}
                  variant='text'
                  component={GastbyLink}
                  to='/about/'
                >
                  {" "}
                  Chi Siamo
                </Button>
              </Grid>
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