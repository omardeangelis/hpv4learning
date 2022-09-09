import * as React from "react";
import Box from "@mui/material/Box";
import { Stepper, Step, StepLabel } from "@mui/material";
import { ContextProps, useModalContext } from "./context";

interface Props {
  labels: string[];
}

export const ModalStepper = ({ labels }: Props) => {
  const { stepIndex } = useModalContext() as ContextProps;

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepIndex}>
        {labels.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel sx={{ flexDirection: "column", gap: "4px" }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};
