import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Inchcape Survey & Inspection Co. Ltd. |
        Built by Rubait Reshad
      </footer>
    </div>
  );
};

export default Footer;
