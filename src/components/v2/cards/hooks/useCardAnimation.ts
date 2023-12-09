import { useMemo, useRef } from "react"
import { useInView } from "framer-motion"

export const useCardAnimation = (isAnimated?: boolean) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const cardsAnimatedStyle = useMemo(
    () =>
      isAnimated
        ? {
            transform: isInView ? `none` : `translateY(35px)`,
            opacity: isInView ? 1 : 0.1,
            transition: `all 0.375s cubic-bezier( 0.5, -0.28, 0.6, 0.99 ) 0s`,
            WebkitTransition: `all 0.375s cubic-bezier( 0.5, -0.28, 0.6, 0.99 ) 0s`,
          }
        : {},
    [isInView, isAnimated]
  )

  return { ref, cardsAnimatedStyle }
}
