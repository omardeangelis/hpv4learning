import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/system/Box"
import { graphql, PageProps } from "gatsby"
import React from "react"
import CourseBanner from "../components/banner/CourseBanner"
import CourseContainer from "../components/course/CourseContainer"
import CourseContent from "../components/course/CourseContent"
import LinkHandler from "../components/SEO/components/LinkHandler"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import WebPageSchema from "../components/SEO/components/WebPageSchema"
import Layout from "../components/shared/layout"
import { rowalizer } from "../utils/helpers"

type StyledProps = {
  full?: string
}

const CustomStack = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > *:not(:last-of-type) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:last-of-type) {
      margin-bottom: 0px;
      margin-right: ${(props) => (props.full ? `unset` : `61px`)};
    }
    flex-direction: row;
    justify-content: ${(props) =>
      props.full ? `space-between` : `flex-start`};
  }
`

type ContextProps = {
  description: string
  name: string
  alias: string
}

const Category: React.FC<
  PageProps<Queries.CategoryCourseQuery, ContextProps>
> = ({ pageContext: { description, name, alias }, data }) => {
  const rows = React.useMemo(
    () =>
      data?.allContentfulCorsi?.nodes
        ? rowalizer(data?.allContentfulCorsi?.nodes)
        : null,
    [data?.allContentfulCorsi?.nodes]
  )
  const couponCourses = React.useMemo(
    () =>
      data.allContentfulCorsi.nodes.filter(
        (corso) => corso.categoria && corso.categoria?.toLowerCase() !== `free`
      ),
    [data.allContentfulCorsi.nodes]
  )

  return (
    <Layout>
      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <Container maxWidth="lg">
          <Box mx="auto">
            <Typography
              component="h1"
              textAlign="center"
              fontWeight={700}
              sx={{
                fontSize: { xs: `36px`, lg: `72px` },
                lineHeight: { xs: `39px`, lg: `79px` },
              }}
            >
              Corsi per <br className="desktop-new-line" />
              <strong className="brand-text">{alias || name}</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: `24px`, lg: `36px` },
              maxWidth: `832px`,
              mx: `auto`,
            }}
          >
            <Typography
              component="h2"
              fontWeight={400}
              textAlign="center"
              sx={{
                fontSize: { xs: `16px`, lg: `24px` },
                lineHeight: { xs: `21px`, lg: `28px` },
                color: `gray.600`,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Container>

        <Box
          sx={{
            my: { xs: `48px`, lg: `96px` },
          }}
        >
          <Container maxWidth="lg">
            {rows?.map((row) => (
              <Box
                key={`${name}-section`}
                sx={{
                  mt: { xs: `16px`, lg: `48px` },
                }}
              >
                <CustomStack full={row.length === 3 ? `false` : undefined}>
                  {row.map((course) => (
                    <CourseContainer key={course.slug}>
                      <CourseContent {...(course as any)} />
                    </CourseContainer>
                  ))}
                </CustomStack>
              </Box>
            ))}
          </Container>
        </Box>
        {couponCourses && couponCourses.length > 0 && (
          <Box
            sx={{
              mt: {
                xs: `72px`,
                lg: `136px`,
              },
            }}
          >
            <Container maxWidth="lg">
              <Typography
                component="h2"
                fontWeight={600}
                sx={{
                  fontSize: { xs: `24px`, lg: `48px` },
                  lineHeight: { xs: `29px`, lg: `56px` },
                }}
              >
                Coupon e sconti <span className="brand-text">riscattabili</span>
              </Typography>

              <Box
                sx={{
                  mt: {
                    xs: `12px`,
                    lg: `18px`,
                  },
                  maxWidth: `537px`,
                }}
              >
                <Typography
                  fontWeight={400}
                  color="grey.6"
                  sx={{
                    fontSize: {
                      xs: `14px`,
                      lg: `16px`,
                    },
                    lineHeight: {
                      xs: `18px`,
                      lg: `21px`,
                    },
                  }}
                >
                  Qui puoi trovare una lista dei coupon dei nostri corsi, il
                  loro stato, prezzo e validità. Approfittane e riscatta a
                  prezzo scontato il tuo corso.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: {
                    xs: `24px`,
                    lg: `36px`,
                  },
                }}
              >
                {couponCourses.map((corso) =>
                  corso.titolo &&
                  corso.copertina &&
                  corso.prezzo &&
                  corso.promoLink &&
                  corso.updatedAt ? (
                    <Box
                      key={corso.titolo}
                      sx={{
                        mb: `12px`,
                      }}
                    >
                      <CourseBanner
                        title={corso.titolo}
                        img={corso.copertina}
                        prezzo={corso.prezzo}
                        link={corso.promoLink}
                        date={corso.updatedAt}
                      />
                    </Box>
                  ) : null
                )}
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export const Head = ({ pageContext }: PageProps<unknown, ContextProps>) => {
  const { description, name, alias } = pageContext
  const breadcrumbs = React.useMemo(
    () => [
      { text: `Home`, link: `/` },
      {
        text: `Corsi per ${alias || name}`,
        link: `/corsi/${name.toLowerCase()}/`,
      },
    ],
    [alias, name]
  )
  return (
    <>
      <MetaDecorator
        metaTitle={`Corsi per ${alias || name}`}
        disableSlogan
        metaDescription={description}
      />
      <LinkHandler />
      <WebPageSchema
        title={`Corsi per ${alias || name}`}
        description={description}
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}

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
        promoLink
        slug
        livello
        updatedAt
        prezzo
        oreDiLezione
        riassunto {
          riassunto
        }
      }
    }
  }
`

export default Category
