import React, { useRef, useState, useEffect } from "react";
//Components
import CustomButton from "./ui/Button";
import CourseInfo from "./CourseInfo";
//Utils
import { createBoldText } from "../utils/helpers";
//Gastby
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
//Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    lineHeight: 1,
    "& > strong": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.2,
      "& > strong": {
        fontWeight: 600,
      },
    },
  },
  card: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  textBox: {
    display: "grid",
    height: "fit-content",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(3),
    },
  },
  riassunto: {
    "& strong": {
      color: theme.palette.primary.main,
    },
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
  const { mediaQuery } = useGlobalContext();
  useEffect(() => {
    if (courseTextRef.current) {
      const { height } = courseTextRef.current.getBoundingClientRect();
      setTextHeight(height || 0);
    }
  }, []);

  return (
    <Box component='div' className={classes.root} ref={reference}>
      {data.allContentfulCorsi.nodes.map((el, index) => {
        return (
          <React.Fragment key={el.idCorso}>
            <Grid
              container
              spacing={5}
              className={classes.card}
              alignItems='center'
            >
              <Grid
                item
                xs={12}
                md={6}
                className={classes.textBox}
                ref={courseTextRef}
              >
                <Typography
                  className={classes.title}
                  variant={mediaQuery.md ? "body1" : "h5"}
                  component='h5'
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
                  className={classes.riassunto}
                  variant={mediaQuery.md ? "body2" : "body1"}
                  dangerouslySetInnerHTML={{
                    __html: el.riassunto.childMarkdownRemark.html,
                  }}
                ></Typography>
                <Grid container spacing={mediaQuery.md ? 2 : 6}>
                  <Grid item xs={6} sm={6}>
                    <CustomButton link={el.udemyUrl} type='contained' />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <CustomButton router link={`/${el.slug}/`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  className={classes.imageBox}
                  style={{
                    height: mediaQuery.md ? "auto" : textHeight,
                    width: "100%",
                  }}
                >
                  <GatsbyImage
                    image={getImage(el.copertina)}
                    alt={el.titolo}
                    imgStyle={{
                      height: mediaQuery.md ? "auto" : textHeight,
                    }}
                    className={classes.img}
                  />
                </Box>{" "}
              </Grid>
            </Grid>
            {(index === 0 || index % 2 === 0) && !mediaQuery.md && <Divider />}
          </React.Fragment>
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
