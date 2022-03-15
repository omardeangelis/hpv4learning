import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

export const getIcon = (type: string, size?: { xs: string; lg: string }) => {
  switch (type) {
    case "videomakers":
      return (
        <VideoCallIcon
          fontSize={size ? "inherit" : "small"}
          sx={{
            color: "purple.400",
            fontSize: size && size,
          }}
        />
      );
    case "sviluppatori-web":
      return (
        <CodeIcon
          fontSize={size ? "inherit" : "small"}
          sx={{
            color: "purple.400",
            fontSize: size && size,
          }}
        />
      );
    default:
      return (
        <BeenhereIcon
          fontSize={size ? "inherit" : "small"}
          sx={{
            color: "purple.400",
            fontSize: size && size,
          }}
        />
      );
  }
};

export const createStarReview = (value: number) => {
  return Array.from({ length: 5 }, (_, index) => {
    let integer = index + 1;
    let half = index + 0.5;

    if (value >= integer) {
      return (
        <StarRateRoundedIcon
          sx={{
            color: "purple.400",
            fontSize: "14px",
          }}
        />
      );
    }
    if (Math.ceil(value) >= half) {
      return (
        <StarHalfRoundedIcon
          sx={{
            color: "purple.400",
            fontSize: "14px",
          }}
        />
      );
    }
    return (
      <StarOutlineRoundedIcon
        sx={{
          color: "purple.400",
          fontSize: "14px",
        }}
      />
    );
  });
};
