import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import Box from "@mui/material/Box"
import { BoxProps } from "@mui/material"

type ItemImageProps = {
  image: IGatsbyImageData
  alt: string
}

export const ItemImage = ({
  image,
  alt,
  ...rest
}: ItemImageProps & BoxProps) => (
  <Box
    maxWidth={{ xs: `73px`, lg: `247px` }}
    width="100%"
    height={{ xs: `41px`, lg: `140px` }}
    borderRadius={{ xs: `4px`, lg: `8px 0 0 8px` }}
    overflow="hidden"
    style={{
      transform: `translateZ(0)`,
    }}
    {...rest}
  >
    <GatsbyImage style={{ height: `100%` }} image={image} alt={alt} />
  </Box>
)
