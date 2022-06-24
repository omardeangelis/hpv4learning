import { Box, BoxProps } from "@mui/system";
import styled from "@emotion/styled";
export interface ProjectBox extends BoxProps {
  isMobileOnly?: true;
}

export const ProjectCard = styled(Box)({
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "8px",
  display: "flex",
  width: "100%",
  overflow: "hidden",
  transition: "all 75ms ease",
  border: "1px solid #e7e7e8",
  "&:hover": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  },
  "& .img-box": {
    maxWidth: "120px",
    height: "100%",
  },
  "& .content-box": {
    "& h3": {
      fontSize: "16px",
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "18px",
    },
    "& .img-box": {
      width: "100%",
      transform: "translateZ(0%)",
      overflow: "hidden",
    },
    "& .content-box": {
      padding: "12px",
    },
    "& .label-box": {
      fontSize: "12px",
      height: "16px",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      padding: "4px 11px",
      backgroundColor: "#E4E7EC",
      color: "#6C757D",
    },
  },
  "@media screen and (min-width:1024px)": {
    flexDirection: "column",
    alignItems: "center",
    "& .img-box": {
      maxWidth: "unset",
      height: "unset",
    },
    "& .content-box": {
      padding: "12px",
      "& h3": {
        fontSize: "18px",
      },
      "& p": {
        fontSize: "16px",
        lineHeight: "21px",
      },
      "& .label-box": {
        fontSize: "12px",
        height: "21px",
        width: "fit-content",
      },
    },
  },
});

export const MobileOnlyProjectCard = styled(Box)({
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "6px",
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  transition: "all 75ms ease",
  border: "1px solid #e7e7e8",
  "&:hover": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  },
  "& .img-box": {
    maxWidth: "120px",
    height: "100%",
  },
  "& .content-box": {
    padding: "12px",
    "& h3": {
      fontSize: "16px",
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "18px",
    },
    "& .img-box": {
      width: "100%",
      transform: "translateZ(0%)",
      overflow: "hidden",
    },
    "& .content-box": {
      padding: "12px",
    },
    "& .label-box": {
      fontSize: "12px",
      height: "16px",
      width: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
      padding: "4px 11px",
      backgroundColor: "#E4E7EC",
      color: "#6C757D",
    },
  },
});
