import React from "react";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {
  prova: string;
}

export const Modal = ({ prova }: Props) => {
  return <div>{prova}</div>;
};
