import React from "react"

export const useSteps = <T>(stepsArg: T[] | Readonly<T[]>) => {
  const [step, setStep] = React.useState<number>(0)
  const [steps] = React.useState<T[] | Readonly<T[]>>(stepsArg)

  const nextStep = React.useCallback(
    () => setStep((_step) => (_step < steps.length ? _step + 1 : _step)),
    [steps.length]
  )
  const prevStep = React.useCallback(
    () => setStep((_step) => (_step > 0 ? _step - 1 : _step)),
    []
  )
  const reset = React.useCallback(() => setStep(0), [])
  const gotoStep = React.useCallback(
    (target: T) => {
      const index = steps.findIndex((x) => x === target)
      if (index !== -1) {
        setStep(index)
      }
    },
    [steps]
  )

  return {
    nextStep,
    prevStep,
    reset,
    gotoStep,
    step: steps[step],
    stepIndex: step,
  }
}
