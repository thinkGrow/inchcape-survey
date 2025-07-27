import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  // const isDetails = location.pathname === "/services/details";

  useEffect(() => {
    const timeout = setTimeout(() => setShowVideo(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background image fallback */}
      <img
        src="/hero.jpg"
        alt="Hero Placeholder"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Background video */}
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
        <source
          src="https://res.cloudinary.com/dhlu0f35d/video/upload/v1753470025/hero_novkxa.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Main Content */}
      <section className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="flex flex-col gap-10 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-md text-balance">
            <>
              Reliable Maritime Inspection
              <span className="text-blue-900"> Trusted Worldwide</span>
            </>
          </h1>
          {/* Description text (home only) */}
          {isHome && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 drop-shadow-sm">
              Trusted marine surveyors with decades of experience.
              <br />
              Supporting shipping operations across all major Bangladeshi ports.
            </p>
          )}

          {/* WhatsApp CTA */}
          {/* <div className="flex justify-center">
            <a
              href="https://wa.me/8801789902282"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 text-base sm:text-lg font-semibold px-4 sm:px-6 py-3 rounded-md shadow bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-blue-900 transition-colors duration-300 w-full sm:w-auto"
            >
              <FaWhatsapp className="text-green-500 group-hover:text-blue-900 transition-colors duration-300 text-xl sm:text-2xl" />
              Contact Us
            </a>
          </div> */}
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="https://wa.me/8801789902282"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
