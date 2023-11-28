import { motion } from "framer-motion"
import { Box } from "old-ui"
import React from "react"

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const SidebarItem = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <motion.div
      variants={itemVariants}
      style={{
        width: `100%`,
      }}
    >
      <Box
        onClick={() => setIsOpen(!isOpen)}
        px={24}
        py={16}
        borderColor="grey50"
        width="full"
        style={{
          borderTopWidth: `1px`,
          borderTopStyle: `solid`,
        }}
      >
        {children}
      </Box>
    </motion.div>
  )
}
