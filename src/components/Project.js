import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import VizSensor from "react-visibility-sensor";
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

const Project = ({ data: { titolo, ordine, url, copertina, descrizione } }) => {
  const classes = useStyles();
  const image = getImage(copertina);
  const [isActive, setIsActive] = useState(false);
  return (
    <VizSensor
      partialVisibility='bottom'
      offset={{
        bottom: -300,
      }}
      onChange={(isVisible) => {
        if (!isActive) {
          setIsActive(isVisible);
        }
      }}
    >
      <Fade in={isActive} timeout={350}>
        <Wrapper>
          <Box className='img'>
            <GatsbyImage image={image} alt={titolo} className='gatsby-img' />
          </Box>
          {url ? (
            <footer className={classes.cardActions}>
              <Typography variant='overline' className='title'>
                {ordine} {titolo}
              </Typography>
              <Button
                component={Link}
                variant='contained'
                href={url}
                target='_blank'
                color='primary'
                size='small'
                className='btn'
              >
                Vedi
              </Button>
            </footer>
          ) : (
            <CardContent>
              <Typography variant='overline' className='title'>
                {ordine} {titolo}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                dangerouslySetInnerHTML={{
                  __html: descrizione.childMarkdownRemark.html,
                }}
              ></Typography>
            </CardContent>
          )}
        </Wrapper>
      </Fade>
    </VizSensor>
  );
};

const Wrapper = styled.div`
  opacity: 1;
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
