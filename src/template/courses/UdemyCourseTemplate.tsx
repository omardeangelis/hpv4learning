import { Avatar, Typography } from "@mui/material"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import { graphql, PageProps } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import DoneIcon from "@mui/icons-material/Done"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

import PersonIcon from "@mui/icons-material/Person"
import { Stack } from "@mui/system"
import isEmpty from "lodash/isEmpty"
import Layout from "../../components/shared/layout"
import {
  CourseAlignment,
  CourseSection,
  PreviewVideo,
  MarkdownH2,
  MarkdownH3,
  MarkdownP,
  ListSection,
  CustomStack,
  PaybleCourseInfoBanner,
  ReviewSection,
} from "../../feature/courses/components"
import { Projects } from "../../feature/projects/components"
import Insegnante from "../../components/shared/Insegnante"
import CourseContainer from "../../components/course/CourseContainer"
import CourseContent from "../../components/course/CourseContent"
import MetaDecorator from "../../components/SEO/components/MetaDecorator"
import { createBrandText, createRowText, isExpired } from "../../utils/helpers"
import LinkHandler from "../../components/SEO/components/LinkHandler"
import CourseSchema from "../../components/SEO/components/CourseSchema"
import CourseCoupon from "../../components/coupon/CourseCoupon"
import { BorderBox } from "../../components/layout"
import { createStarReview } from "../../utils/general"

const UdemyCourseTemplate: React.FC<
  PageProps<Queries.UdemyCoursePageQuery>
> = ({ data }) => {
  const { contentfulCorsi } = data
  const hasBanner = React.useMemo(
    () =>
      contentfulCorsi?.livello &&
      contentfulCorsi.oreDiLezione &&
      contentfulCorsi.recensioni &&
      contentfulCorsi.prezzo,
    [
      contentfulCorsi?.livello,
      contentfulCorsi?.oreDiLezione,
      contentfulCorsi?.prezzo,
      contentfulCorsi?.recensioni,
    ]
  )
  return (
    <Layout enableFooterPadding>
      <Container maxWidth="lg">
        <Box maxWidth="1200px" mx="auto">
          <Box
            sx={{
              maxWidth: { xs: `unset`, lg: `887px` },
              mt: { xs: `48px`, lg: `96px` },
            }}
          >
            <Typography
              component="h1"
              fontWeight={600}
              dangerouslySetInnerHTML={{
                __html: createBrandText(contentfulCorsi?.titolo) as string,
              }}
              sx={{
                fontSize: { xs: `36px`, lg: `56px` },
                lineHeight: { xs: `44px`, lg: `64px` },
              }}
            />
          </Box>
          <CourseAlignment
            sx={{
              mt: { xs: `24px`, lg: `48px` },
            }}
          >
            <CourseSection
              sx={{
                paddingRight: { xs: `0px`, lg: `84px` },
              }}
            >
              {contentfulCorsi?.videoLink ? (
                <PreviewVideo video={contentfulCorsi.videoLink} />
              ) : null}
              {hasBanner ? (
                <Box
                  sx={{
                    display: { xs: `block`, lg: `none` },
                    mt: { xs: `24px`, lg: `48px` },
                  }}
                >
                  <PaybleCourseInfoBanner
                    lezioni={data.udemyPaidCourse?.num_lectures as number}
                    livello={contentfulCorsi?.livello as string}
                    price={contentfulCorsi?.prezzo as number}
                    avgVote={
                      data.udemyPaidCourse?.rating ||
                      (contentfulCorsi?.recensioni as number)
                    }
                    durata={contentfulCorsi?.oreDiLezione as number}
                    progetti={contentfulCorsi?.progetti?.length}
                    students={data.udemyPaidCourse?.totalSubscribers as number}
                  />
                </Box>
              ) : null}
              {data.allUdemyReview.totalCount > 0 ? (
                <Box
                  sx={{
                    mt: { xs: `24px`, lg: `48px` },
                  }}
                >
                  <Typography
                    component="h2"
                    fontWeight={600}
                    color="gray.700"
                    sx={{
                      fontSize: { xs: `21px`, lg: `36px` },
                      lineHeight: { xs: `28px`, lg: `39px` },
                    }}
                  >
                    Le ultime recensioni
                  </Typography>
                  <ReviewSection
                    sx={{
                      mt: { xs: `16px`, lg: `24px` },
                    }}
                  >
                    {data.allUdemyReview.nodes.map((review) => (
                      <BorderBox
                        key={review.id}
                        borderRadius="16px"
                        width="100%"
                        sx={{
                          maxWidth: { xs: `unset`, lg: `274px` },
                        }}
                      >
                        <Box
                          sx={{
                            p: { xs: `24px`, lg: `16px` },
                          }}
                        >
                          <Stack direction="row" spacing="16px">
                            <Avatar
                              variant="circular"
                              sx={{
                                width: `34px`,
                                height: `34px`,
                              }}
                            >
                              {review.userName?.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography fontSize="16px" fontWeight={600}>
                                {review.userName}
                              </Typography>
                              <Box>
                                {createStarReview(review.rating as number)}
                              </Box>
                            </Box>
                          </Stack>
                          <Box mt="14px">
                            <Typography fontSize="12px" fontWeight={300}>
                              {review.content}
                            </Typography>
                          </Box>
                        </Box>
                      </BorderBox>
                    ))}
                  </ReviewSection>
                </Box>
              ) : null}

              <Box
                sx={{
                  mt: { xs: `24px`, lg: `48px` },
                }}
              >
                <Typography
                  component="h2"
                  fontWeight={600}
                  color="gray.700"
                  sx={{
                    fontSize: { xs: `21px`, lg: `36px` },
                    lineHeight: { xs: `28px`, lg: `39px` },
                  }}
                >
                  {contentfulCorsi?.sottotitolo}
                </Typography>
              </Box>

              {contentfulCorsi?.descrizione?.descrizione ? (
                <Box
                  sx={{
                    mt: { xs: `16px`, lg: `24px` },
                  }}
                >
                  <ReactMarkdown
                    components={{
                      h2: MarkdownH2,
                      h3: MarkdownH3,
                      p: MarkdownP,
                    }}
                  >
                    {contentfulCorsi?.descrizione.descrizione}
                  </ReactMarkdown>
                </Box>
              ) : null}
              <Stack
                spacing={{ xs: `24px`, lg: `48px` }}
                sx={{
                  mt: {
                    xs: `24px`,
                    lg: `48px`,
                  },
                }}
              >
                {contentfulCorsi?.concetti ? (
                  <ListSection
                    title="Che Cosa Imparerai"
                    icon={
                      <DoneIcon
                        sx={{
                          color: `purple.400`,
                        }}
                      />
                    }
                    list={contentfulCorsi?.concetti}
                  />
                ) : null}
                {contentfulCorsi?.target ? (
                  <ListSection
                    title="A chi si rivolge"
                    icon={
                      <PersonIcon
                        sx={{
                          color: `purple.400`,
                        }}
                      />
                    }
                    list={contentfulCorsi?.target}
                  />
                ) : null}
                {contentfulCorsi?.requisiti ? (
                  <ListSection
                    title="Requisiti Minimi"
                    icon={
                      <ArrowRightIcon
                        sx={{
                          color: `purple.400`,
                        }}
                      />
                    }
                    list={contentfulCorsi?.requisiti}
                  />
                ) : null}
              </Stack>
              {!isEmpty(contentfulCorsi?.progetti) ? (
                <Box
                  sx={{
                    mt: { xs: `48px`, lg: `96px` },
                  }}
                >
                  <Typography
                    color="purple.400"
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: `36px`, lg: `56px` },
                    }}
                  >
                    Progetti
                  </Typography>
                  <Box
                    sx={{
                      mt: { xs: `16px`, lg: `24px` },
                    }}
                  >
                    {contentfulCorsi?.introduzioneProgetti
                      ?.introduzioneProgetti ? (
                      <ReactMarkdown
                        components={{
                          h2: MarkdownH2,
                          h3: MarkdownH3,
                          p: MarkdownP,
                        }}
                      >
                        {
                          contentfulCorsi?.introduzioneProgetti
                            ?.introduzioneProgetti
                        }
                      </ReactMarkdown>
                    ) : null}
                  </Box>
                </Box>
              ) : null}
              {contentfulCorsi?.progetti ? (
                <Box mt="24px">
                  <Projects
                    data={
                      contentfulCorsi.progetti as Queries.ContentfulProgetti[]
                    }
                  />
                </Box>
              ) : null}
              {data?.contentfulCorsi?.insegnante &&
              !isEmpty(data.contentfulCorsi?.insegnante) ? (
                <Box
                  sx={{
                    mt: { xs: `48px`, lg: `96px` },
                  }}
                >
                  <Typography
                    fontWeight={600}
                    component="h3"
                    sx={{
                      fontSize: { xs: `24px`, lg: `36px` },
                    }}
                  >
                    Insegnanti
                  </Typography>
                  {data.contentfulCorsi.insegnante.map((insegnante) => (
                    <Box
                      key={insegnante?.cognome}
                      sx={{
                        mt: { xs: `24px`, lg: `48px` },
                      }}
                    >
                      <Insegnante {...(insegnante as any)} />
                    </Box>
                  ))}
                </Box>
              ) : null}

              {data?.allContentfulCorsi?.nodes &&
                data?.allContentfulCorsi?.nodes.length > 0 && (
                  <Box
                    sx={{
                      mt: { xs: `96px`, lg: `136px` },
                    }}
                  >
                    <Typography
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: `24px`, lg: `34px` },
                      }}
                      component="h3"
                    >
                      Corsi Correlati
                    </Typography>
                    <Box
                      sx={{
                        mt: { xs: `24px`, lg: `36px` },
                      }}
                    >
                      <CustomStack full={false}>
                        {data.allContentfulCorsi.nodes.map((corso) => (
                          <CourseContainer key={corso.slug}>
                            <CourseContent {...(corso as any)} />
                          </CourseContainer>
                        ))}
                      </CustomStack>
                    </Box>
                  </Box>
                )}
            </CourseSection>
            {hasBanner ? (
              <Box
                maxWidth="341px"
                width="100%"
                sx={{
                  display: { xs: `none`, lg: `block` },
                  height: `fit-content`,
                  position: `sticky`,
                  top: `96px`,
                }}
              >
                <Box>
                  <PaybleCourseInfoBanner
                    lezioni={data.udemyPaidCourse?.num_lectures as number}
                    livello={contentfulCorsi?.livello as string}
                    price={contentfulCorsi?.prezzo as number}
                    avgVote={
                      data.udemyPaidCourse?.rating ||
                      (contentfulCorsi?.recensioni as number)
                    }
                    durata={data.udemyPaidCourse?.courseHours as number}
                    progetti={contentfulCorsi?.progetti?.length}
                    students={data.udemyPaidCourse?.totalSubscribers as number}
                  />
                  {contentfulCorsi?.promoLink &&
                  contentfulCorsi.prezzo &&
                  contentfulCorsi.updatedAt ? (
                    <CourseCoupon
                      link={contentfulCorsi?.promoLink}
                      prezzo={contentfulCorsi?.prezzo}
                      isDisabled={isExpired(
                        contentfulCorsi?.updatedAt as unknown as Date
                      )}
                    />
                  ) : null}
                </Box>
              </Box>
            ) : null}
          </CourseAlignment>
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = ({
  data,
  pageContext: { slug, categorySlug },
}: PageProps<
  Queries.UdemyCoursePageQuery,
  { slug: string; categorySlug: string }
>) => {
  const { contentfulCorsi: corso } = data

  const categoryName = React.useMemo(
    () =>
      corso?.category?.filter(
        (el) => el?.name?.toLowerCase() !== `gratuiti`
      )?.[0]?.name as string,
    [corso?.category]
  )

  const breadcrumbs = React.useMemo(
    () => [
      { text: `Home`, link: `/` },
      { text: categoryName, link: `/corsi/${categorySlug}/` },
      { text: corso?.titolo as string, link: `/${slug}/` },
    ],
    [categoryName, categorySlug, corso?.titolo, slug]
  )

  const creator = React.useMemo(() => {
    if (corso?.insegnante && corso?.insegnante.length > 1)
      return corso.insegnante.map((el) => el?.nome)
    return corso?.insegnante?.[0]?.nome
  }, [corso?.insegnante])
  return (
    <>
      <MetaDecorator
        metaTitle={createRowText(corso?.titolo as string)}
        metaDescription={corso?.riassunto?.riassunto as string}
        image={`https:${corso?.copertina?.file?.url}`}
      />
      <LinkHandler />
      <CourseSchema
        title={createRowText(corso?.titolo as any)}
        description={corso?.riassunto?.riassunto as any}
        image={`https:${corso?.copertina?.file?.url}` as string}
        imageAltText={createRowText(corso?.titolo as string)}
        creator={creator}
        about={categorySlug}
        rating={
          data.udemyPaidCourse?.rating?.toString() ||
          (corso?.recensioni?.toString() as string)
        }
        audienceType={corso?.target ?? []}
        isAccessibleForFree={false}
        breadcrumbs={breadcrumbs}
        coursePrerequisites={corso?.requisiti as any}
        recensioniRicevute={
          data.udemyPaidCourse?.num_reviews ||
          (corso?.recensioniRicevute as number)
        }
      />
    </>
  )
}

export default UdemyCourseTemplate

export const query = graphql`
  query UdemyCoursePage(
    $id: String!
    $course_id: Int!
    $categorySlug: String!
  ) {
    contentfulCorsi(id: { eq: $id }) {
      category {
        name
      }
      recensioni
      lastUpdate
      categoria
      provider
      isFree
      idCorso
      lezioni
      livello
      slug
      oreDiLezione
      prezzo
      sottotitolo
      titolo
      urlToBuy
      videoLink
      target
      couponCorso
      promoLink
      concetti
      updatedAt
      recensioniRicevute
      insegnante {
        nome
        cognome
        professione
        img {
          gatsbyImageData
        }
        bio {
          bio
          childMarkdownRemark {
            html
          }
        }
        corsi {
          titolo
          slug
          category {
            slug
          }
        }
      }
      requisiti
      riassunto {
        riassunto
      }
      descrizione {
        descrizione
      }
      copertina {
        gatsbyImageData
        file {
          url
        }
      }
      introduzioneProgetti {
        introduzioneProgetti
      }
      progetti {
        titolo
        slug
        articleTitle
        url
        ordine
        copertina {
          gatsbyImageData
        }
        project_category {
          title
          slug
        }
        descrizione {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulCorsi(
      filter: {
        category: { elemMatch: { slug: { eq: $categorySlug } } }
        id: { ne: $id }
      }
      sort: { fields: createdAt, order: DESC }
      limit: 2
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
        oreDiLezione
        riassunto {
          riassunto
        }
      }
    }
    udemyPaidCourse(courseId: { eq: $course_id }) {
      num_reviews
      num_lectures
      rating
      totalSubscribers
      courseHours
    }
    allUdemyReview(filter: { courseId: { eq: $course_id } }, limit: 3) {
      nodes {
        rating
        userName
        content
        id
      }
      totalCount
    }
  }
`
