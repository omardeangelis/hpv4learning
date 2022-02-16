import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Project from "./Project";
import { useGlobalContext } from "../context";
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
    lineHeight: 1.7,
    "&  strong": {
      color: theme.palette.primary.main,
    },
  },
  projects: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Projects = ({ sectionTitle, data }) => {
  const { mediaQuery } = useGlobalContext();
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography
        variant={mediaQuery.md ? "h5" : "h4"}
        classes={{
          h4: classes.h4,
        }}
        className={classes.title}
      >
        Metti alla prova le tue{" "}
        <Typography
          component='span'
          variant={mediaQuery.md ? "h5" : "h4"}
          color='primary'
          className={classes.title}
        >
          nuove compentenze
        </Typography>
      </Typography>
      <Typography
        color='textSecondary'
        variant={mediaQuery.md ? "body2" : "body1"}
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
