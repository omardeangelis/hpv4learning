import React from "react";
//Custom Component
import { Navbar, Sidebar } from "../../feature/navigation/components";
import { Footer } from "../../feature/footer";
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
    <>
      <Navbar disableColor={disableColor} />
      <Sidebar />
      <main>{children}</main>

      <Footer enableFooterPadding={enableFooterPadding} />
    </>
  );
};

export default Layout;
