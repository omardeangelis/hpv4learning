import { Body, Box, Button, HStack, ResponsiveContainer } from "old-ui"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  useFloating,
  useHover,
  useInteractions,
  safePolygon,
  offset,
} from "@floating-ui/react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import {
  btnBox,
  navBarContainer,
  navItem,
  navbar,
  sidebaBox,
} from "../style/navbar.css"
import { AcademyTooltip } from "./AcademyTooltip"
import { AgencyTooltip } from "./AgencyTooltip"
import { useContactForm } from "../../../web-agency/context/FormContext"
import { Sidebar } from "./Sidebar"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAgencyOpen, setIsAgencyOpen] = useState(false)
  const { open } = useContactForm()
  const { pathname } = useLocation()
  const handleContactClick = React.useCallback(() => {
    if (pathname.includes(`/web-agency`)) {
      return open()
    }
    navigate(`/web-agency/?form=open`)
  }, [open, pathname])

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
        <ResponsiveContainer variant="xl">
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
                    zIndex: 10,
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
              <Box className={btnBox}>
                <Button size="md" variant="purple" onClick={handleContactClick}>
                  Contattaci
                </Button>
              </Box>
              <Box className={sidebaBox}>
                <Sidebar />
              </Box>
            </HStack>
          </Box>
        </ResponsiveContainer>
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
