import React from "react";
import { Box, css } from "@mui/system";
import styled from "@emotion/styled";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import { HeadingsList } from "./HeadingsList";
import { ArticleNodeProps } from "../types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = ArticleNodeProps;

const ImageBox = styled(Box)(
  css({
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    marginTop: "25px",
  })
);

const StyledH2 = styled(Typography)(
  css({
    fontSize: ["24px", "28px"],
    fontWeight: "600",
    lineHeigth: "29px",
    marginTop: "24px",
  })
) as typeof Typography;

const StyledH3 = styled(Typography)(
  css({
    fontSize: ["20px", "22px"],
    fontWeight: "600",
    lineHeigth: "25px",
    marginTop: "20px",
  })
) as typeof Typography;

const StyledP = styled(Typography)(
  css({
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    lineHeigth: "12px",
    marginTop: "16px",
  })
) as typeof Typography;

export const ArticleBody = React.memo((props: Props) => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const { titolo, body, copertina } = props;

  const image = getImage(
    copertina as unknown as ImageDataLike
  ) as IGatsbyImageData;

  const headings = React.useMemo(() => {
    if (!body?.childMarkdownRemark?.headings) return null;
    const array = body.childMarkdownRemark.headings.map((heading) => {
      return heading?.value;
    });
    return array;
  }, []);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const moveToHashHeader = React.useCallback(
    (hash: string) => {
      if (hasMounted) {
        const el = document.querySelector(`[data-hash="${hash}"]`);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    },
    [hasMounted]
  );

  React.useEffect(() => {
    if (hasMounted) {
      const h2Arrays = Array.from(document.getElementsByTagName("h2"));

      h2Arrays.forEach((el, index) =>
        el.setAttribute("data-hash", `#${index}`)
      );
    }
  }, [hasMounted]);

  React.useEffect(() => {
    if (hasMounted) {
      window.addEventListener("hashchange", () => {
        const hash = location.hash;
        if (hash) {
          moveToHashHeader(hash);
        }
      });
    }
  }, [hasMounted]);

  return (
    <div>
      {image ? (
        <ImageBox sx={{ heigth: { xs: "205px", lg: "405px" } }}>
          <GatsbyImage image={image} alt={titolo as string} />
        </ImageBox>
      ) : null}
      {headings ? (
        <Box
          sx={{
            backgroundColor: "grey.100",
            borderRadius: "12px",
            p: ["20px 16px", "20px 32px"],
            mt: ["24px", "36px"],
          }}
        >
          <HeadingsList
            title='Troverai nel progetto'
            list={headings.filter(Boolean)}
          />
        </Box>
      ) : null}
      {body?.body ? (
        <ReactMarkdown
          children={body.body}
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h2: ({ node, ...props }) => <StyledH2 {...props} component='h2' />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            h3: ({ node, ...props }) => <StyledH3 component='h3' {...props} />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            p: ({ node, ...props }) => <StyledP component='p' {...props} />,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            code: ({ node, ...props }) => (
              <SyntaxHighlighter
                language='javascript'
                style={dracula}
                {...props}
              />
            ),
          }}
        />
      ) : null}
    </div>
  );
});
