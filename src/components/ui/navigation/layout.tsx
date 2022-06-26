import React from "react";
//Custom Component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Footer } from "../../../feature/footer/";
import { LayoutProvider } from "../../../context/layout";
const Layout = ({
  children,
  disableColor,
  enableFooterPadding,
}: {
  children: React.ReactNode;
  disableColor?: true;
  enableFooterPadding?: true;
}) => {
  return (
    <LayoutProvider>
      <Navbar disableColor={disableColor} />
      <Sidebar />
      <main>{children}</main>

      <Footer enableFooterPadding={enableFooterPadding} />
    </LayoutProvider>
  );
};

export default Layout;
