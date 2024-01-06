import React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Box, Heading, ResponsiveContainer } from "old-ui"
import { AcademyService } from "./AcademyService"
import { servicesFixedContainer } from "../../style/services.css"
import { WebAgencyService } from "./WebAgencyService"

export const ServiceSection = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const x = useTransform(scrollYProgress, [1, 0], [600, 0])

  const scrollRef = React.useRef<HTMLDivElement>(null)

  const ghostRef = React.useRef<HTMLDivElement>(null)
  const targetRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress: fixedScrollYProgress } = useScroll({
    target: targetRef,
  })
  const [scrollRange, setScrollRange] = React.useState(0)
  const [viewportW, setViewportW] = React.useState(0)

  React.useEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth)
    }
  }, [])

  const onResize = React.useCallback((entries: any[]) => {
    entries.forEach((entry) => {
      setViewportW(entry.contentRect.width)
    })
  }, [])

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    resizeObserver.observe(ghostRef.current as any)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const transform = useTransform(
    fixedScrollYProgress,
    [0, 1],
    [0, -viewportW / 2]
  )
  const physics = { damping: 10, mass: 0.1, stiffness: 100 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <Box ref={ref} overflowX={`hidden`}>
        <ResponsiveContainer variant="xl">
          <motion.div
            style={{
              width: `100%`,
              x,
            }}
          >
            <Heading variant="5xl" as="h2" fontWeight={600}>
              Scopri tutti i nostri servizi
            </Heading>
          </motion.div>
        </ResponsiveContainer>
      </Box>
      <Box
        display={{
          mobile: `none`,
          lg: `block`,
        }}
        __minHeight={`200vh`}
        position="relative"
        ref={targetRef}
      >
        <motion.div
          ref={scrollRef}
          className={servicesFixedContainer}
          style={{ x: spring }}
        >
          <AcademyService />
          <WebAgencyService />
        </motion.div>
      </Box>
      <Box
        display={{
          mobile: `block`,
          lg: `none`,
        }}
      >
        <AcademyService />
        <WebAgencyService />
      </Box>
      <div ref={ghostRef} style={{ width: scrollRange, height: 0 }} />
    </>
  )
}
