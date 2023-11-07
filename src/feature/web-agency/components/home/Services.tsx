import { Body, Box, Button, HStack, Stack, Text, VStack } from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "@reach/router"
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

const Services = () => (
  <VStack align="flex-start" spacing={48} sprinkles={{ width: `full` }}>
    <Box className={serviceGrid}>
      <Card
        disableHover
        isAnimated
        background="purple10"
        className={safariServiceCardHeightFix}
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
        <Card isAnimated background="purple20">
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
        <Card disableHover isAnimated background="purple10">
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
        <Button size="md" variant="purple" onClick={() => navigate(`prenota`)}>
          Fissa una chiamata
        </Button>
      </HStack>
    </Box>
  </VStack>
)

export default Services
