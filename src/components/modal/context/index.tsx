import React from "react";

type ContextProps = {
  onClose: () => void;
};

const modalContext = React.createContext<null | ContextProps>(null);
export const ModalProvider = modalContext.Provider;

export const useModalContext = () => React.useContext(modalContext);
