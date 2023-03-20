import React from "react"
import styled from "@emotion/styled"
import { css } from "@mui/system"
import Box from "@mui/system/Box"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { HeadingsList } from "./HeadingsList"
import {
  MarkdownCode,
  MarkdownH2,
  MarkdownH3,
  MarkdownImage,
  MarkdownP,
} from "../../courses/components"

const ImageBox = styled(Box)(
  css({
    width: `100%`,
    borderRadius: `16px`,
    overflow: `hidden`,
    marginTop: `25px`,
    transform: `translateZ(0)`,
  })
)

export const ArticleBody = React.memo(
  (props: Omit<Queries.SingleProjectQuery["project"], "id">) => {
    const [hasMounted, setHasMounted] = React.useState<boolean>(false)
    const { titolo, body, copertina } = props as Pick<
      NonNullable<Queries.SingleProjectQuery["project"]>,
      "titolo" | "body" | "copertina"
    >

    const image = getImage(
      copertina as unknown as ImageDataLike
    ) as IGatsbyImageData

    const headings = React.useMemo(() => {
      if (!body?.childMarkdownRemark?.headings) return null
      const array = body.childMarkdownRemark.headings.map(
        (heading) => heading?.value
      )
      return array
    }, [body?.childMarkdownRemark?.headings])

    React.useEffect(() => {
      setHasMounted(true)
    }, [])

    const moveToHashHeader = React.useCallback(
      (hash: string) => {
        if (hasMounted) {
          const el = document.querySelector(`[data-hash="${hash}"]`)

          if (el) {
            el.scrollIntoView({ behavior: `smooth`, block: `center` })
          }
        }
      },
      [hasMounted]
    )

    React.useEffect(() => {
      if (hasMounted) {
        const h2Arrays = Array.from(document.getElementsByTagName(`h2`))

        h2Arrays.forEach((el, index) =>
          el.setAttribute(`data-hash`, `#${index}`)
        )
      }
    }, [hasMounted])

    React.useEffect(() => {
      if (hasMounted) {
        window.addEventListener(`hashchange`, () => {
          // eslint-disable-next-line no-restricted-globals
          const { hash } = location
          if (hash) {
            moveToHashHeader(hash)
          }
        })
      }
    }, [hasMounted, moveToHashHeader])

    return (
      <div>
        {image ? (
          <ImageBox>
            <GatsbyImage image={image} alt={titolo as string} />
          </ImageBox>
        ) : null}
        {headings ? (
          <Box
            sx={{
              backgroundColor: `grey.100`,
              borderRadius: `12px`,
              p: [`20px 16px`, `20px 32px`],
              mt: [`24px`, `36px`],
            }}
          >
            <HeadingsList
              title="Troverai nel progetto"
              list={headings.filter(Boolean)}
            />
          </Box>
        ) : null}
        {body?.body ? (
          <ReactMarkdown
            components={{
              h2: MarkdownH2,
              h3: MarkdownH3,
              p: MarkdownP,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              code: MarkdownCode,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              img: MarkdownImage,
            }}
          >
            {body.body}
          </ReactMarkdown>
        ) : null}
      </div>
    )
  }
)
