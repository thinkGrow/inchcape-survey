import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Trusted Marine Survey Services in Bangladesh
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Over 30+ years of excellence in marine inspection, cargo supervision,
          and maritime consultancy
        </p>
        <a
          href="#contact"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Hero;
