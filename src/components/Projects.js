import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Project from "./Project";
import { Tween } from "react-gsap";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  title: {
    fontWeight: 600,
    textTransform: "lowercase",
    fontVariant: "small-caps",
    color: red[400],
  },
  projects: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Projects = ({ sectionTitle, data }) => {
  const classes = useStyles();
  const { nodes } = data.allContentfulProgetti;
  return (
    <section className={classes.root}>
      <Typography
        align="center"
        variant="h3"
        color="inherit"
        className={classes.title}
      >
        {sectionTitle}
      </Typography>
      <Grid container spacing={3} justify="center" className={classes.projects}>
        <Tween from={{ y: "200px", opacity: 0 }} stagger={0.1} ease="ease">
          {nodes.map((progetto) => (
            <Grid item xs={12} sm={6} md={4} key={progetto.id}>
              <Project data={progetto} />
            </Grid>
          ))}
        </Tween>
      </Grid>
    </section>
  );
};

export default Projects;
