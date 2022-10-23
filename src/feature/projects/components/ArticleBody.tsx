import React from "react";
import styled from "@emotion/styled";
import { css } from "@mui/system";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { HeadingsList } from "./HeadingsList";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const ImageBox = styled(Box)(
  css({
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    marginTop: "25px",
    transform: "translateZ(0)",
  }),
);

const StyledH2 = styled(Typography)(
  css({
    fontSize: ["24px", "28px"],
    fontWeight: "600",
    lineHeigth: "29px",
    marginTop: "24px",
  }),
) as typeof Typography;

const StyledH3 = styled(Typography)(
  css({
    fontSize: ["20px", "22px"],
    fontWeight: "600",
    lineHeigth: "25px",
    marginTop: "20px",
  }),
) as typeof Typography;

const StyledP = styled(Typography)(
  css({
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    lineHeigth: "12px",
    marginTop: "16px",
  }),
) as typeof Typography;

const StyledBox = styled(Box)`
  max-width: 1280px;
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
  height: 205px;

  @media screen and (min-width: 767px) {
    height: 405px;
  }
`;

export const ArticleBody = React.memo(
  (props: Omit<Queries.SingleProjectQuery["project"], "id">) => {
    const [hasMounted, setHasMounted] = React.useState<boolean>(false);
    const { titolo, body, copertina } = props as Pick<
      NonNullable<Queries.SingleProjectQuery["project"]>,
      "titolo" | "body" | "copertina"
    >;

    const image = getImage(
      copertina as unknown as ImageDataLike,
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
      [hasMounted],
    );

    React.useEffect(() => {
      if (hasMounted) {
        const h2Arrays = Array.from(document.getElementsByTagName("h2"));

        h2Arrays.forEach((el, index) =>
          el.setAttribute("data-hash", `#${index}`),
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
          <ImageBox>
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
              h2: ({ node, ...props }) => (
                <StyledH2 {...props} component='h2' />
              ),
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              h3: ({ node, ...props }) => (
                <StyledH3 component='h3' {...props} />
              ),
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              p: ({ node, ...props }) => <StyledP component='p' {...props} />,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              code: ({ node, ...props }) => (
                <SyntaxHighlighter
                  language='javascript'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  style={dracula}
                  {...props}
                />
              ),
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              img: ({ node, ...props }) => (
                <StyledBox>
                  <img style={{ width: "100%", height: "100%" }} {...props} />
                </StyledBox>
              ),
            }}
          />
        ) : null}
      </div>
    );
  },
);
