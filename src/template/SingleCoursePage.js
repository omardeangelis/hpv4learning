import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
//Global Component e Variables
import Layout from "../components/ui/navigation/layout";
import MetaDecorator from "../components/SEO/MetaDecorator";
//Utils
import { createBrandText, createRowText } from "../utils/helpers";
//Components
import Projects from "../components/Projects";
// import BgImageSection from "../components/ui/BgImageSection";
// import ContactSection from "../components/ContactSection";
import Video from "../components/ui/FrameVideo";
import CourseInfo from "../components/CourseInfo";
import ListSection from "../components/ui/ListSection";
import Insegnante from "../components/shared/Insegnante";
//Material UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
//Icons
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import { useMediaQuery, useTheme } from "@mui/material";
import { lineHeight } from "@mui/system";

//Material Styles

const SingleCoursePage = ({ data, location }) => {
  const { contentfulCorsi: corso } = data;
  const projectRef = useRef(null);
  const { search } = location;
  const scrollToProjects = search && search.split("=")[1];
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (projectRef.current && scrollToProjects) {
      projectRef.current.scrollIntoView();
    }
  }, [scrollToProjects]);

  return (
    <Layout>
      <MetaDecorator
        title={createRowText(corso.titolo)}
        desc={corso.riassunto.childMarkdownRemark.excerpt}
        keywords={[...corso.concetti, ...corso.requisiti, ...corso.target]}
        image={corso.copertina.file.url}
      ></MetaDecorator>
      <Box>
        <Container maxWidth='lg'>
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
        </Container>
        <Box
          sx={{
            mt: { xs: "48px", lg: "96px" },
          }}
        >
          <Container maxWidth='lg' component='section'>
            <CourseInfo
              livello={corso.livello}
              oreDiLezione={corso.oreDiLezione}
              lezioni={corso.lezioni}
            />
            <Box
              sx={{
                mt: { xs: "8px", lg: "8px" },
              }}
            >
              <Video video={corso.videoLink} />
            </Box>
          </Container>
        </Box>
        {corso.categoria !== "free" && (
          <Box
            sx={{
              mt: { xs: "24px", lg: "36px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              size={sm ? "medium" : "large"}
              variant='contained'
              color='primary'
            >
              Acquista
            </Button>
          </Box>
        )}
        {/* Descrizione del corso */}
        <Box
          sx={{
            mt: { xs: "48px", lg: "96px" },
          }}
        >
          <Container maxWidth='lg'>
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
                  fontSize: { xs: "18px", lg: "36px" },
                  lineHeight: { xs: "24px", lg: "39px" },
                }}
              >
                {corso.sottotitolo}
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "unset", lg: "712px" },
                mt: { xs: "12px", lg: "24" },
              }}
            >
              <Typography
                color='grey.500'
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "19px", lg: "22px" },
                }}
                dangerouslySetInnerHTML={{
                  __html: corso.descrizione.childMarkdownRemark.html,
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Liste di Requisiti e Concetti del corso */}
        <Box
          component='section'
          sx={{
            mt: { xs: "36px", lg: "72px" },
          }}
        >
          <Container maxWidth='lg'>
            <Box>
              <ListSection
                title='Che Cosa'
                titleUnderline='Imparerai'
                icon={<DoneIcon color='primary' />}
                list={corso.concetti}
              />
            </Box>
            <Box
              sx={{
                mt: { xs: "24px", lg: "34px" },
              }}
            >
              <ListSection
                title='A chi si'
                titleUnderline='rivolge'
                icon={<PersonIcon color='primary' />}
                list={corso.target}
              />
            </Box>
            <Box
              sx={{
                mt: { xs: "24px", lg: "34px" },
              }}
            >
              <ListSection
                title='Requisiti'
                titleUnderline='Minimi'
                icon={<ArrowRightIcon color='primary' />}
                list={corso.requisiti}
              />
            </Box>
          </Container>
        </Box>
        {corso.categoria !== "free" && (
          <Box
            sx={{
              mt: { xs: "12px", lg: "24px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              size={sm ? "medium" : "large"}
              variant='contained'
              color='primary'
            >
              Acquista
            </Button>
          </Box>
        )}

        <Container maxWidth='lg'>
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
        </Container>

        <Box
          sx={{
            mt: { xs: "72px", lg: "96px" },
          }}
        >
          {corso.progetti && corso?.introduzioneProgetti && (
            <Container maxWidth='lg' innerRef={projectRef}>
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
                    __html: corso.introduzioneProgetti.childMarkdownRemark.html,
                  }}
                ></Typography>
              </Box>
              <Box mt='24px'>
                <Projects data={corso.progetti} />
              </Box>
              {corso.categoria !== "free" && (
                <Box
                  sx={{
                    mt: { xs: "12px", lg: "24px" },
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    size={sm ? "medium" : "large"}
                    variant='contained'
                    color='primary'
                  >
                    Acquista
                  </Button>
                </Box>
              )}
            </Container>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query SingleCoursePage($slug: String) {
    contentfulCorsi(slug: { eq: $slug }) {
      categoria
      idCorso
      lezioni
      livello
      slug
      oreDiLezione
      prezzo
      sottotitolo
      titolo
      trailer
      udemyUrl
      videoLink
      target
      couponCorso
      couponLink
      concetti
      insegnante {
        nome
        cognome
        professione
        img {
          gatsbyImageData
        }
        bio {
          bio
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
        childMarkdownRemark {
          excerpt(pruneLength: 158)
        }
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
