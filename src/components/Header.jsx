import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-blue-900/60 text-white px-6 py-4 shadow-sm">
      <div className="max-w-9xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Inchcape Survey & Inspection Co. Ltd.
        </h1>
        <a
          href="mailto:captainfazlayuddin@gmail.com"
          className="text-sm hover:underline"
        >
          captainfazlayuddin@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
