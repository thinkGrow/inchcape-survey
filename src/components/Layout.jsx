// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
