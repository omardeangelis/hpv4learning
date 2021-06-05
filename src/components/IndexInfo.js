import React from "react";
//Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon/Icon";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Components
import BgImageSection from "./ui/BgImageSection";
//Utils
import valueInfo from "../utils/indexInfo";
//Context
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 800,
    lineHeight: 1,
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      textTransform: "none",
      lineHeight: 1.2,
      fontWeight: 600,
    },
    "& > strong": {
      color: theme.palette.primary.main,
      fontWeight: 800,
      [theme.breakpoints.down("md")]: {
        fontWeight: 600,
      },
    },
  },
  infoSection: {
    width: "100%",
    display: "grid",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingTop: "0px",
      gap: theme.spacing(3),
    },
  },
  cardSection: {
    display: "grid",
    gap: theme.spacing(2),
  },
  icon: {
    "& svg": {
      fontSize: "2rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "unset",
      },
    },
  },
  cardText: {
    maxWidth: "55ch",
    lineHeight: 1.8,
  },
}));

//Sezione Informativa
const IndexInfo = ({ img }) => {
  const classes = useStyles();
  const { mediaQuery } = useGlobalContext();

  return (
    <BgImageSection img={img} noPadding>
      <Box className={classes.infoSection} component='div'>
        <Typography
          variant={mediaQuery.md ? "h5" : "h4"}
          component='h4'
          className={classes.title}
        >
          A chi si rivolge <strong> Hpv 4 Learning</strong>
        </Typography>
        <Box component='section' className={classes.cardSection}>
          <Grid
            container
            alignItems='center'
            justify='center'
            spacing={mediaQuery.md ? 4 : 2}
          >
            {valueInfo.map((el, index) => {
              const { titolo, text, icon } = el;
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card component='article' elevation={0}>
                    <CardContent
                      style={{
                        padding: mediaQuery.md ? "0px" : "auto",
                      }}
                    >
                      <Icon
                        color='primary'
                        fontSize={mediaQuery.md ? "default" : "large"}
                        className={classes.icon}
                      >
                        {icon}
                      </Icon>
                      <Typography
                        component='h5'
                        variant={mediaQuery.md ? "h6" : "h5"}
                      >
                        {titolo}
                      </Typography>
                      <Typography
                        color='textSecondary'
                        variant='body1'
                        className={classes.cardText}
                      >
                        {text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </BgImageSection>
  );
};

export default IndexInfo;
