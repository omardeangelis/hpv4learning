import React from "react";
//Material UI
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
//Icons
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SpeedIcon from "@material-ui/icons/Speed";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    "& > *": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  iconColorPrimary: {
    color: theme.palette.primary.main,
  },
}));

const CourseInfo = ({ livello, oreDiLezione, lezioni }) => {
  const info = [
    {
      titolo: "Livello",
      text: livello,
      icon: <SpeedIcon />,
    },
    {
      titolo: "Lezioni",
      text: lezioni,
      icon: <MenuBookIcon />,
    },
    {
      titolo: "Ore di Lezione",
      text: oreDiLezione / 60,
      icon: <AccessTimeIcon />,
    },
  ];
  const classes = useStyles();
  return (
    <Box component='section' className={classes.root}>
      {info.map((el) => {
        const { titolo, text, icon } = el;
        return (
          <Chip
            key={titolo}
            variant='outlined'
            icon={icon}
            label={`${titolo}: ${text}`}
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
