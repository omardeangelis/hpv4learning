import React from "react";
import { Box, css } from "@mui/system";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ProjectProps } from "../../types";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import HeadingsList from "./HeadingsList";

interface Props {
  data: ProjectProps;
}

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
);

const StyledH3 = styled(Typography)(
  css({
    fontSize: ["20px", "22px"],
    fontWeight: "600",
    lineHeigth: "25px",
    marginTop: "20px",
  })
);

const StyledP = styled(Typography)(
  css({
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    lineHeigth: "12px",
    marginTop: "16px",
  })
);

const StyledCode = styled(Box)(
  css({
    margin: "20px auto 20px auto",
    padding: "30px 0 30px 15px",
    borderRadius: "16px",
    background: "#4b4b4b",
    color: "#fff",
    overflowX: "auto",
    overflowY: "hidden",
    fontSize: "16px",
  })
);

const ArticleBody = React.memo(({ data }: Props) => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const { titolo, body, copertina } = data;

  const image = getImage(copertina) as IGatsbyImageData;

  const headings = React.useMemo(() => {
    if (!body.childMarkdownRemark.headings) return null;
    const array = body.childMarkdownRemark.headings.map((heading) => {
      return heading.value;
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
      {image && (
        <ImageBox sx={{ heigth: { xs: "205px", lg: "405px" } }}>
          <GatsbyImage image={image} alt={titolo} />
        </ImageBox>
      )}
      {headings && (
        <HeadingsList title='Troverai nel progetto' list={headings} />
      )}
      <ReactMarkdown
        children={body.body}
        components={{
          h2: ({ node, ...props }) => <StyledH2 component='h2' {...props} />,
          h3: ({ node, ...props }) => <StyledH3 component='h3' {...props} />,
          p: ({ node, ...props }) => <StyledP component='p' {...props} />,
          code: ({ node, ...props }) => <StyledCode {...props} />,
        }}
      />
    </div>
  );
});

export default ArticleBody;
