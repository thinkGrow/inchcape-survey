import React from "react";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
    </div>
  );
};

export default Header;
