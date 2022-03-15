import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
//Global Component e Variables
import Layout from "../components/ui/navigation/layout";
//@ts-ignore
import MetaDecorator from "../components/SEO/MetaDecorator";
//Utils
import { createBrandText, createRowText } from "../utils/helpers";
//Components
import Projects from "../components/Projects";
// import BgImageSection from "../components/ui/BgImageSection";
// import ContactSection from "../components/ContactSection";
import Video from "../components/ui/FrameVideo";
import { CourseInfo, ResponsiveInfoBox } from "../components/CourseInfo";
import CourseCoupon from "../components/coupon/CourseCoupon";
import ListSection from "../components/ui/ListSection";
import Insegnante from "../components/shared/Insegnante";
//Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//Icons
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import { SingleCourseProps } from "../types/course";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const StyledContainer = styled(Box)`
  padding: 0px 0px;

  @media screen and (min-width: 1024px) {
    max-width: 887px;
    padding-right: 84px;
  }
`;

const FlexContainer = styled(Container)`
  display: block;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StyledBox = styled(Box)`
  strong {
    color: var(--purple-400);
  }
`;

const TextWrapper = styled.div`
  h2 {
    font-size: 18px;
    line-height: 22px;
    margin: 8px 0px;
  }

  @media screen and (min-width: 767px) {
    h2 {
      font-size: 21px;
      line-height: 24px;
      margin: 12px 0px;
    }
  }
`;

type Props = {
  data: {
    contentfulCorsi: SingleCourseProps;
  };
  location: {
    search: string;
  };
};

const SingleCoursePage = ({ data, location }: Props) => {
  const { contentfulCorsi: corso } = data;
  const projectRef = useRef<null | HTMLDivElement>(null);
  const { search } = location;
  const scrollToProjects = search && search.split("=")[1];

  useEffect(() => {
    if (projectRef.current && scrollToProjects) {
      projectRef.current.scrollIntoView();
    }
  }, [scrollToProjects]);

  console.log(
    corso.updatedAt,

    dayjs().isAfter(dayjs(corso.updatedAt).add(0, "day"), "day")
  );

  return (
    <Layout>
      <MetaDecorator
        title={createRowText(corso.titolo)}
        desc={corso.riassunto.riassunto}
        keywords={[...corso.concetti, ...corso.requisiti, ...corso.target]}
        // image={corso && corso?.copertina?.file.url}
      ></MetaDecorator>
      <FlexContainer maxWidth='lg'>
        <StyledBox>
          <StyledContainer>
            {/* Titolo e Sottotiolo */}
            <Box
              component='div'
              sx={{
                mt: { xs: "48px", lg: "96px" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "36px", lg: "72px" },
                    lineHeight: { xs: "39px", lg: "64px" },
                  }}
                  component='h1'
                  textAlign='center'
                  fontWeight={700}
                  dangerouslySetInnerHTML={{
                    __html: createBrandText(corso.titolo),
                  }}
                />
              </Box>
            </Box>
          </StyledContainer>
          <Box
            sx={{
              mt: { xs: "48px", lg: "96px" },
            }}
          >
            <StyledContainer component='section'>
              <Box
                sx={{
                  mt: { xs: "8px", lg: "8px" },
                }}
              >
                <Video video={corso.videoLink} />
              </Box>
            </StyledContainer>
          </Box>

          <Box
            sx={{
              display: { xs: "block", lg: "none" },
              mt: "24px",
            }}
          >
            <ResponsiveInfoBox
              livello={corso.livello}
              recensioni={corso.recensioni}
              durata={corso.oreDiLezione}
              progetti={corso?.progetti?.length || 0}
              lezioni={corso.lezioni}
              link={corso.udemyUrl && corso.udemyUrl}
              tipologia={corso.categoria}
            />
          </Box>

          <Box
            sx={{
              mt: { xs: "48px", lg: "96px" },
            }}
          >
            <StyledContainer>
              <Box
                sx={{
                  maxWidth: { xs: "unset", lg: "712px" },
                }}
              >
                <Typography
                  component='h2'
                  fontWeight={500}
                  color='gray.700'
                  sx={{
                    fontSize: { xs: "21px", lg: "36px" },
                    lineHeight: { xs: "28px", lg: "39px" },
                  }}
                >
                  {corso.sottotitolo}
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: { xs: "unset", lg: "712px" },
                  mt: { xs: "12px", lg: "24px" },
                }}
              >
                <TextWrapper>
                  <Typography
                    color='grey.500'
                    fontWeight={300}
                    sx={{
                      fontSize: { xs: "16px", lg: "16px" },
                      lineHeight: { xs: "24px", lg: "24px" },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: corso.descrizione.childMarkdownRemark.html,
                    }}
                  />
                </TextWrapper>
              </Box>
            </StyledContainer>
          </Box>

          {/* Liste di Requisiti e Concetti del corso */}
          <Box
            component='section'
            sx={{
              mt: { xs: "36px", lg: "72px" },
            }}
          >
            <StyledContainer>
              <Box>
                <ListSection
                  title='Che Cosa Imparerai'
                  icon={
                    <DoneIcon
                      sx={{
                        color: "purple.400",
                      }}
                    />
                  }
                  list={corso.concetti}
                />
              </Box>
              <Box
                sx={{
                  mt: { xs: "24px", lg: "34px" },
                }}
              >
                <ListSection
                  title='A chi si rivolge'
                  icon={
                    <PersonIcon
                      sx={{
                        color: "purple.400",
                      }}
                    />
                  }
                  list={corso.target}
                />
              </Box>
              <Box
                sx={{
                  mt: { xs: "24px", lg: "34px" },
                }}
              >
                <ListSection
                  title='Requisiti Minimi'
                  icon={
                    <ArrowRightIcon
                      sx={{
                        color: "purple.400",
                      }}
                    />
                  }
                  list={corso.requisiti}
                />
              </Box>
            </StyledContainer>
          </Box>
          <StyledContainer>
            <Box
              sx={{
                mt: { xs: "48px", lg: "72px" },
              }}
            >
              <Typography
                color='purple.400'
                fontWeight={500}
                sx={{
                  fontSize: { xs: "24px", lg: "36px" },
                }}
              >
                Insegnanti
              </Typography>
              {data.contentfulCorsi.insegnante.map((insegnante) => {
                return (
                  <Box
                    sx={{
                      mt: { xs: "24px", lg: "48px" },
                    }}
                  >
                    <Insegnante {...insegnante} />
                  </Box>
                );
              })}
            </Box>
          </StyledContainer>

          <Box
            sx={{
              mt: { xs: "72px", lg: "96px" },
            }}
          >
            {corso.progetti && corso?.introduzioneProgetti && (
              <StyledContainer ref={projectRef}>
                <Typography
                  color='purple.400'
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: "36px", lg: "56px" },
                  }}
                >
                  Progetti
                </Typography>
                <Box
                  sx={{
                    mt: { xs: "16px", lg: "24px" },
                  }}
                >
                  <Typography
                    color={"grey.500"}
                    sx={{
                      fontSize: { xs: "14px", lg: "16px" },
                      lineHeight: { xs: "19px", lg: "22px" },
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        corso.introduzioneProgetti.childMarkdownRemark.html,
                    }}
                  ></Typography>
                </Box>
                <Box mt='24px'>
                  <Projects data={corso.progetti} />
                </Box>
              </StyledContainer>
            )}
          </Box>
        </StyledBox>
        <Box
          maxWidth='261px'
          sx={{
            mt: { xs: "48px", lg: "96px" },
            height: "fit-content",
            position: "sticky",
            top: "96px",
          }}
        >
          <Box>
            <CourseInfo
              livello={corso.livello}
              recensioni={corso.recensioni}
              durata={corso.oreDiLezione}
              progetti={corso?.progetti?.length || 0}
              lezioni={corso.lezioni}
              lastUpdate={corso.lastUpdate.toString()}
              categoria={
                corso.category.filter(
                  (el) => el.name.toLowerCase() !== "gratuiti"
                )[0].name as string
              }
              tipologia={corso.categoria}
              link={corso.udemyUrl}
            />
            {corso.categoria.toLowerCase() === "free" &&
            corso.couponLink ? null : (
              <CourseCoupon
                link={corso.couponLink}
                prezzo={corso.prezzo}
                isDisabled={dayjs().isAfter(
                  dayjs(corso.updatedAt).add(30, "day"),
                  "day"
                )}
              />
            )}
          </Box>
        </Box>
      </FlexContainer>
    </Layout>
  );
};

export const query = graphql`
  query SingleCoursePage($slug: String) {
    contentfulCorsi(slug: { eq: $slug }) {
      category {
        name
      }
      recensioni
      lastUpdate
      categoria
      idCorso
      lezioni
      livello
      slug
      oreDiLezione
      prezzo
      sottotitolo
      titolo
      udemyUrl
      videoLink
      target
      couponCorso
      couponLink
      concetti
      updatedAt
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
        childMarkdownRemark {
          html
        }
      }
      copertina {
        gatsbyImageData
        file {
          url
        }
      }
      introduzioneProgetti {
        childMarkdownRemark {
          html
        }
      }
      progetti {
        titolo
        url
        ordine
        copertina {
          gatsbyImageData
        }
        descrizione {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default SingleCoursePage;
