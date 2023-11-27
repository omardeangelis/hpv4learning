import { Body, Box, Container, HStack } from "old-ui"
import React from "react"
import { motion } from "framer-motion"
import { sidebarContent } from "../style/sidebar.css"
import { SidebarItem } from "./SidebarItem"
import { Accordion } from "../../../../components/v2/accordion/Accordion"
import { AccordionItem } from "../../../../components/v2/accordion/AccordionItem"
import { AccordionItemHeader } from "../../../../components/v2/accordion/AccordionItemHeader"
import { AccordionIcon } from "../../../../components/v2/accordion/AccordionIcon"
import { AccordionItemContent } from "../../../../components/v2/accordion/AccordionItemContent"
import { SidebarLinkItem } from "./SidebarLinkItem"
import { SIDEBAR } from "../constant/sidebar"
import SeoLink from "../../../../components/shared/SeoLink"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const SidbarContent = () => (
  <motion.div variants={variants}>
    <Box __paddingTop={`8rem`} __marginTop="-6rem" />
    <Box className={sidebarContent}>
      <Container variant="md">
        <Accordion
          defaultExpanded={0}
          spacing={8}
          align={`flex-start`}
          sprinkles={{ width: `full` }}
        >
          <AccordionItem width="full">
            <SidebarItem>
              <AccordionItemHeader>
                <HStack spacing="unset" align="center" justify="space-between">
                  <Body
                    fontWeight={600}
                    variant="lg"
                    sprinkles={{
                      color: `grey300`,
                    }}
                  >
                    Web Agency
                  </Body>
                  <AccordionIcon />
                </HStack>
              </AccordionItemHeader>
              <AccordionItemContent mt={8}>
                {SIDEBAR.web_agency.map((item) => (
                  <SidebarLinkItem key={item.id}>
                    <SeoLink link={item.url} isExternal={false}>
                      <Body
                        variant="md"
                        sprinkles={{
                          color: `grey300`,
                        }}
                      >
                        {item.name}
                      </Body>
                    </SeoLink>
                  </SidebarLinkItem>
                ))}
              </AccordionItemContent>
            </SidebarItem>
          </AccordionItem>
          <AccordionItem width="full">
            <SidebarItem>
              <AccordionItemHeader>
                <HStack spacing="unset" align="center" justify="space-between">
                  <Body
                    fontWeight={600}
                    variant="lg"
                    sprinkles={{
                      color: `grey300`,
                    }}
                  >
                    Academy
                  </Body>
                  <AccordionIcon />
                </HStack>
              </AccordionItemHeader>
              <AccordionItemContent mt={8}>
                {SIDEBAR.Academy.map((item) => (
                  <SidebarLinkItem key={item.id}>
                    <SeoLink link={item.url} isExternal={false}>
                      <Body
                        variant="md"
                        sprinkles={{
                          color: `grey300`,
                        }}
                      >
                        {item.name}
                      </Body>
                    </SeoLink>
                  </SidebarLinkItem>
                ))}
              </AccordionItemContent>
            </SidebarItem>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  </motion.div>
)
