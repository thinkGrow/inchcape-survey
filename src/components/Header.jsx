import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

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
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true); // Always blue on other pages
      }
    };

    handleScroll(); // trigger once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 text-black transition-colors duration-500 ease-in-out font-semibold
        ${scrolled ? "bg-blue-900 shadow-md text-white" : "text-blue-900 bg-base-900"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#" className="text-xl font-bold text-balance">
          Inchcape Survey & Inspection Co. Ltd.
        </a> */}
        <Link to="/" className="text-xl font-bold text-balance">
          Inchcape Survey & Inspection Co. Ltd.
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:underline hover:text-blue-200 text-sm transition cursor-pointer"
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
          <div className="flex items-center gap-3 justify-end">
            <Phone></Phone>
            <p>+880-1766130834</p>
          </div>
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
        <div className="md:hidden mt-4 px-4 space-y-3 bg-white py-4 rounded-2xl text-black">
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
