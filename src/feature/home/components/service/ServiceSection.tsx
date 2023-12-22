import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Box, Heading, ResponsiveContainer } from "old-ui"
import { AcademyService } from "./AcademyService"

export const ServiceSection = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const x = useTransform(scrollYProgress, [1, 0], [600, 0])
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
      <Box __height={`200vh`} position="relative">
        <Box
          position="sticky"
          style={{ top: 0 }}
          display="flex"
          alignItems="flex-start"
        >
          <AcademyService />
          <AcademyService />
        </Box>
      </Box>
    </>
  )
}
