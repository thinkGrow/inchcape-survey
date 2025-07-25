import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 text-white shadow-sm 
        transition-colors duration-500 ease-in-out 
        ${
          scrolled ? "bg-blue-900 shadow-md" : "bg-blue-300/60 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center transition-all duration-500">
        <h1 className="text-xl font-bold">
          Inchcape Survey & Inspection Co. Ltd.
        </h1>
        <div>
          <a
            href="mailto:captainfazlayuddin@gmail.com"
            className="text-sm hover:underline"
          >
            captainfazlayuddin@gmail.com
          </a>
          <p>+880-1766130834</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
