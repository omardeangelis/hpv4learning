import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Project from "./Project";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  title: {
    fontWeight: 600,
    textTransform: "lowercase",
    fontVariant: "small-caps",
    lineHeight: 0.9,
  },
  h4: {
    marginLeft: "-2.5px",
    paddingLeft: "0px",
  },
  subtitle: {
    marginTop: theme.spacing(2),
    maxWidth: "75ch",
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
        variant="h4"
        classes={{
          h4: classes.h4,
        }}
        className={classes.title}
      >
        Metti alla prova le tue{" "}
        <Typography
          component="span"
          variant="h4"
          color="primary"
          className={classes.title}
        >
          nuove compentenze
        </Typography>
      </Typography>
      <Typography color="textSecondary" className={classes.subtitle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        dolor possimus maiores ex at eum dolores facilis neque sequi, explicabo
        sunt ipsum natus mollitia voluptas non laudantium, deleniti porro
        repellendus cumque id laboriosam doloribus eos sapiente! Totam commodi
        minus hic.
      </Typography>
      <Grid container spacing={3} justify="center" className={classes.projects}>
        {nodes.map((progetto, index) => (
          <Grid item xs={12} sm={6} md={4} key={progetto.id}>
            <Project data={progetto} order={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
