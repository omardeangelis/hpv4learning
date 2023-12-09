import React from "react"
import { GATracker } from "../GATracker"

type StateProps = {
  gaTracker: GATracker | null
}

const initialState: StateProps = {
  gaTracker: null,
}

const GAContext = React.createContext<StateProps>(initialState)

export const GAProvider: React.FC<{ children: React.ReactNode }> = React.memo(
  ({ children }) => {
    const tracker = React.useMemo(() => GATracker.init(), [])
    const ctx = React.useMemo(() => ({ gaTracker: tracker }), [tracker])

    return <GAContext.Provider value={ctx}>{children}</GAContext.Provider>
  }
)

export const useGATracking = () => React.useContext(GAContext)
