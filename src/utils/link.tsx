import React from "react";
import {
  FaVimeoSquare,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
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

const SocialBar = ({ className }: { className?: string }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      mx='auto'
      component={"ul"}
      className={className}
    >
      {socialLinks.map((social) => {
        const { text, url, icon } = social;
        return (
          <li key={text}>
            <Box
              sx={{
                color: "white",
              }}
            >
              <a
                target='_blank'
                rel='nofollow'
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <SvgIcon
                  fontSize='medium'
                  color='inherit'
                  titleAccess={text}
                  href={url}
                  className={`social-icon`}
                >
                  {icon}
                </SvgIcon>
              </a>
            </Box>
          </li>
        );
      })}
    </Stack>
  );
};

export { SocialBar };
