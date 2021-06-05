import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
//Icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CodeIcon from "@material-ui/icons/Code";
import VideoCallIcon from "@material-ui/icons/VideoCall";
//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//Global Context
import { useGlobalContext } from "../../../context";

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
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <SwipeableDrawer
      anchor='left'
      open={isSidebarOpen}
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
            <IconButton onClick={toggleSidebar}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <List>
        <ListItem component={GatsbyLink} to='/' onClick={toggleSidebar}>
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
                    onClick={toggleSidebar}
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

        <ListItem component={GatsbyLink} to='/about/' onClick={toggleSidebar}>
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
