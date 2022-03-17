import React from "react";
//Global e Seo
import Layout from "../components/ui/navigation/layout";
//@ts-ignore
import MetaDecorator from "../components/SEO/MetaDecorator";
//Utils
import ComunityBanner from "../components/banner/ComunityBanner";
import Container from "@mui/material/Container/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//Gatsby
import { graphql } from "gatsby";
import Insegnante from "../components/shared/Insegnante";
import { InsegnanteProps } from "../types/course";

const AboutPage = ({
  data,
}: {
  data: { allContentfulInsegnante: { nodes: InsegnanteProps[] } };
}) => {
  const insegnanti = data.allContentfulInsegnante.nodes;
  return (
    <Layout>
      <MetaDecorator
        title='Chi siamo'
        desc={
          "La storia dei Nostri insegnanti e le competenze che insegnano nei loro videocorsi"
        }
        keywords={[
          "migliori insegnanti",
          "migliori videocorsi",
          "migliori corsi videomaking",
          "migliori corsi di programmazione",
          "videocorso di react",
          "videocorsi competenze digitali",
          "videocorsi in italiano di programmazione",
          "videocorsi in italiano di javascript",
          "videocorso videomaker",
          "react",
          "html",
          "css",
          "javascript",
          "frontend",
        ]}
      />
      <Box
        sx={{
          mt: { xs: "48px", lg: "96px" },
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            component='h1'
            fontWeight={700}
            sx={{
              fontSize: { xs: "44px", lg: "72px" },
              lineHeight: { xs: "49px", lg: "79px" },
            }}
          >
            I Nostri Insegnanti
          </Typography>
          <Box
            sx={{
              mt: { xs: "18px", lg: "24px" },
              maxWidth: "882px",
            }}
          >
            <Typography
              color='grey.700'
              component='p'
              fontWeight={400}
              sx={{
                fontSize: { xs: "18px", lg: "24px" },
                lineHeight: { xs: "24px", lg: "29px" },
              }}
            >
              Siamo professionisti, non professori. Insegnamo competenze,
              procedimenti, processi e metodologie che applichiamo giorno dopo
              giorno in campo lavorativo.
            </Typography>
          </Box>
          {insegnanti.map((insegnante) => {
            return (
              <Box
                key={insegnante.nome}
                sx={{
                  mt: { xs: "24px", lg: "48px" },
                }}
              >
                <Insegnante {...insegnante} />
              </Box>
            );
          })}
        </Container>
      </Box>
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

export const query = graphql`
  {
    allContentfulInsegnante {
      nodes {
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
    }
  }
`;

export default AboutPage;
