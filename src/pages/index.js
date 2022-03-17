import * as React from "react";
//Global Layoaut
import Layout from "../components/ui/navigation/layout";
import IndexInfo from "../components/IndexInfo";
import TopHeroContent from "../components/TopHeroContent";
//Meta Title e SEO e Utils
import MetaDecorator from "../components/SEO/MetaDecorator";
//Components
import Hero from "../components/ui/Hero";
//Gastby

//Material UI
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ComunityBanner from "../components/banner/ComunityBanner";
import CourseWall from "../components/course/CourseWall";

const IndexPage = () => {
  const coursesPositionRef = React.useRef(null);
  const goToCourseSection = () => {
    coursesPositionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <MetaDecorator type={"website"} title='Home'></MetaDecorator>
      <Box
        sx={{
          mt: { xs: "48px", lg: "96px" },
        }}
      >
        <Container maxWidth='lg'>
          {/* Top Hero Image ** Manca Immagine di Background */}
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
    </Layout>
  );
};

export default IndexPage;
