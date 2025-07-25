import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Static image always underneath */}
      <img
        src="/hero.jpg"
        alt="Hero Placeholder"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Fading-in video layered on top */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero.jpg"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <source src="/hero.mp4" type="video/mp4" /> */}
        <source
          src="https://res.cloudinary.com/dhlu0f35d/video/upload/v1753470025/hero_novkxa.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <section className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="flex flex-col gap-10 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-md text-balance">
            Reliable Maritime Inspection
            <span className="text-blue-900"> Trusted Worldwide</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 drop-shadow-sm">
            Trusted marine surveyors with decades of experience.
            <br />
            Supporting shipping operations across all major Bangladeshi ports.
          </p>
          {/* <a
            href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
          >
            Contact Us
          </a> */}
          <div>
            <a
              href="https://wa.me/8801789902282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl inline-flex items-center gap-2 font-semibold px-6 py-3 rounded shadow bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-blue-900 transition-colors duration-300 w-full sm:w-auto self-center"
            >
              <FaWhatsapp className="text-blue-900 group-hover:text-blue-900 transition-colors duration-300" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
