import React, { useRef, useState, useEffect } from "react";
//Components
import CustomButton from "./Button";
import CourseInfo from "./CourseInfo";
//Utils
import { createBoldText } from "../utils/helpers";
//Gastby
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
//Material UI
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    lineHeight: 1,
    "& > strong": {
      color: theme.palette.primary.main,
      fontWeight: 800,
    },
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textBox: {
    display: "grid",
    height: "fit-content",
    gap: theme.spacing(5),
  },
  imageBox: {
    width: "100%",
    position: "relative",
  },
  img: {
    height: "100%",
    borderRadius: "14px",
    boxShadow: "var(--light-shadow)",
  },
}));

const CuorseSection = ({ reference }) => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const courseTextRef = useRef(null);
  const [textHeight, setTextHeight] = useState("auto");
  useEffect(() => {
    if (courseTextRef.current) {
      const { height } = courseTextRef.current.getBoundingClientRect();
      setTextHeight(height || 0);
    }
  }, []);

  return (
    <Box component='div' className={classes.root} ref={reference}>
      {data.allContentfulCorsi.nodes.map((el, index) => {
        return index === 0 || index % 2 === 0 ? (
          <>
            <Grid
              container
              key={el.idCorso}
              spacing={5}
              className={classes.card}
              alignItems='center'
            >
              <Grid
                item
                xs={12}
                lg={6}
                className={classes.textBox}
                ref={courseTextRef}
              >
                <Typography
                  className={classes.title}
                  variant='h5'
                  dangerouslySetInnerHTML={{
                    __html: createBoldText(el.titolo),
                  }}
                ></Typography>
                <CourseInfo
                  livello={el.livello}
                  lezioni={el.lezioni}
                  oreDiLezione={el.oreDiLezione}
                />
                <Typography
                  component='p'
                  color='textSecondary'
                  dangerouslySetInnerHTML={{
                    __html: el.riassunto.childMarkdownRemark.html,
                  }}
                ></Typography>
                <Grid container spacing={6}>
                  <Grid item>
                    <CustomButton link={el.udemyUrl} type='contained' />
                  </Grid>
                  <Grid item>
                    <CustomButton router link={`/${el.slug}/`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box
                  className={classes.imageBox}
                  style={{
                    height: textHeight,
                  }}
                >
                  <GatsbyImage
                    image={getImage(el.copertina)}
                    alt={el.titolo}
                    imgStyle={{
                      height: textHeight,
                    }}
                    className={classes.img}
                  />
                </Box>{" "}
              </Grid>
            </Grid>
            <Divider />
          </>
        ) : (
          <Grid
            container
            key={el.idCorso}
            spacing={5}
            className={classes.card}
            alignItems='center'
          >
            <Grid item xs={12} lg={6}>
              <Box
                className={classes.imageBox}
                style={{
                  height: textHeight,
                }}
              >
                <GatsbyImage
                  image={getImage(el.copertina)}
                  alt={el.titolo}
                  className={classes.img}
                  imgStyle={{
                    height: textHeight,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.textBox}>
              <Typography
                className={classes.title}
                variant='h5'
                dangerouslySetInnerHTML={{
                  __html: createBoldText(el.titolo),
                }}
              ></Typography>
              <CourseInfo
                livello={el.livello}
                lezioni={el.lezioni}
                oreDiLezione={el.oreDiLezione}
              />
              <Typography
                component='p'
                color='textSecondary'
                dangerouslySetInnerHTML={{
                  __html: el.riassunto.childMarkdownRemark.html,
                }}
              ></Typography>
              <Grid container spacing={6}>
                <Grid item>
                  <CustomButton link={el.udemyUrl} type='contained' />
                </Grid>
                <Grid item>
                  <CustomButton router link={`/${el.slug}/`} type='text' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

const query = graphql`
  {
    allContentfulCorsi {
      nodes {
        idCorso
        lezioni
        livello
        slug
        oreDiLezione
        prezzo
        sottotitolo
        titolo
        udemyUrl
        riassunto {
          childMarkdownRemark {
            html
          }
        }
        descrizione {
          childMarkdownRemark {
            html
          }
        }
        copertina {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
        introduzioneProgetti {
          childMarkdownRemark {
            html
          }
        }
        progetti {
          titolo
          url
          ordine
          copertina {
            gatsbyImageData
          }
          descrizione {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default CuorseSection;
