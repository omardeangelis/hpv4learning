import React, { useState } from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemIcon from "@mui/material/ListItemIcon";

//Context
import { useGlobalContext } from "../../../context";
//Icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
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
                  color='inherit'
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
                  color='inherit'
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
                  color='inherit'
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
