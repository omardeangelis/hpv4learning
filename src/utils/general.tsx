import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BeenhereIcon from "@mui/icons-material/Beenhere";

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
