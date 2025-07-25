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
      <Hero></Hero>
      <main className="min-h-screen">
        <Outlet /> {/* This renders the page-specific content */}
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
