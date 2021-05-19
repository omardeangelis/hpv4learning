import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="it_IT"></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/thomasdea/image/upload/v1619443189/HPV%204%20Business/logo_hpv_pww4zi.jpg"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
