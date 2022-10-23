import React from "react";
import { Script } from "gatsby";

export const injectIubenda = () => {
  return [
    <script
      id='iubenda-1'
      key='iubenda-1'
      type='text/javascript'
      src='//cdn.iubenda.com/cs/ccpa/stub.js'
    />,
    <script
      id='iubenda-2'
      key='iubenda-2'
      type='text/javascript'
      src='//cdn.iubenda.com/cs/iubenda_cs.js'
      charSet='UTF-8'
      async
    />,
  ];
};
