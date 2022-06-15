import React from "react";
import { Box, styled, css } from "@mui/system";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ProjectProps } from "../../types";
import ReactMarkdown from "react-markdown";
import ListSection from "../ui/ListSection";
import "../../styles/projectArticle.css";

interface Props {
  data: ProjectProps;
}

const StyledListSectionBox = styled(Box)`
  margin-top: 25px;
  border: 1px;
  border-color: #e4e7ec;
  border-radius: 12px;
  background-color: #f8f8f8;
  & > p {
    padding: 20px 16px;
    padding-bottom: 0;
    font-weight: 500;
    font-size: 20px;
  }
  & > ul > li > div > p {
    padding-left: 16px;
    font-weight: 400;
    font-size: 14px;
    color: #000;
  }
`;

const ImageBox = styled(Box)(
  css({
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    marginTop: "25px",
  })
);

const ArticleBody = ({ data }: Props) => {
  const { titolo, body, copertina } = data;

  const image = getImage(copertina) as IGatsbyImageData;

  const headings = React.useMemo(() => {
    const array = body.childMarkdownRemark.headings.map((heading) => {
      return heading.value;
    });
    return array;
  }, []);

  return (
    <div>
      {image && (
        <ImageBox sx={{ heigth: { xs: "205px", lg: "405px" } }}>
          <GatsbyImage image={image} alt={titolo} />
        </ImageBox>
      )}
      <StyledListSectionBox>
        <ListSection
          title='Troverai nel progetto'
          list={headings}
          icon={<div></div>}
        ></ListSection>
      </StyledListSectionBox>
      <ReactMarkdown children={body.body} className='markdown' />
    </div>
  );
};

export default ArticleBody;
