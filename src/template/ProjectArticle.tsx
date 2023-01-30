import React from "react"
import { graphql, PageProps } from "gatsby"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { ImageDataLike } from "gatsby-plugin-image"
import Layout from "../components/shared/layout"
import {
  ArticleBody,
  ArticleHero,
  ProjectBanner,
  ArticleFooter,
} from "../feature/projects/components"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import { convertToHHMMSS, createRowText } from "../utils/helpers"
import ArticleSchema from "../components/SEO/components/ArticleSchema"
import LinkHandler from "../components/SEO/components/LinkHandler"
import { PaybleCourseInfoBanner } from "../feature/courses/components/InfoBox"
import {
  FreeBannerCourse,
  PayableBannerCourse,
} from "../feature/courses/components/NextCourseBanner"
import { CourseBannerProvider } from "../feature/courses/context/CourseBanner"
import { triggerGACustomEvent } from "../utils/tracking"

const FlexContainer = styled(Box)`
  display: block;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const StyledBox = styled(Box)`
  padding: 0px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 887px;
    padding-right: 84px;
  }
`

const ProjectArticle = ({ data }: PageProps<Queries.SingleProjectQuery>) => {
  const queryData = React.useMemo(() => data.project, [data])
  const course = React.useMemo(() => data?.project?.corsi?.[0], [data])
  const udemyPaidCourse = React.useMemo(() => data?.udemyPaidCourse, [data])

  const bannerCtx = React.useMemo(
    () => ({
      category: course?.categoria,
      title: course?.titolo,
      durata: `${convertToHHMMSS(course?.oreDiLezione as number, true)}h`,
      slug: course?.slug,
      image: course?.copertina?.gatsbyImageData as ImageDataLike,
      avgRating: udemyPaidCourse?.rating,
      students: udemyPaidCourse?.totalSubscribers,
      eventTrackerCallback: triggerGACustomEvent({
        event: `article_to_course`,
        content: course?.titolo,
      }),
    }),
    [
      course?.copertina,
      course?.oreDiLezione,
      course?.slug,
      course?.titolo,
      course?.categoria,
      udemyPaidCourse?.rating,
      udemyPaidCourse?.totalSubscribers,
    ]
  )

  return (
    <Layout>
      <Container sx={{ padding: `0px` }} maxWidth={`lg`}>
        <FlexContainer
          sx={{
            position: `relative`,
            alignItems: `flex-start`,
            justifyContent: `center`,
          }}
        >
          <Box>
            <StyledBox>
              <Box
                sx={{
                  mt: { xs: `48px`, lg: `96px` },
                }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: `unset`, lg: `1080px` },
                    margin: `auto`,
                  }}
                >
                  <ArticleHero {...queryData} />
                  <ArticleBody {...queryData} />
                </Box>
              </Box>
            </StyledBox>
            <ArticleFooter {...data} />
          </Box>
          {course ? (
            <Box
              maxWidth="341px"
              width="100%"
              sx={{
                height: `fit-content`,
                position: `sticky`,
                top: { xs: `unset`, lg: `96px` },
                bottom: { xs: `0`, lg: `unset` },
                marginTop: { xs: `unset`, lg: `96px` },
              }}
            >
              <Stack
                flexDirection="column"
                sx={{ display: { xs: `none`, lg: `block` } }}
              >
                <Box>
                  <PaybleCourseInfoBanner
                    lezioni={data.udemyPaidCourse?.num_lectures as number}
                    livello={course.livello as string}
                    price={course.prezzo as number}
                    avgVote={
                      data.udemyPaidCourse?.rating ||
                      (course.recensioni as number)
                    }
                    durata={
                      data.udemyPaidCourse?.courseHours ||
                      (course.oreDiLezione as number)
                    }
                    progetti={course.progetti?.length as number}
                    students={data.udemyPaidCourse?.totalSubscribers as number}
                  />
                </Box>

                <Box mt="24px">
                  <CourseBannerProvider value={bannerCtx}>
                    {course.isFree ? (
                      <FreeBannerCourse />
                    ) : (
                      <PayableBannerCourse />
                    )}
                  </CourseBannerProvider>
                </Box>
              </Stack>

              <Box sx={{ display: { xs: `unset`, lg: `none` } }}>
                <ProjectBanner
                  courseTitle={course?.titolo}
                  couponLink={course?.promoLink}
                  image={course?.copertina?.gatsbyImageData}
                />
              </Box>
            </Box>
          ) : null}
        </FlexContainer>
      </Container>
    </Layout>
  )
}

export const Head = ({ data }: PageProps<Queries.SingleProjectQuery>) => {
  const queryData = React.useMemo(() => data.project, [data])
  const breadcrumbs = React.useMemo(() => {
    const courseSlug = queryData?.project_category?.[0]?.slug
    const slug = queryData?.slug
    return [
      { text: `Home`, link: `/` },
      { text: `Progetti`, link: `/progetti/` },
      { text: `Progetti ${courseSlug}`, link: `/progetti/${courseSlug}/` },
      {
        text: queryData?.articleTitle,
        link: `/progetti/${courseSlug}/${slug}/`,
      },
    ]
  }, [queryData?.articleTitle, queryData?.project_category, queryData?.slug])
  return (
    <>
      <MetaDecorator
        metaTitle={createRowText(queryData?.articleTitle as any)}
        metaDescription={queryData?.metaDescription as any}
        image={queryData && (`https:${queryData?.copertina?.file?.url}` as any)}
      />
      <LinkHandler />
      <ArticleSchema
        title={createRowText(queryData?.articleTitle as any)}
        description={queryData?.descrizione?.descrizione as any}
        authorName="hpv4learning"
        breadcrumbs={breadcrumbs as any}
        image={queryData && (`https:${queryData?.copertina?.file?.url}` as any)}
        imageAltText={createRowText(queryData?.articleTitle as any)}
        modifiedDate={queryData?.updatedAt as any}
        publishDate={queryData?.createdAt as any}
      />
    </>
  )
}

export default ProjectArticle

export const query = graphql`
  query SingleProject(
    $id: String!
    $nextProjectOrder: Int!
    $udemyCourseId: Int!
    $courseId: String!
  ) {
    project: contentfulProgetti(id: { eq: $id }) {
      id
      titolo
      articleTitle
      slug
      metaDescription
      ordine
      url
      copertina {
        gatsbyImageData
        file {
          url
        }
      }
      descrizione {
        descrizione
      }
      body {
        body
        childMarkdownRemark {
          headings(depth: h2) {
            value
          }
          html
          rawMarkdownBody
          timeToRead
        }
      }
      createdAt
      updatedAt
      project_category {
        slug
      }
      linkGithub
      corsi {
        titolo
        prezzo
        promoLink
        slug
        isFree
        livello
        oreDiLezione
        recensioni
        categoria
        copertina {
          gatsbyImageData
        }
        progetti {
          titolo
        }
        nextCourse {
          slug
          descrizione {
            descrizione
          }
          copertina {
            gatsbyImageData
          }
        }
      }
    }
    nextProject: contentfulProgetti(
      ordine: { eq: $nextProjectOrder }
      corsi: { elemMatch: { id: { eq: $courseId } } }
    ) {
      articleTitle
      slug
      descrizione {
        descrizione
      }
      copertina {
        gatsbyImageData
      }
    }
    udemyPaidCourse(courseId: { eq: $udemyCourseId }) {
      num_reviews
      num_lectures
      rating
      totalSubscribers
      courseHours
    }
  }
`
