import React from "react";
import bgImage from "../../images/Bg.png";
//Material UI
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    position: "relative",
    zIndex: 9999,
    placeItems: "center start",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const ComponentName = ({ img, children, noPadding }) => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundImage: 'url("/Bg.png")',
        backgroundPosition: "left",
      }}
    >
      <Container
        maxWidth='lg'
        className={classes.root}
        style={{
          paddingBottom: noPadding ? 0 : "auto",
          paddingTop: noPadding ? 0 : "auto",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default ComponentName;