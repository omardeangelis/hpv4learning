import React from "react";
import styled from "@emotion/styled";
import { BoxProps } from "@mui/system";
import { BorderBox } from "../layout/BorderBox";

type Props = {
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const ModalContainer = styled(BorderBox)`
  background-color: white;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.05);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    min-width: 632px;
    min-height: 890px;
    max-height: 90%;
    border-radius: 24px;
    overflow-y: hidden;
  }
`;

export const ModalContent = ({ children, ...rest }: Props & BoxProps) => {
  return <ModalContainer {...rest}>{children}</ModalContainer>;
};
