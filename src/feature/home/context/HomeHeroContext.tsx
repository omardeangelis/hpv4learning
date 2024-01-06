import React from "react"

export type HomeHeroContextProps = {
  extendedCard: "academy" | "agency" | "edu"
  setExtendedCard: React.Dispatch<
    React.SetStateAction<"academy" | "agency" | "edu">
  >
}

type HeroContextProvider = {
  children: React.ReactNode
}

export type HeroCardEnum = HomeHeroContextProps["extendedCard"]

const initialState = {
  extendedCard: `academy` as const,
  setExtendedCard() {},
}

const homeHeroContext = React.createContext<HomeHeroContextProps>(initialState)

export const HomeHeroProvider: React.FC<HeroContextProvider> = ({
  children,
}) => {
  const [extendedCard, setExtendedCard] =
    React.useState<HeroCardEnum>(`academy`)
  const ctx = React.useMemo(
    () => ({
      extendedCard,
      setExtendedCard,
    }),
    [extendedCard]
  )
  return (
    <homeHeroContext.Provider value={ctx}>{children}</homeHeroContext.Provider>
  )
}

export const useHomeHeroContext = () => React.useContext(homeHeroContext)
