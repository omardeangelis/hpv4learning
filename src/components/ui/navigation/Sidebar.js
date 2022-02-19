import React from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//Global Context
import { useLayoutContext } from "../../../context/layout";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  title: {
    fontWeight: "600",
    color: theme.palette.primary.main,
  },
  navItems: {
    paddingTop: "1rem",
    height: "fit-content",
  },
  toggleBtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  accordion: {
    width: "100%",
    display: "block",
    "&::before": {
      height: "0px",
      color: "transparent",
    },
  },
  accordionSummary: {
    padding: "0px",
    borderTop: "0px transparent",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const ctx = useLayoutContext();
  return (
    <SwipeableDrawer
      anchor='left'
      open={ctx?.isSidebarOpen}
      onClose={() => null}
      onOpen={() => null}
      className={classes.root}
      classes={{
        paper: classes.paper,
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justify='space-around'
          alignItems='center'
          className={classes.navItems}
        >
          <Grid item xs={6}>
            <StaticImage
              src='../../../images/logo.png'
              alt='Logo Hpv 4 Learning'
              placeholder='tracedSVG'
              layout='fixed'
              height={70}
              width={70}
            />
          </Grid>
          <Grid item xs={6} className={classes.toggleBtn}>
            <IconButton onClick={ctx?.toggleSidebar}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <List>
        <ListItem component={GatsbyLink} to='/' onClick={ctx?.toggleSidebar}>
          <ListItemIcon>
            <HomeIcon color='primary' />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>

        <ListItem
          component={Accordion}
          className={classes.accordion}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={classes.accordionSummary}
          >
            <ListItemIcon>
              <SchoolIcon color='primary' />
            </ListItemIcon>
            <ListItemText>I Corsi</ListItemText>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {data.allContentfulCorsi.nodes.map((link) => {
                return (
                  <ListItem
                    key={link.slug}
                    component={GatsbyLink}
                    to={`/${link.slug}/`}
                    onClick={ctx?.toggleSidebar}
                  >
                    <ListItemIcon>
                      {link.categoria === "videomaking" ? (
                        <VideoCallIcon fontSize='small' color='primary' />
                      ) : (
                        <CodeIcon fontSize='small' color='primary' />
                      )}{" "}
                    </ListItemIcon>
                    <ListItemText>{link.categoria}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </AccordionDetails>
        </ListItem>

        <ListItem
          component={GatsbyLink}
          to='/about/'
          onClick={ctx?.toggleSidebar}
        >
          <ListItemIcon>
            <AssignmentIndIcon color='primary' />
          </ListItemIcon>
          <ListItemText>Chi siamo</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
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

export default Sidebar;
