import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Tween } from "react-gsap";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignItems: "center",
    height: "4rem",
  },
}));

const Project = ({ data: { titolo, ordine, url, copertina }, order }) => {
  const classes = useStyles();
  const image = getImage(copertina);
  return (
    <Tween
      from={{ y: "200px", opacity: 0 }}
      to={{ opacity: 1, y: "0", delay: order * 0.15 }}
      ease="ease"
    >
      <Wrapper>
        <Box className="img">
          <GatsbyImage image={image} alt={titolo} className="gatsby-img" />
        </Box>
        <footer className={classes.cardActions}>
          <Typography variant="overline" className="title">
            {ordine} {titolo}
          </Typography>
          <Button
            component={Link}
            variant="contained"
            href={url}
            target="_blank"
            color="secondary"
            size="small"
            className="btn"
          >
            Vedi
          </Button>
        </footer>
      </Wrapper>
    </Tween>
  );
};

const Wrapper = styled.div`
  opacity: 0;
  display: grid;
  box-shadow: var(--light-shadow);
  border-radius: var(--radius);
  .img {
    height: 250px;
    width: 100%;
    .gatsby-img {
      border-radius: 0.25rem 0.25rem 0rem 0rem;
      height: 100%;
    }
  }
  .title {
    font-weight: 600;
    font-size: 0.9em;
  }
  .btn {
    padding: 0.25rem 2rem;
  }
  a:hover {
    text-decoration: none;
  }
`;

export default Project;
