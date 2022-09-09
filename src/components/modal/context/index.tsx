import React, { Dispatch, SetStateAction } from "react";

type ContextProps = {
  onClose: () => void;
  stepIndex?: number;
  setStepIndex?: Dispatch<SetStateAction<number>>;
};

const modalContext = React.createContext<null | ContextProps>(null);
export const ModalProvider = modalContext.Provider;

export const useModalContext = () => React.useContext(modalContext);
