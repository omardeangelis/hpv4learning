import { Body, Box, Heading, Stack, VStack } from "old-ui"
import React from "react"
import Avatar from "@mui/material/Avatar"
import DesignServicesIcon from "@mui/icons-material/DesignServices"
import CodeRounded from "@mui/icons-material/CodeRounded"
import SchoolRounded from "@mui/icons-material/SchoolRounded"
import { Card, CardContent } from "../../../../components/v2/cards/base"
import { featureCard } from "../../style/home/feature.css"

export const Features = () => (
  <Stack
    direction={{
      mobile: `column`,
      md: `row`,
    }}
    spacing={24}
    align="center"
    justify="space-between"
    sprinkles={{
      width: `full`,
    }}
  >
    <Card isAnimated background={`white`} className={featureCard}>
      <CardContent
        justify={`space-between`}
        align="flex-start"
        direction={`column`}
        sprinkles={{
          height: `full`,
        }}
        style={{ flex: 1 }}
      >
        <Box style={{ flex: 0.5 }}>
          <Avatar
            variant="circular"
            sx={{
              width: `56px`,
              height: `56px`,
              background: `#E9E3FF`,
            }}
          >
            <CodeRounded
              sx={{
                fontSize: `36px`,
                color: `purple.400`,
                fill: `purple.400`,
              }}
            />
          </Avatar>
        </Box>

        <VStack
          justify={`space-between`}
          align="flex-start"
          style={{ flex: 1 }}
        >
          <Heading as="h3" variant="3xl" fontWeight={600}>
            Sviluppo Web
          </Heading>
          <Body
            variant="md"
            sprinkles={{
              color: `grey400`,
            }}
          >
            Sviluppiamo siti web e applicazioni web su misura per le tue
            esigenze.
          </Body>
        </VStack>
      </CardContent>
    </Card>
    <Card
      isAnimated
      background={`white`}
      className={featureCard}
      mt={{ mobile: 0, md: 24 }}
    >
      <CardContent
        justify={`space-between`}
        align="flex-start"
        direction={`column`}
        sprinkles={{
          height: `full`,
        }}
        style={{ flex: 1 }}
      >
        <Box style={{ flex: 0.5 }}>
          <Avatar
            variant="circular"
            sx={{
              width: `56px`,
              height: `56px`,
              background: `#E9E3FF`,
            }}
          >
            <DesignServicesIcon
              sx={{
                fontSize: `36px`,
                color: `purple.400`,
                fill: `purple.400`,
              }}
            />
          </Avatar>
        </Box>

        <VStack
          justify={`space-between`}
          align="flex-start"
          style={{ flex: 1 }}
        >
          <Heading as="h3" variant="3xl" fontWeight={600}>
            Design
          </Heading>
          <Body
            variant="md"
            sprinkles={{
              color: `grey400`,
            }}
          >
            Senza Template: realiziamo interfacce personalizzate e su misura per
            ogni business.
          </Body>
        </VStack>
      </CardContent>
    </Card>
    <Card isAnimated background={`white`} className={featureCard}>
      <CardContent
        justify={`space-between`}
        align="flex-start"
        direction={`column`}
        sprinkles={{
          height: `full`,
        }}
        style={{ flex: 1 }}
      >
        <Box style={{ flex: 0.5 }}>
          <Avatar
            variant="circular"
            sx={{
              width: `56px`,
              height: `56px`,
              background: `#E9E3FF`,
            }}
          >
            <SchoolRounded
              sx={{
                fontSize: `36px`,
                color: `purple.400`,
                fill: `purple.400`,
              }}
            />
          </Avatar>
        </Box>

        <VStack
          justify={`space-between`}
          align="flex-start"
          style={{ flex: 1 }}
        >
          <Heading as="h3" variant="3xl" fontWeight={600}>
            Academy
          </Heading>
          <Body
            variant="md"
            sprinkles={{
              color: `grey400`,
            }}
          >
            Corsi di formazione per imparare a sviluppare siti web e
            applicazioni web.
          </Body>
        </VStack>
      </CardContent>
    </Card>
  </Stack>
)
