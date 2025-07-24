import React from "react";

const Services = () => {
  return (
    <div>
      <section id="services" className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Our Core Services
          </h3>
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
              <h4 className="font-bold text-lg mb-2">
                Liquid & Gas Inspections
              </h4>
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
    </div>
  );
};

export default Services;
