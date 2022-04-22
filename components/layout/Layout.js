import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Wrapper from "./Wrapper";

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Layout;
