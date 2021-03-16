import React from "react";
import Warning from "./Warning";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Warning />
      <Header />
      {children}
    </>
  );
};

export default Layout;
