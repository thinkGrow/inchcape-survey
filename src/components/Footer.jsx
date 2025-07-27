import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-4 text-center text-sm pb-20 md:pb-4">
        © {new Date().getFullYear()} Inchcape Survey & Inspection Co. Ltd.
        <br />
        Built by{" "}
        <a
          href="https://www.rubaitreshad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300 transition"
        >
          Rubait Reshad
        </a>
      </footer>
    </div>
  );
};

export default Footer;
