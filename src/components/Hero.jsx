import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <section
        className="relative text-white h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/40">
          <div className="text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
              Ensuring Maritime <br /> Safety & Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto drop-shadow-sm">
              Trusted marine surveyors with decades of experience. Supporting
              shipping operations across all major Bangladeshi ports.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
