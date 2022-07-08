import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import SchoolIcon from "@mui/icons-material/School";

import { IconTypeProps } from "../../../types";
import { SxProps, Theme } from "@mui/system";

export const getIcon = (icon: IconTypeProps, sx?: SxProps<Theme>) => {
  switch (icon) {
    case "dropdown":
      return <ArrowDropDownIcon sx={sx} />;

    case "home":
      return <HomeIcon sx={sx} />;
    case "project":
      return <LibraryBooksIcon sx={sx} />;
    case "videomakers":
      return <VideoCallIcon sx={sx} />;
    case "code":
      return <CodeIcon sx={sx} />;
    case "free":
      return <BeenhereIcon sx={sx} />;
    case "school":
      return <SchoolIcon sx={sx} />;
      return;
    default:
      return <AssignmentIndIcon sx={sx} />;
  }
};
