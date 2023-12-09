import React from "react"
import { motion } from "framer-motion"
import { Box } from "old-ui"
import { BoxExtendedProps } from "../../../../types/system"
import { sidebarLinkItem } from "../../style/sidebar.css"

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  collapsed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const SidebarLinkItem: React.FC<BoxExtendedProps<HTMLDivElement>> = ({
  children,
  ...rest
}) => (
  <motion.div variants={itemVariants}>
    <Box className={sidebarLinkItem} {...rest}>
      {children}
    </Box>
  </motion.div>
)
