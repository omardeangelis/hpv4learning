import React from "react";
//Custom Component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { LayoutProvider } from "../../../context/layout";
const Layout = ({
  children,
  disableColor,
}: {
  children: React.ReactChild | React.ReactChild[];
  disableColor?: true;
}) => {
  return (
    <LayoutProvider>
      <Navbar disableColor={disableColor} />
      <Sidebar />
      <main>{children}</main>

      <Footer />
    </LayoutProvider>
  );
};

export default Layout;
