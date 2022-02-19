import React from "react";
//Custom Component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { LayoutProvider } from "../../../context/layout";
const Layout = ({ children }) => {
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
