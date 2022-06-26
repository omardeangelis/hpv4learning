import * as React from "react";
//Global Layoaut
import Layout from "../components/ui/navigation/layout";
import IndexInfo from "../components/IndexInfo";
import TopHeroContent from "../components/TopHeroContent";
import { faqs } from "../asset/faqsdata";
import {
  FaqContainer,
  FaqContent,
  FaqTitle,
  SingleFaq,
} from "../components/faq";
//Meta Title e SEO e Utils
import MetaDecorator from "../components/SEO/components/MetaDecorator";
import SeoLink from "../components/shared/SeoLink";
import LinkHandler from "../components/SEO/components/LinkHandler";
//Components
import Hero from "../components/ui/Hero";
//Material UI
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ComunityBanner from "../components/banner/ComunityBanner";
import CourseWall from "../components/course/CourseWall";
import { Button, Stack } from "@mui/material";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import { graphql, PageProps } from "gatsby";
import styled from "@emotion/styled";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import OrganizationSchema from "../components/SEO/components/OrganizationSchema";
import { HomeSection } from "../feature/projects/components";

const CustomStack = styled.div`
  .faq-image {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .faq-image {
      display: block;
    }

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const coursesPositionRef = React.useRef<null | HTMLDivElement>(null);
  const goToCourseSection = () => {
    if (!coursesPositionRef.current) {
      return;
    }
    coursesPositionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <MetaDecorator metaTitle='Home' />
      <LinkHandler />
      <OrganizationSchema />
      <Box
        sx={{
          mt: { xs: "48px", lg: "96px" },
        }}
      >
        <Container maxWidth='lg'>
          <Hero>
            <TopHeroContent fn={goToCourseSection} />
          </Hero>
        </Container>
      </Box>

      {/* Sezione con le card  */}
      <Box
        sx={{
          mt: { xs: "96px", lg: "136px" },
        }}
      >
        <IndexInfo />
      </Box>

      <Container
        maxWidth='lg'
        sx={{
          mt: { xs: "96px", lg: "136px" },
        }}
      >
        <Box component='section'>
          <Typography
            variant={"h3"}
            textAlign='center'
            sx={{
              fontSize: { xs: "36px", lg: "48px" },
              fontWeight: 600,
            }}
          >
            I nostri <span className='brand-text'>corsi</span>
          </Typography>
          <Box mt='34px' ref={coursesPositionRef}>
            <CourseWall />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          mt: { xs: "96px", lg: "136px" },
        }}
      >
        <ComunityBanner />
      </Box>

      <Box
        sx={{
          mt: { xs: "96px", lg: "136px" },
        }}
      >
        <Container maxWidth='lg'>
          <Box mx='auto'>
            <Box mx='auto' maxWidth='656px'>
              <Typography
                fontWeight={600}
                textAlign='center'
                component='h2'
                lineHeight={{
                  xs: "39px",
                  lg: "56px",
                }}
                fontSize={{
                  xs: "34px",
                  lg: "48px",
                }}
              >
                Impara realizzando dei progetti pratici
              </Typography>
            </Box>
            <Box
              mx='auto'
              maxWidth='656px'
              mt={{
                xs: "16px",
                lg: "24px",
              }}
            >
              <Typography
                fontWeight={400}
                textAlign='center'
                sx={{
                  color: "grey.600",
                }}
                lineHeight={{
                  xs: "20px",
                  lg: "29px",
                }}
                fontSize={{
                  xs: "18px",
                  lg: "24px",
                }}
              >
                Un giusto equilibrio tra pratica e teoria è il miglior modo per
                padroneggiare ogni concetto
              </Typography>
            </Box>
          </Box>

          <Stack
            alignItems='center'
            justifyContent='center'
            mt={{
              xs: "24px",
              lg: "34px",
            }}
          >
            <SeoLink isExternal={false} link='/progetti/'>
              <Button variant='contained' size='large'>
                Vedi tutti
              </Button>
            </SeoLink>
          </Stack>
        </Container>
        <Box
          mt={{
            xs: "36px",
            lg: "48px",
          }}
        >
          <HomeSection />
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: "96px", lg: "136px" },
        }}
      >
        <Container maxWidth='lg'>
          <CustomStack>
            <FaqContainer>
              <FaqTitle text={"Lavora con noi"} />

              <FaqContent
                sx={{
                  mt: { xs: "12px", lg: "18px" },
                }}
              >
                <Box maxWidth='646px'>
                  <Typography
                    color='gray.5'
                    fontWeight={300}
                    sx={{
                      fontSize: { xs: "16px", lg: "18px" },
                      lineHeight: { xs: "24px", lg: "24px" },
                    }}
                  >
                    Il nostro è un progetto in espansione, con una visione a
                    lungo termine che prevede oltre alla crescita della
                    community anche un perenne miglioramento dell'offerta
                    educativa.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: { xs: "8px", lg: "12px" },
                  }}
                >
                  <SeoLink isExternal={false} link={"/join-us/"}>
                    <Button
                      variant='text'
                      color='primary'
                      size='medium'
                      sx={{
                        pl: "0px",
                        "&:hover": {
                          background: "transparent",
                        },
                      }}
                      endIcon={
                        <ArrowRightAltSharpIcon
                          fontSize='small'
                          sx={{
                            color: "purple.400",
                          }}
                        />
                      }
                    >
                      Scopri di più
                    </Button>
                  </SeoLink>
                </Box>
                <Box
                  sx={{
                    mt: {
                      xs: "12px",
                      lg: "36px",
                    },
                  }}
                >
                  {faqs.map((faq) => {
                    return (
                      <Box
                        key={faq.title}
                        sx={{
                          mt: { xs: "12px", lg: "24px" },
                        }}
                      >
                        <SingleFaq
                          disableInject
                          title={faq.title}
                          description={faq.description}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </FaqContent>
            </FaqContainer>
            <Box maxWidth='384px' className='faq-image'>
              <GatsbyImage
                image={
                  getImage(
                    data?.file?.childImageSharp as unknown as ImageDataLike,
                  ) as IGatsbyImageData
                }
                alt='work with us image'
              />
            </Box>
          </CustomStack>
        </Container>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    file(relativePath: { eq: "work-with-us.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

export default IndexPage;
