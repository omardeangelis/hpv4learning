import React from "react";
import {
  FaVimeoSquare,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SvgIcon from "@material-ui/core/SvgIcon";
import Link from "@material-ui/core/Link";
const socialLinks = [
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/company/hpv-film/",
    icon: <FaLinkedin />,
  },
  {
    text: "instagram",
    url: "https://www.instagram.com/hpv_film/?hl=it",
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

const SocialBar = ({ className }) => {
  return (
    <ul className={className || "social-row"}>
      {socialLinks.map((social) => {
        const { text, url, icon } = social;
        return (
          <li key={text}>
            <SvgIcon
              fontSize="default"
              component={Link}
              titleAccess={text}
              href={url}
              alt={text}
              target="_blank"
              color="secondary"
              className="social-icon"
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
