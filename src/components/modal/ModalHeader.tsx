import React from "react";
import styled from "@emotion/styled";

interface Props {
  hasBorder?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const ModalHeader = ({ hasBorder = true, children }: Props) => {
  const Header = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${hasBorder ? "1px solid #E4E7EC" : "none"};

    & * {
      margin: auto 12px auto 12px;
    }

    @media screen and (min-width: 1024px) {
      height: 56px;
      & * {
        margin: auto 20px auto 20px;
      }
    }
  `;
  return <Header>{children}</Header>;
};
