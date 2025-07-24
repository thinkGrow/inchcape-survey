import React from 'react';

export default function InchcapeLanding() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Inchcape Survey & Inspection Co. Ltd.</h1>
          <a href="mailto:captainfazlayuddin@gmail.com" className="text-sm hover:underline">
            captainfazlayuddin@gmail.com
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted Marine Survey Services in Bangladesh</h2>
        <p className="text-lg text-gray-600 mb-6">Over 30+ years of excellence in marine inspection, cargo supervision, and maritime consultancy</p>
        <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
          Get in Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
        <p className="mb-2">
          Inchcape Survey & Inspection Co. Ltd. is a Bangladesh Government-certified marine survey company, led by Capt. Md Fazlay Uddin Chowdhury — a seasoned professional with 30+ years of sea and shore experience.
        </p>
        <p>
          We specialize in marine inspections, damage assessment, liquid & gas surveys, and consulting, ensuring precision, efficiency, and client satisfaction.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Core Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-2">Marine Surveys</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>On Hire / Off Hire</li>
                <li>Bunker & Draft Surveys</li>
                <li>Container Inspection</li>
                <li>Condition / Damage Reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Liquid & Gas Inspections</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>Oil Loss & ROB Analysis</li>
                <li>Sampling & Tank Cleanliness</li>
                <li>Loss Control Survey</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Consultancy & Training</h4>
              <ul className="list-disc pl-4 text-sm">
                <li>IT & Marine Consultancy</li>
                <li>Technical & Project Management</li>
                <li>ERP / SAP / QA Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Us</h3>
        <div className="space-y-2 text-center text-sm">
          <p><strong>Phone:</strong> +880-1766130834</p>
          <p><strong>Email:</strong> captainfazlayuddin@gmail.com</p>
          <p><strong>Address:</strong> 1147/A, IFCO Complex, GEC Circle, Khulshi, Chattogram-4225, Bangladesh</p>
          <a href="http://www.inchcapesurvey.com" className="text-blue-700 hover:underline" target="_blank" rel="noreferrer">
            www.inchcapesurvey.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Inchcape Survey & Inspection Co. Ltd. | Built by Texture Software Technology Limited
      </footer>
    </div>
  );
}
