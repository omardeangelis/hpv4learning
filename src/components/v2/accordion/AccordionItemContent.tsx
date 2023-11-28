import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Box } from "old-ui"
import { useAccordionItemContext } from "./context/AccordionItemProvider"
import { BoxExtendedProps } from "../../../types/system"

const variants = {
  open: {
    opacity: 1,
    height: `auto`,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  collapsed: { opacity: 0, height: 0, transition: { duration: 0.8 } },
}

export const AccordionItemContent: React.FC<
  BoxExtendedProps<HTMLDivElement>
> = ({ children, className, ...rest }) => {
  const { isOpen } = useAccordionItemContext()
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={variants}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <Box className={className} {...rest}>
            {children}
          </Box>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
