import { Link } from "gatsby";
import React from "react";

const SeoLink = ({
  isExternal,
  link,
  rel = "none",
  children,
  target,
  style,
}: {
  isExternal: boolean;
  link: string;
  children: React.ReactNode;
  rel?: string;
  target?: string;
  style?: any;
}) => {
  if (isExternal) {
    return (
      <a
        style={{ textDecoration: "none", color: "inherit", ...style }}
        href={`${link}`}
        rel={rel}
        target={target}
        className='noselect'
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit", ...style }}
      to={link}
      className='noselect'
    >
      {children}
    </Link>
  );
};

export default SeoLink;
