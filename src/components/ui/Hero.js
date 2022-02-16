import React from "react";
//Material Ui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
//Gatsby
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Hero = ({ image, children, height }) => {
  const classes = useStyles();
  const gatsbyImage = image ? getImage(image) : false;
  return (
    <Box
      style={{
        minHeight: height || "auto",
      }}
    >
      <Grid container alignItems='center'>
        <Grid item xs={12} lg={6}>
          {children}
        </Grid>
        <Grid item xs={12} lg={6} className={classes.image}>
          <Box>
            {gatsbyImage && (
              <GatsbyImage image={gatsbyImage} alt='hero-image' />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
