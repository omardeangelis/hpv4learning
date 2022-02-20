import React from "react";
//Custom Component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { LayoutProvider } from "../../../context/layout";
const Layout = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <LayoutProvider>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </LayoutProvider>
  );
};

export default Layout;
