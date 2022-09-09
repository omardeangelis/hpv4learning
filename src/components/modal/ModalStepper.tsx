import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useModalContext } from "./context";

type Props = {
  labels: string[];
};

export const ModalStepper = ({ labels }: Props) => {
  const stepIndex = useModalContext();
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepIndex as unknown as number}>
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
