import React from "react";
//Material Ui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//Gatsby
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

type QueryProps = {
  file: ImageDataLike;
};

const StyledBox = styled(Box)`
  display: none;
  @media screen and (min-width: 767px) {
    display: block;
  }
`;

const Hero = ({ children }: { children: React.ReactChild }) => {
  const data: QueryProps = useStaticQuery(query);
  return (
    <Box>
      <Grid container alignItems='center'>
        <Grid item xs={12} lg={6}>
          {children}
        </Grid>
        <Grid item xs={12} lg={6}>
          <StyledBox>
            <GatsbyImage
              image={getImage(data.file) as IGatsbyImageData}
              alt='Logo del progetto hpv 4 learning'
            />
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

const query = graphql`
  {
    file(relativePath: { eq: "people-hero.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

export default Hero;
