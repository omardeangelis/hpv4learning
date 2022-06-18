import styled from "@emotion/styled";
import { Box, BoxProps, css } from "@mui/system";

export interface ProjectBox extends BoxProps {
  isMobileOnly?: true;
}

export const ProjectCard = styled(Box)<ProjectBox>(
  css({
    borderRadius: ["6px", "8px"],
    display: "flex",
    width: "100%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    "& .img-box": {
      width: "100%",
      transform: "translateZ(0%)",
      overflow: "hidden",
    },
    "& .content-box": {
      padding: "12px",
    },
    "& .label-box": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      padding: "4px 11px",
      backgroundColor: "#E4E7EC",
      color: "#6C757D",
    },
  }),
  ({ isMobileOnly }) => ({
    flexDirection: isMobileOnly ? "row" : ["row", "column"],
    alignItems: "center",
    maxWidth: ["unset", "351px"],
    "& .img-box": {
      maxWidth: isMobileOnly ? "120px" : ["120px", "unset"],
      height: isMobileOnly ? "120px" : ["120px", "unset"],
    },
    "& .content-box": {
      "& h3": {
        fontSize: isMobileOnly ? "16px" : ["16px", "18px"],
      },
      "& p": {
        fontSize: isMobileOnly ? "14px" : ["14px", "16px"],
        lineHeight: isMobileOnly ? "18px" : ["18px", "21px"],
      },
      "& .label-box": {
        fontSize: isMobileOnly ? "12px" : ["12px", "12px"],
        height: isMobileOnly ? "16px" : ["16px", "21px"],
        width: "fit-content",
      },
    },
  }),
);
