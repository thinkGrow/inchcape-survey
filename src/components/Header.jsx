import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 text-white transition-colors duration-500 ease-in-out 
        ${scrolled ? "bg-blue-900 shadow-md" : "bg-base-900"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-balance">
          Inchcape Survey & Inspection Co. Ltd.
        </h1>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:underline hover:text-blue-200 text-sm transition"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contact - desktop */}
        <div className="hidden md:flex flex-col text-right text-sm">
          <a
            href="mailto:captainfazlayuddin@gmail.com"
            className="hover:underline"
          >
            captainfazlayuddin@gmail.com
          </a>
          <p>+880-1766130834</p>
        </div>

        {/* Hamburger - mobile */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block text-sm hover:underline text-left w-full"
            >
              {link.label}
            </button>
          ))}
          <div className="text-sm mt-4 border-t pt-2">
            <a
              href="mailto:captainfazlayuddin@gmail.com"
              className="block hover:underline"
            >
              captainfazlayuddin@gmail.com
            </a>
            <p>+880-1766130834</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
