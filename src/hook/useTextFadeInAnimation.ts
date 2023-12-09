import { useMemo, useRef } from "react"
import { useInView } from "framer-motion"

type Options = {
  once: boolean
  amount: number
}

export const useTextFadeInAnimation = ({ once, amount }: Options) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const fadeInStyle = useMemo(
    () => ({
      transform: isInView ? `none` : `translateY(20px)`,
      opacity: isInView ? 1 : 0,
      transition: `all 0.5s linear 0s`,
      WebkitTransition: `all 0.5s linear 0s`,
    }),
    [isInView]
  )

  return { ref, fadeInStyle }
}
