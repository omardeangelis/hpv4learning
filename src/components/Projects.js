import React from "react";
import Grid from "@mui/material/Grid";
import Project from "./Project";

const Projects = ({ data }) => {
  return (
    <Grid container spacing={3} justify='center' alignItems='stretch'>
      {data.map((progetto, index) => (
        <Grid item xs={12} sm={6} md={4} key={progetto.titolo}>
          <Project data={progetto} order={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
