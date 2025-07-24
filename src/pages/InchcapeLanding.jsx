import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ManagingDirector from "../components/ManagingDirector";
import Standards from "../components/Standards";

export default function InchcapeLanding() {
  return (
    <div className="font-sans text-gray-800">
      <Header></Header>

      {/* Hero Section */}
      <Hero></Hero>

      {/* Managing Director Section */}
      <ManagingDirector></ManagingDirector>

      {/* About Section */}
      <About></About>

      {/* Services */}
      <Services></Services>

      {/* Contact */}
      <Contact></Contact>

      {/* Standards */}
      {/* <Standards></Standards> */}

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
