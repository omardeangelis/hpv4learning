import { PageProps, graphql, HeadFC } from "gatsby"
import React from "react"
import Container from "@mui/material/Container"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ImageDataLike } from "gatsby-plugin-image"
import { Stack } from "@mui/system"
import { useLocation } from "@reach/router"
import Layout from "../components/shared/layout"
import { ArticleHero } from "../feature/blog"
import { ArticleBody } from "../feature/projects/components/ArticleBody"
import { BottomBanner, RoundedButton } from "../components/layout"
import SeoLink from "../components/shared/SeoLink"
import { convertToHHMMSS } from "../utils/helpers"
import { triggerGACustomEvent } from "../utils/tracking"
import {
  PaybleCourseInfoBanner,
  FreeBannerCourse,
  PayableBannerCourse,
} from "../feature/courses/components"
import { CourseBannerProvider } from "../feature/courses/context/CourseBanner"
import { ProjectBanner } from "../feature/projects/components"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import LinkHandler from "../components/SEO/components/LinkHandler"
import ArticleSchema from "../components/SEO/components/ArticleSchema"
import { HeroSpacer } from "../feature/navigation/v2/components/HeroSpacer"

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

const Article = ({ data }: PageProps<Queries.SingleArticleQuery>) => {
  const article = React.useMemo(() => data.article, [data])
  const course = React.useMemo(
    () => data?.article?.guida?.[0]?.corsi_correlati?.[0],
    [data]
  )
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
      <HeroSpacer />
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
                  <ArticleHero {...article} />
                  <ArticleBody {...article} />
                </Box>
              </Box>
            </StyledBox>
          </Box>
          {course ? (
            <Box
              maxWidth="341px"
              width="100%"
              sx={{
                height: `fit-content`,
                position: `sticky`,
                top: { xs: `unset`, lg: `10rem` },
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
                      (course?.recensioni as number)
                    }
                    durata={
                      data.udemyPaidCourse?.courseHours ||
                      (course.oreDiLezione as number)
                    }
                    progetti={course?.progetti?.length as number}
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
      <Box
        sx={{
          mt: { xs: `48px`, lg: `96px` },
        }}
      >
        <BottomBanner
          position="relative"
          overflow="hidden"
          title={
            <Typography
              color="white"
              fontSize={[`24px`, `34px`]}
              lineHeight={[`29px`, `39px`]}
              textAlign="center"
              fontWeight={600}
            >
              Scopri la nostra guida completa su{` `}
              <span className="brand-text">
                {article?.guida?.[0]?.argomento}
                {` `}
              </span>
            </Typography>
          }
          sx={{
            backgroundColor: `purple.900`,
          }}
        >
          <Typography
            width="100%"
            fontSize="21px"
            lineHeight="24px"
            color="gray.200"
            textAlign="center"
            sx={{
              maxWidth: { xs: `unset`, lg: `611px` },
            }}
          >
            {article?.guida?.[0]?.metaDescription}
          </Typography>
          <SeoLink
            link={`/guide/${article?.guida?.[0]?.slug}/`}
            isExternal={false}
          >
            <RoundedButton
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: `30px`,
                width: { xs: `100%`, md: `unset` },
              }}
            >
              Leggi
            </RoundedButton>
          </SeoLink>
        </BottomBanner>
      </Box>
    </Layout>
  )
}

export const Head: HeadFC<Queries.SingleArticleQuery> = ({ data }) => {
  const article = data?.article
  const [guida] = React.useMemo(() => article?.guida, [article]) || []
  const { pathname } = useLocation()

  const breadcrumbs = React.useMemo(
    () => [
      {
        text: `Home`,
        link: `/`,
      },
      {
        text: guida?.title || `Guide`,
        link: `/guide/${guida?.slug}/`,
      },
      {
        text: article?.titolo as string,
        link: pathname,
      },
    ],
    [article, guida, pathname]
  )

  return (
    <>
      <MetaDecorator
        metaTitle={article?.titolo as string}
        metaDescription={article?.meta_description as string}
        disableSlogan
      />
      <ArticleSchema
        title={article?.titolo as string}
        description={article?.meta_description as string}
        breadcrumbs={breadcrumbs}
        image={article?.copertina?.file?.url as string}
        imageAltText={article?.titolo as string}
        publishDate={article?.createdAt as string}
        modifiedDate={article?.updatedAt as string}
        authorName="@hpv4learning"
      />
      <LinkHandler />
    </>
  )
}

export default Article

export const query = graphql`
  query SingleArticle($id: String!, $udemyCourseId: Int!) {
    article: contentfulArticolo(id: { eq: $id }) {
      id
      titolo
      slug
      ordine
      meta_title
      meta_description
      createdAt
      updatedAt
      guida {
        title
        metaDescription
        slug
        argomento
        copertina {
          gatsbyImageData
        }
        corsi_correlati {
          slug
          isFree
          promoLink
          livello
          oreDiLezione
          prezzo
          recensioni
          progetti {
            id
          }
          categoria
          titolo
          copertina {
            gatsbyImageData
          }
        }
      }
      copertina {
        gatsbyImageData
        file {
          url
        }
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
