import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <section className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Ensuring Maritime <br /> Safety & Excellence
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 drop-shadow-sm">
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
      </section>
    </div>
  );
};

export default Hero;
