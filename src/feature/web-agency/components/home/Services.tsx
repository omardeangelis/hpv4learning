import { Body, Box, Button, HStack, Stack, Text, VStack } from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import {
  hiddenImgfromMd,
  safariServiceCardHeightFix,
  serviceGrid,
} from "../../style/home/services.css"
import {
  Card,
  CardContent,
  CardImage,
} from "../../../../components/v2/cards/base"
import { useContactForm } from "../../context/FormContext"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { webAgencyEvents } from "../../../../services/tracking/constant/web_agency"

const Services = () => {
  const { open } = useContactForm()
  const { gaTracker } = useGATracking() || {}
  const handleServiceClick = React.useCallback(
    ({ content, isValidRoute }: { content: string; isValidRoute?: true }) => {
      gaTracker?.sendEvent({
        eventName: webAgencyEvents.agency_service_view,
        payload: {
          content,
        },
      })
      if (isValidRoute) {
        return navigate(`siti-economici/`)
      }
    },
    [gaTracker]
  )

  const handleContactClick = React.useCallback(() => {
    gaTracker?.sendEvent({
      eventName: webAgencyEvents.agency_service_contact,
    })
    open()
  }, [gaTracker, open])
  return (
    <VStack align="flex-start" spacing={48} sprinkles={{ width: `full` }}>
      <Box className={serviceGrid}>
        <Card
          disableHover
          isAnimated
          background="purple10"
          className={safariServiceCardHeightFix}
          onClick={() => handleServiceClick({ content: `gestionale` })}
        >
          <CardContent
            spacing={12}
            direction="column"
            align={`flex-start`}
            sprinkles={{
              height: `full`,
            }}
          >
            <Text
              as="h3"
              fontWeight={500}
              variant={{
                mobile: `xl`,
                md: `2xl`,
              }}
            >
              Gestionali
            </Text>
            <Body variant="lg">
              Ottieni una maggiore efficienza e controllo grazie ad una
              piattaforma progettata per gestire e monitorare le operazioni
              interne: come inventario, risorse umane, contabilità e altre
              attività aziendali.
            </Body>
            <CardImage className={hiddenImgfromMd}>
              <StaticImage
                src="../../images/getionale.png"
                alt="Gestionale"
                placeholder="blurred"
              />
            </CardImage>
          </CardContent>
        </Card>
        <VStack
          spacing={8}
          align="stretch"
          sprinkles={{
            height: `full`,
          }}
        >
          <Card
            isAnimated
            background="purple20"
            onClick={
              () =>
                handleServiceClick({
                  content: `siti-economici`,
                  isValidRoute: true,
                })
              // navigate(`siti-economici/`)
            }
          >
            <CardContent
              spacing={12}
              direction="column"
              align={`flex-start`}
              sprinkles={{
                height: `full`,
              }}
            >
              <Text
                as="h3"
                fontWeight={500}
                variant={{
                  mobile: `xl`,
                  md: `2xl`,
                }}
              >
                Siti Economici{` `}
              </Text>
              <Body variant="lg">
                Soluzioni su misure per piccole aziende, privati e business che
                muovono i primi passi
              </Body>
            </CardContent>
          </Card>
          <Card
            disableHover
            isAnimated
            background="purple10"
            style={{
              flex: 1,
            }}
            onClick={() => handleServiceClick({ content: `ecommerce` })}
          >
            <CardContent
              spacing={12}
              direction="column"
              align={`flex-start`}
              sprinkles={{
                height: `full`,
              }}
            >
              <Text
                as="h3"
                fontWeight={500}
                variant={{
                  mobile: `xl`,
                  md: `2xl`,
                }}
              >
                Ecommerce
              </Text>
              <Body variant="lg">
                Completa il tuo business con uno store online in cui vendere i
                tuoi prodotti
              </Body>
              <CardImage>
                <StaticImage
                  src="../../images/ecommerce.png"
                  alt="Gestionale"
                  placeholder="blurred"
                />
              </CardImage>
            </CardContent>
          </Card>
        </VStack>
        <Stack
          direction={{
            mobile: `column-reverse`,
            md: `column`,
          }}
          spacing={8}
          align="stretch"
          sprinkles={{
            height: `full`,
          }}
        >
          <Card
            disableHover
            isAnimated
            background="purple10"
            style={{
              flex: 1,
            }}
            onClick={() => handleServiceClick({ content: `blog` })}
          >
            <CardContent
              spacing={12}
              direction="column"
              align={`flex-start`}
              sprinkles={{
                height: `full`,
              }}
            >
              <Text
                as="h3"
                fontWeight={500}
                variant={{
                  mobile: `xl`,
                  md: `2xl`,
                }}
              >
                Sito Blog e News{` `}
              </Text>
              <Body variant="lg">
                Tieni informati i tuoi clienti, acquisisci traffico organico e
                posizionati tra i primi risultati per parole chiave strategiche
              </Body>
              <CardImage className={hiddenImgfromMd}>
                <StaticImage
                  src="../../images/blogs.png"
                  alt="Gestionale"
                  placeholder="blurred"
                />
              </CardImage>
            </CardContent>
          </Card>
          <Card
            disableHover
            isAnimated
            background="purple10"
            onClick={() => handleServiceClick({ content: `landing-page` })}
          >
            <CardContent
              spacing={12}
              direction="column"
              align={`flex-start`}
              sprinkles={{
                height: `full`,
              }}
            >
              <Text
                as="h3"
                fontWeight={500}
                variant={{
                  mobile: `xl`,
                  md: `2xl`,
                }}
              >
                Lead Generation{` `}
              </Text>
              <Body variant="lg">
                Landing Page con 3 scopi: convertire, convertire e ancora
                convertire
              </Body>
            </CardContent>
          </Card>
        </Stack>
      </Box>
      <Box
        width="full"
        background="purple10"
        borderRadius={24}
        p={{
          mobile: 16,
          md: 24,
        }}
      >
        <HStack
          align="center"
          justify={`space-between`}
          sprinkles={{
            height: `full`,
          }}
        >
          <Body variant="xl" fontWeight={600}>
            Contattaci
          </Body>
          <Button size="md" variant="purple" onClick={handleContactClick}>
            Fissa una chiamata
          </Button>
        </HStack>
      </Box>
    </VStack>
  )
}

export default Services
