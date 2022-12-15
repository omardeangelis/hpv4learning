import React from "react"
import { IconTypeProps } from "../../../types"

type Props = {
  text: string
  link: null | string
  icon: IconTypeProps
}

export const useNavigationLink = () => {
  const links: Props[] = React.useMemo(
    () => [
      {
        text: `Home`,
        link: `/`,
        icon: `home`,
      },
      {
        text: `Corsi`,
        link: null,
        icon: `dropdown`,
      },
      {
        text: `Progetti pratici`,
        link: `/progetti/`,
        icon: `project`,
      },
      {
        text: `Contattaci`,
        link: `/consulenze/`,
        icon: `about`,
      },
    ],
    []
  )

  return links
}
