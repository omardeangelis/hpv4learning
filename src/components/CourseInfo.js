import React from "react";
//Material UI
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
//Icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SpeedIcon from "@material-ui/icons/Speed";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "flex-start",
    "& > *": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      display: "flex",
      marginRight: "0px",
      flexWrap: "nowrap",
      gap: theme.spacing(1),
      justifyContent: "space-between",
    },
  },
  iconColorPrimary: {
    color: theme.palette.primary.main,
  },
  chip: {
    transition: "var(--transition)",
    "&:hover": {
      tranform: "scaleX(1.1)",
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      "& svg": {
        color: theme.palette.primary.contrastText,
      },
    },
  },
}));

const CourseInfo = ({ livello, oreDiLezione, lezioni }) => {
  const info = [
    {
      titolo: "",
      text: livello,
      icon: <SpeedIcon />,
    },
    {
      titolo: "Video :",
      text: lezioni,
      icon: <MenuBookIcon />,
    },
    {
      titolo: "Ore :",
      text: (oreDiLezione / 60).toFixed(2),
      icon: <AccessTimeIcon />,
    },
  ];
  const classes = useStyles();
  const { mediaQuery } = useGlobalContext();
  return (
    <Box component='section' className={classes.root}>
      {info.map((el) => {
        const { titolo, text, icon } = el;
        return (
          <Chip
            className={classes.chip}
            key={titolo}
            variant='outlined'
            style={{
              marginLeft: mediaQuery.sm ? "0px" : "2px",
              marginRight: mediaQuery.sm ? "0px" : "2px",
            }}
            size={mediaQuery.md ? "small" : "medium"}
            icon={icon}
            label={`${titolo} ${text}`}
            color='default'
            classes={{
              icon: classes.iconColorPrimary,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CourseInfo;
