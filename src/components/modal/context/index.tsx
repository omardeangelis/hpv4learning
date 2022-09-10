import React from "react";

type ContextProps = {
  onClose: () => void;
  stepIndex?: number;
};

const modalContext = React.createContext<null | ContextProps>(null);
export const ModalProvider = modalContext.Provider;

export const useModalContext = () => React.useContext(modalContext);
