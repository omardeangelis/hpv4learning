import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "var(--dark-shadow)",
    height: "100%",
  },
  frame: {
    borderRadius: "16px",
  },
}));

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const classes = useStyles();
  return (
    <div className={`video ${classes.root}`}>
      <iframe
        className={classes.frame}
        src={videoSrcURL}
        width='100%'
        height='100%'
        title={videoTitle}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
      />
    </div>
  );
};
export default Video;
