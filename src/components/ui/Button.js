import React from "react";
//Material UI
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
//Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//Gatsby
import { Link as RouterLink } from "gatsby";
const CustomButton = ({ router, link, type, ...props }) => {
  if (!router) {
    return (
      <Button
        component={Link}
        // color='primary'
        size={props.size}
        href={link}
        variant={type}
        target='_blank'
        style={{
          fontWeight: 600,
          letterSpacing: "0.1rem",
        }}
      >
        Acquista
      </Button>
    );
  }
  return (
    <Button
      component={RouterLink}
      to={link}
      // color='primary'
      variant={type}
      size={props.size}
      style={{
        fontWeight: 600,
        letterSpacing: "0.1rem",
      }}
      endIcon={<ArrowForwardIcon />}
    >
      {" "}
      Dettagli
    </Button>
  );
};

export default CustomButton;
