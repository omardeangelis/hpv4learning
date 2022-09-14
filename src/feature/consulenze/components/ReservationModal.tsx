import React from "react";
import { Modal, ModalContent } from "../../../components/modal";
import { useSteps } from "../../../hook/useSteps";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import WelcomeModal from "./WelcomeModal";
import SuccessModal from "./SuccessModal";
import ProviderModal from "./ProviderModal";
import { ConsulenzeErrorModal } from "./ConsulenzeErrorModal";

export const ReservationModal: React.FC<RouteComponentProps> = () => {
  const { step, stepIndex, nextStep, prevStep, gotoStep } = useSteps([
    "welcome" as const,
    "provider" as const,
    "datepicker" as const,
    "info" as const,
    "success" as const,
    "error" as const,
  ]);

  const handleClose = React.useCallback(() => {
    navigate("/consulenze/");
  }, [navigate]);

  const handleContinue = React.useCallback(() => nextStep(), [nextStep]);

  const renderModalContent = React.useCallback(() => {
    switch (step) {
      case "welcome":
        return <WelcomeModal onContinue={handleContinue} />;
      case "provider":
        return <ProviderModal onContinue={handleContinue} onBack={prevStep} />;
      case "datepicker":
        return <div onClick={handleContinue}>Scegli Data</div>;
      case "info":
        return <div onClick={handleContinue}>info</div>;
      case "success":
        return (
          <SuccessModal
            start={{
              "dateTime": "2022-08-12T21:00:00+02:00",
              "timeZone": "Europe/Rome",
            }}
            hangoutLink='Suca'
          />
        );
      case "error":
        return <ConsulenzeErrorModal onContinue={() => gotoStep("welcome")} />;
    }
  }, [step]);

  //Questa serve in sviluppo per avere sempre il modal su cui si sta lavorando.
  // React.useEffect(() => gotoStep("error"), [gotoStep]);
  return (
    <Modal stepIndex={stepIndex} onClose={handleClose}>
      <ModalContent>{renderModalContent()}</ModalContent>
    </Modal>
  );
};
