import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

//Material UI
import Container from "@material-ui/core/Container/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center start",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const query = graphql`
  {
    imageSharp(fixed: { originalName: { eq: "Bg.png" } }) {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
`;
const ComponentName = ({ children }) => {
  const data = useStaticQuery(query);
  const image = getImage(data.imageSharp);
  const classes = useStyles();
  return (
    <BgImage
      image={image}
      style={{
        backGroundPosition: "center",
      }}
    >
      <Container maxWidth='lg' className={classes.root}>
        {children}
      </Container>
    </BgImage>
  );
};

export default ComponentName;
