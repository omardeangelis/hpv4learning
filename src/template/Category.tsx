import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { graphql } from "gatsby";
import React from "react";
import CourseContainer from "../components/course/CourseContainer";
import CourseContent from "../components/course/CourseContent";
import Layout from "../components/ui/navigation/layout";
import { CoursePreviewProps } from "../types/course";
import { rowalizer } from "../utils/helpers";

type Props = {
  pageContext: {
    description: string;
    name: string;
  };
  data: {
    allContentfulCorsi: {
      nodes: (CoursePreviewProps & { oreDiLezione: number; livello: string })[];
    };
  };
};

type StyledProps = {
  full: boolean;
};

const CustomStack = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:last-of-type) {
      margin-bottom: 0px;
      margin-right: ${(props) => (props.full ? "unset" : "61px")};
    }
    flex-direction: row;
    justify-content: ${(props) =>
      props.full ? "space-between" : "flex-start"};
  }
`;

const Category = ({ pageContext: { description, name }, data }: Props) => {
  const rows = rowalizer(data.allContentfulCorsi.nodes);

  return (
    <Layout>
      <Box
        sx={{
          mt: { xs: "48px", lg: "96px" },
        }}
      >
        <Container maxWidth='lg'>
          <Box mx='auto'>
            <Typography
              component='h1'
              textAlign='center'
              fontWeight={700}
              sx={{
                fontSize: { xs: "36px", lg: "72px" },
                lineHeight: { xs: "39px", lg: "79px" },
              }}
            >
              Corsi per <br className='desktop-new-line' />
              <strong className='brand-text'>{name}</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: "24px", lg: "36px" },
              maxWidth: "832px",
              mx: "auto",
            }}
          >
            <Typography
              component='h2'
              fontWeight={400}
              textAlign='center'
              sx={{
                fontSize: { xs: "16px", lg: "24px" },
                lineHeight: { xs: "21px", lg: "28px" },
                color: "gray.600",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Container>

        <Box
          sx={{
            my: { xs: "48px", lg: "96px" },
          }}
        >
          <Container maxWidth='lg'>
            {rows.map((row, index) => {
              return (
                <Box
                  key={`${name}-section-${index}`}
                  sx={{
                    mt: { xs: "16px", lg: "48px" },
                  }}
                >
                  <CustomStack full={row.length === 3}>
                    {row.map((course) => {
                      return (
                        <CourseContainer key={course.slug}>
                          <CourseContent {...course} />
                        </CourseContainer>
                      );
                    })}
                  </CustomStack>
                </Box>
              );
            })}
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query CategoryCourse($slug: String!) {
    allContentfulCorsi(
      filter: { category: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
        titolo
        copertina {
          gatsbyImageData
        }
        categoria
        couponLink
        slug
        livello
        oreDiLezione
        riassunto {
          riassunto
        }
      }
    }
  }
`;

export default Category;
