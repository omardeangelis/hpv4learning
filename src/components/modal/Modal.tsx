import React from "react";
import styled from "@emotion/styled";
import { BoxProps } from "@mui/system";
import { BorderBox } from "../layout/BorderBox";

type Props = {
  onClose: () => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  children: JSX.Element | JSX.Element[];
};

export const Modal = ({
  width,
  height,
  backgroundColor,
  children,
  ...rest
}: Props & BoxProps) => {
  const ModalContent = styled(BorderBox)`
    background-color: ${backgroundColor ? backgroundColor : "white"};
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.05);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
      width: ${width ? width : "632px"};
      height: ${height ? height : "890px"};
      max-height: 90%;
      border-radius: 24px;
    }
  `;

  return <ModalContent {...rest}>{children}</ModalContent>;
};
