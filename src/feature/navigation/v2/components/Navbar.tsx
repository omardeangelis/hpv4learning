import { Body, Box, Container, HStack } from "old-ui"
import React, { useState } from "react"
import { BsBookmarkHeartFill } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"
import {
  useFloating,
  useHover,
  useInteractions,
  safePolygon,
  offset,
} from "@floating-ui/react"
import { navigate } from "gatsby"
import {
  navBarContainer,
  navItem,
  navSaveItem,
  navbar,
} from "../style/navbar.css"
import { Avatar } from "../../../../components/avatar/components/Avatar"
import { AcademyTooltip } from "./AcademyTooltip"
import { AgencyTooltip } from "./AgencyTooltip"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAgencyOpen, setIsAgencyOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: `bottom-start`,
    strategy: `fixed`,
    middleware: [
      offset({
        mainAxis: 48,
        crossAxis: -32,
      }),
    ],
  })

  const {
    refs: agencyRefs,
    floatingStyles: agencyFloatingStyles,
    context: agencyContext,
  } = useFloating({
    open: isAgencyOpen,
    onOpenChange: setIsAgencyOpen,
    placement: `bottom-start`,
    strategy: `fixed`,
    middleware: [
      offset({
        mainAxis: 48,
        crossAxis: -32,
      }),
    ],
  })

  const agencyHover = useHover(agencyContext, {
    handleClose: safePolygon({
      blockPointerEvents: true,
      buffer: 16,
    }),
  })

  const {
    getReferenceProps: getAgencyReferenceProps,
    getFloatingProps: getAgencyFloatingProps,
  } = useInteractions([agencyHover])

  const hover = useHover(context, {
    handleClose: safePolygon({
      blockPointerEvents: true,
      buffer: 16,
    }),
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  return (
    <>
      <Box className={navBarContainer}>
        <Container variant="xl">
          <Box
            borderRadius={9999}
            className={navbar}
            style={{
              borderWidth: 1,
              borderStyle: `solid`,
            }}
            borderColor="grey20"
            background={`white`}
          >
            <HStack
              align="center"
              justify={`space-between`}
              sprinkles={{
                width: `full`,
              }}
            >
              <HStack spacing={16} align={`center`} justify={`flex-start`}>
                <Box
                  onClick={() => navigate(`/`)}
                  style={{
                    cursor: `pointer`,
                  }}
                >
                  <StaticImage
                    src="../../../../images/logo.png"
                    alt="Logo Hpv 4 Learning"
                    placeholder="blurred"
                    layout="fixed"
                    height={36}
                    width={36}
                  />
                </Box>
                {` `}
                <HStack spacing={4} align={`center`} justify={`flex-start`}>
                  <Box
                    className={navItem}
                    ref={refs.setReference}
                    {...getReferenceProps()}
                  >
                    <Body
                      variant="md"
                      sprinkles={{
                        __color: `inherit`,
                      }}
                    >
                      Academy
                    </Body>
                  </Box>
                  <Box
                    className={navItem}
                    ref={agencyRefs.setReference}
                    {...getAgencyReferenceProps()}
                  >
                    <Body
                      variant="md"
                      sprinkles={{
                        __color: `inherit`,
                      }}
                    >
                      Web Agency
                    </Body>
                  </Box>
                </HStack>
              </HStack>
              <Avatar
                shape="circle"
                __height={36}
                __width={36}
                className={navSaveItem}
              >
                <BsBookmarkHeartFill size={20} />
              </Avatar>
            </HStack>
          </Box>
        </Container>
      </Box>
      {isOpen ? (
        <AcademyTooltip
          ref={refs.setFloating}
          {...getFloatingProps()}
          style={floatingStyles}
        />
      ) : null}
      {isAgencyOpen ? (
        <AgencyTooltip
          ref={agencyRefs.setFloating}
          {...getAgencyFloatingProps()}
          style={agencyFloatingStyles}
        />
      ) : null}
    </>
  )
}
