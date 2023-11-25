import React from "react"
import {
  Box,
  Button,
  Container,
  Heading,
  ResponsiveContainer,
  Text,
  VStack,
} from "old-ui"
import Layout from "../../../components/shared/layout"
import { Hero } from "../components/home/Hero"
import Services from "../components/home/Services"
import { Method } from "../components/home/Method"
import { Features } from "../components/home/Features"
import { PartnerSection } from "../components/home/PartnerSection"
import { useContactForm } from "../context/FormContext"
import { HeroSpacer } from "../../navigation/v2/components/HeroSpacer"

export const WebAgencyHomePage = () => {
  const { open } = useContactForm()
  return (
    <Layout>
      <HeroSpacer />
      <Box
        mt={{
          mobile: 12,
          md: 24,
        }}
      >
        <ResponsiveContainer variant="xl-full">
          <Hero />
        </ResponsiveContainer>
      </Box>
      <Box
        mt={{
          mobile: 48,
          md: 128,
        }}
      >
        <Container variant="xl" as="section">
          <Text
            as="h2"
            fontWeight={600}
            variant={{
              mobile: `2xl`,
              md: `4xl`,
              lg: `7xl`,
            }}
          >
            I nostri servizi
          </Text>
        </Container>
        <Box
          mt={{
            mobile: 24,
            md: 48,
          }}
        >
          <ResponsiveContainer variant="xl-full">
            <Services />
          </ResponsiveContainer>
        </Box>
      </Box>
      <Box
        mt={{
          mobile: 48,
          md: 128,
        }}
      >
        <Container variant="xl" as="section">
          <Method />
        </Container>
      </Box>
      <Box
        mt={{
          mobile: 48,
          md: 128,
        }}
        __background="linear-gradient(180deg, #F1EBFF 0%, rgba(250, 247, 255, 0.53) 100%)"
        borderRadius={32}
      >
        <Box
          height={{
            mobile: 24,
            md: 64,
          }}
          width="full"
        />
        <Container variant="xl" as="section">
          <VStack
            spacing={32}
            align="flex-start"
            sprinkles={{
              width: `full`,
            }}
          >
            <Text
              as="h2"
              fontWeight={600}
              variant={{
                mobile: `2xl`,
                md: `4xl`,
                lg: `7xl`,
              }}
            >
              Le Nostre Specialità
            </Text>
            <Features />
          </VStack>
        </Container>
        <Box
          mt={{
            mobile: 48,
            md: 128,
          }}
        >
          <Container variant="xl">
            <PartnerSection />
          </Container>
        </Box>
        <Box
          height={{
            mobile: 48,
            md: 128,
          }}
          width="full"
        />
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
                Costruiamo rete collabora con noi{` `}
              </Heading>
              <Button onClick={open} variant="purple" size="md">
                Contattaci
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
