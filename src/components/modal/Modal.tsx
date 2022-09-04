import React from "react";
import styled from "@emotion/styled";

type Props = {
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
}: Props) => {
  const ModalContent = styled.div`
    background-color: ${backgroundColor ? backgroundColor : "white"};
    border: 1px solid #f8f8f8;
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
