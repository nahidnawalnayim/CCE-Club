import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "/styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
