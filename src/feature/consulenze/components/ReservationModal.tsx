import React from "react";
import { Modal, ModalContent } from "../../../components/modal";
import { useSteps } from "../../../hook/useSteps";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import WelcomeModal from "./WelcomeModal";
import SuccessModal from "./SuccessModal";
import ProviderModal from "./ProviderModal";
import { ConsulenzeErrorModal } from "./ConsulenzeErrorModal";
import DatepickerModal from "./DatepickerModal";
import InfoModal from "./InfoModal";
import { useBookAppointmentMutation } from "../../../services/calendar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

type FormData = {
  email: string;
  eventId: string;
  nome?: string;
  cognome?: string;
  professione?: string;
  description?: string;
};

const initialData = {
  email: "",
  eventId: "",
  nome: "",
  cognome: "",
  professione: "",
  description: "",
};

export const ReservationModal: React.FC<RouteComponentProps> = () => {
  const [formData, setFormData] = React.useState<FormData>(initialData);
  const { step, stepIndex, nextStep, prevStep, gotoStep } = useSteps([
    "welcome" as const,
    "provider" as const,
    "datepicker" as const,
    "info" as const,
    "success" as const,
    "error" as const,
  ]);

  const onContinue = (values: Partial<FormData>) => {
    console.log(values);
    setFormData({ ...formData, ...values });
    nextStep();
  };
  const { provider } = useSelector((store: RootState) => store.consulenza);
  const [bookAppointment, result] = useBookAppointmentMutation();

  const onSumbit = React.useCallback(
    async (values: Partial<FormData>) => {
      console.log(values);
      setFormData({ ...formData, ...values });
      try {
        await bookAppointment({
          ...formData,
          ...values,
          shouldSendMail: provider === "manual",
        })
          .unwrap()
          .catch(() => gotoStep("error"));
        if (result?.data?.hangoutLink)
          localStorage.setItem("success_data", result.data.hangoutLink);
        gotoStep("success");
      } catch (error) {
        gotoStep("error");
      }
    },
    [formData, gotoStep, nextStep, bookAppointment, provider],
  );

  console.log(formData);

  const handleClose = React.useCallback(() => {
    navigate("/consulenze/");
  }, [navigate]);

  const handleContinue = React.useCallback(
    (eventId: string) => {
      setFormData({ ...formData, eventId });
      nextStep();
    },
    [nextStep],
  );

  const renderModalContent = React.useCallback(() => {
    switch (step) {
      case "welcome":
        return <WelcomeModal onContinue={nextStep} />;
      case "provider":
        return <ProviderModal onContinue={onContinue} onBack={prevStep} />;
      case "datepicker":
        return (
          <DatepickerModal
            userMail={formData.email}
            onContinue={handleContinue}
            onBack={prevStep}
          />
        );
      case "info":
        return <InfoModal onBack={prevStep} onContinue={onSumbit} />;
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

  React.useEffect(() => {
    gotoStep("datepicker");
  }, []);

  return (
    <Modal stepIndex={stepIndex} onClose={handleClose}>
      <ModalContent>{renderModalContent()}</ModalContent>
    </Modal>
  );
};
