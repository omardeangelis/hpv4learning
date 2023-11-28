import React from "react"
import { motion, useCycle } from "framer-motion"
import { sidebarContainer, sidebarStyle } from "../../style/sidebar.css"
import { SidabarButton } from "./SidabarButton"
import { SidbarContent } from "./SidbarContent"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 54px) 3.8rem)`,
    transition: {
      type: `spring`,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(24px at calc(100% - 54px) 3.8rem)`,
    transition: {
      delay: 0.1,
      type: `spring`,
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? `open` : `closed`}
        ref={containerRef}
        className={sidebarContainer}
      >
        <motion.div className={sidebarStyle} variants={sidebar} />
        <SidbarContent />
      </motion.nav>
      <motion.div animate={isOpen ? `open` : `closed`}>
        <SidabarButton toggle={() => toggleOpen()} />
      </motion.div>
    </>
  )
}
