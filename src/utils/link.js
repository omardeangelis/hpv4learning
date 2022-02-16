import React from "react";
import {
  FaVimeoSquare,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { makeStyles } from "@mui/styles";

import SvgIcon from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
const socialLinks = [
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/company/hpv-film/",
    icon: <FaLinkedin />,
  },
  {
    text: "instagram",
    url: "https://www.instagram.com/hpv_4learning",
    icon: <FaInstagram />,
  },
  {
    text: "youtube",
    url: "https://www.youtube.com/channel/UC9kv8nH9i9kSj_q0FqckiYw",
    icon: <FaYoutube />,
  },
  {
    text: "facebook",
    url: "https://www.facebook.com/hpvfilm/",
    icon: <FaFacebook />,
  },
  {
    text: "vimeo",
    url: "https://vimeo.com/hpvfilm",
    icon: <FaVimeoSquare />,
  },
];

const useStyles = makeStyles((theme) => ({
  socialIconColor: {
    color: "white",
  },
}));

const SocialBar = ({ className }) => {
  const classes = useStyles();
  return (
    <ul className={className || "social-row"}>
      {socialLinks.map((social) => {
        const { text, url, icon } = social;
        return (
          <li key={text}>
            <SvgIcon
              fontSize='default'
              component={Link}
              titleAccess={text}
              href={url}
              alt={text}
              target='_blank'
              className={`social-icon ${classes.socialIconColor}`}
            >
              {icon}
            </SvgIcon>
          </li>
        );
      })}
    </ul>
  );
};

export { SocialBar };
