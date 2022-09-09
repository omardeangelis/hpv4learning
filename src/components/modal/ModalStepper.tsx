import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type Props = {
  step: number;
  labels: string[];
};

// label per ogni punto
// const labels = ["Welcome", "Prenota", "Scegli la data", "Dicci di più"];

export const ModalStepper = ({ step, labels }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
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
