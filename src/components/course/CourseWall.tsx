import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CourseCategoryProps, CoursePreviewProps } from "../../types/course";
import CourseSection from "./CuorseSection";

type CourseDispettoProps = CoursePreviewProps & {
  oreDiLezione: number;
  livello: string;
  category: {
    slug: string;
    name: string;
  }[];
};

type Props = {
  allContentfulCorsi: {
    group: {
      fieldValue: string;
      nodes: CourseDispettoProps[];
    }[];
  };
};

const StyledBox = styled.div`
  & > *:not(:first-of-type) {
    margin-top: 34px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:first-of-type) {
      margin-top: 64px;
    }
  }
`;

const CourseWall = () => {
  const data: Props = useStaticQuery(query);
  const getCourseCategoryName = React.useCallback(
    (category: CourseCategoryProps[], categorySlug: string) => {
      return category.find((x) => x.slug === categorySlug.toLowerCase())?.name;
    },
    []
  );
  return (
    <StyledBox>
      {data.allContentfulCorsi.group.map(({ fieldValue, nodes }) => {
        return (
          <Box>
            <CourseSection
              slug={fieldValue}
              title={getCourseCategoryName(nodes[0].category, fieldValue)}
              data={nodes}
            />
          </Box>
        );
      })}
    </StyledBox>
  );
};

const query = graphql`
  {
    allContentfulCorsi(sort: { fields: createdAt }) {
      group(field: category___slug, limit: 3) {
        fieldValue
        nodes {
          category {
            name
            slug
          }
          copertina {
            gatsbyImageData
          }
          slug
          oreDiLezione
          titolo
          livello
          riassunto {
            riassunto
          }
        }
      }
    }
  }
`;

export default CourseWall;
