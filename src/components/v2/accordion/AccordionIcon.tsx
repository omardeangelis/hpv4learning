import { motion } from "framer-motion"
import React from "react"
import { BsChevronDown } from "react-icons/bs"
import { useAccordionItemContext } from "./context/AccordionItemProvider"

const iconVariants = {
  open: {
    rotate: 180,
  },
  closed: {
    rotate: 0,
  },
}

export const AccordionIcon = () => {
  const { isOpen } = useAccordionItemContext()
  return (
    <motion.div animate={isOpen ? `open` : `closed`} variants={iconVariants}>
      <BsChevronDown />
    </motion.div>
  )
}
