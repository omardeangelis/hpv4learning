import { GatsbyLinkProps, Link } from "gatsby"
import React from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NoToLink = Omit<GatsbyLinkProps<{ state: any }>, "to" | "ref">

const SeoLink = ({
  isExternal,
  link,
  rel = `none`,
  children,
  target,
  style,
  className,
  ...rest
}: {
  isExternal: boolean
  link: string
  children: React.ReactNode
  rel?: string
  target?: string
  style?: any
  className?: string
} & NoToLink) => {
  if (isExternal) {
    return (
      <a
        style={{ textDecoration: `none`, color: `inherit`, ...style }}
        href={`${link}`}
        rel={rel}
        target={target}
        className={className ? `noselect ${className}` : `noselect`}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      style={{ textDecoration: `none`, color: `inherit`, ...style }}
      to={link}
      className={className ? `noselect ${className}` : `noselect`}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default SeoLink
