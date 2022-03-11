import React from "react";
//Custom Component
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { LayoutProvider } from "../../../context/layout";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          mt: { xs: "72px", lg: "122px" },
        }}
      >
        <Footer />
      </Box>
    </LayoutProvider>
  );
};

export default Layout;
