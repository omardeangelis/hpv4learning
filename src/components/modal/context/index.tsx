import React from "react";

type ContextProps = {
  onClose?: () => any;
  onContinue?: () => any;
  stepIndex?: number;
};

const modalContext = React.createContext<ContextProps>({});
export const ModalProvider = modalContext.Provider;

export const useModalContext = () => React.useContext(modalContext);
