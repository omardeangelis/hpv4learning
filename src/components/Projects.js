import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Project from "./Project";
const useStyles = makeStyles((theme) => ({
  root: {},
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
  return (
    <section className={classes.root}>
      <Typography
        variant='h4'
        classes={{
          h4: classes.h4,
        }}
        className={classes.title}
      >
        Metti alla prova le tue{" "}
        <Typography
          component='span'
          variant='h4'
          color='primary'
          className={classes.title}
        >
          nuove compentenze
        </Typography>
      </Typography>
      <Typography
        color='textSecondary'
        variant='body1'
        component='p'
        className={classes.subtitle}
        dangerouslySetInnerHTML={{
          __html: sectionTitle,
        }}
      ></Typography>
      <Grid
        container
        spacing={3}
        justify='center'
        alignItems='stretch'
        className={classes.projects}
      >
        {data.map((progetto, index) => (
          <Grid item xs={12} sm={6} md={4} key={progetto.titolo}>
            <Project data={progetto} order={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
