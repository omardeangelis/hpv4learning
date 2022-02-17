import React, { useState } from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background: white;
  z-index: 99999999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  [role="_link"] {
    border: 1px solid transparent;
    transition: all 125ms ease;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 100px;
    &:hover {
      background: rgba(98, 0, 238, 0.025);
      border: 1px solid rgba(98, 0, 238, 0.05);
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <>
      <StyledNav>
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems='center' spcing={4} height='72px'>
            <Box>
              <StaticImage
                src='../../../images/logo.png'
                alt='Logo Hpv 4 Learning'
                placeholder='tracedSVG'
                layout='fixed'
                height={70}
                width={70}
              />
            </Box>
            <Stack
              sx={{
                flex: 1,
              }}
              direction='row'
              justifyContent='space-around'
              align='center'
              spacing={2}
            >
              <GastbyLink to='/'>
                <Box role='_link'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "unset",
                        fontWeight: 500,
                      }}
                      variant='button'
                      color='primary'
                    >
                      Home
                    </Typography>
                    <HomeIcon color='primary' />
                  </Stack>
                </Box>
              </GastbyLink>

              <GastbyLink to='/'>
                <Box role='_link'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "unset",
                        fontWeight: 500,
                      }}
                      variant='button'
                      color='primary'
                    >
                      Corsi
                    </Typography>
                    <ArrowDropDownIcon />
                  </Stack>
                </Box>
              </GastbyLink>
              <GastbyLink to='/'>
                <Box role='_link'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "unset",
                        fontWeight: 500,
                      }}
                      variant='button'
                      color='primary'
                    >
                      Chi siamo
                    </Typography>
                    <AssignmentIndIcon color='primary' />
                  </Stack>
                </Box>
              </GastbyLink>
            </Stack>
          </Stack>
        </Container>
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
                  <Typography variant='button'>{node.categoria}</Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </StyledNav>
      <Box height='72px' width='100px'></Box>
    </>
    /* <AppBar
        position='static'
        sx={{
          background: "white",
        }}
        elevation={0}
      >
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
      </AppBar>*/
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
