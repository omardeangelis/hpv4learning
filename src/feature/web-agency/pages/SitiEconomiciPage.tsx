import React from "react"
import {
  Box,
  Button,
  Container,
  Heading,
  ResponsiveContainer,
  VStack,
} from "old-ui"
import { navigate } from "gatsby"
import Layout from "../../../components/shared/layout"
import { Hero } from "../components/economici/Hero"
import { ServiceList } from "../components/economici/ServiceList"
import { AwarenessSection } from "../components/economici/AwarenessSection"
import { CreativitySection } from "../components/economici/CreativitySection"
import { serviceSpacer } from "../style/economici/service.css"
import { semiEllipse, semiTopEllipse } from "../style/economici/creativity.css"

export const SitiEconomiciPage = () => (
  <Layout>
    <Box
      background="orange10"
      position="relative"
      style={{
        overflow: `hidden`,
      }}
    >
      <Hero />
      <Box position="relative">
        <Box
          className={semiTopEllipse}
          background="yellow50"
          style={{
            transform: `translateY(30%) translateX(-10%)`,
          }}
        />
        <Box
          __zIndex={2}
          background="yellow50"
          style={{
            zIndex: 2,
          }}
          py={{
            mobile: 32,
            md: 64,
          }}
        >
          <ResponsiveContainer variant="lg">
            <ServiceList />
          </ResponsiveContainer>
        </Box>
        <Box
          className={semiEllipse}
          background="yellow50"
          style={{
            transform: `rotate(180deg) translateY(30%) translateX(10%)`,
          }}
        />
      </Box>

      <Box
        mt={{
          mobile: 48,
          md: 128,
        }}
      >
        <ResponsiveContainer variant="lg">
          <AwarenessSection />
          <Box className={serviceSpacer}>
            <CreativitySection />
          </Box>
        </ResponsiveContainer>
      </Box>
    </Box>
    <Box
      background="purple600"
      py={{
        mobile: 48,
        md: 128,
      }}
    >
      <Container variant="lg">
        <Box
          background="white"
          borderRadius={32}
          p={{
            mobile: 32,
            md: 72,
          }}
        >
          <VStack
            spacing={{
              mobile: 16,
              md: 24,
            }}
            align="center"
            justify="center"
            sprinkles={{
              width: `full`,
            }}
          >
            <Heading
              variant="3xl"
              fontWeight={600}
              sprinkles={{
                textAlign: `center`,
                __maxWidth: `468px`,
              }}
            >
              Inizia con un sito economico
            </Heading>
            <Button
              onClick={() => navigate(`prenota`)}
              variant="purple"
              size="md"
            >
              Contattaci
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  </Layout>
)
