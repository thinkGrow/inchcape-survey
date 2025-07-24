import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function InchcapeLanding() {
  return (
    <div className="font-sans text-gray-800">
      <Header></Header>

      {/* Hero Section */}
      <Hero></Hero>

      {/* About Section */}
      <About></About>

      {/* Services */}
      <Services></Services>

      {/* Contact */}
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
