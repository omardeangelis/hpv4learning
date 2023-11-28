import React from "react"
import { motion } from "framer-motion"
import { Avatar } from "../../../../components/avatar/components/Avatar"
import { sidebarButton } from "../../style/sidebar.css"

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export const SidabarButton: React.FC<{ toggle: any }> = ({ toggle }) => (
  <Avatar
    height={{
      mobile: 48,
      md: 64,
    }}
    width={{
      mobile: 48,
      md: 64,
    }}
    style={{
      cursor: `pointer`,
    }}
    className={sidebarButton}
    onClick={toggle}
  >
    <svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: `M 2 2.5 L 20 2.5` },
          open: { d: `M 3 16.5 L 17 2.5` },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: `M 2 16.346 L 20 16.346` },
          open: { d: `M 3 2.5 L 17 16.346` },
        }}
      />
    </svg>
  </Avatar>
)
