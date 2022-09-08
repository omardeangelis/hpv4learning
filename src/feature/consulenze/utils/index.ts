export const renderModalTitle = (step: string) => {
  switch (step) {
    case "welcome":
      return "Prenota la tua videochiamata";
    case "provider":
      return "Scegli come prenotare la chiamata";
    case "datepicker":
      return "Prenota il tuo appuntamento";
    case "info":
      return "Informazioni aggiuntive";
    default:
      return null;
  }
};
