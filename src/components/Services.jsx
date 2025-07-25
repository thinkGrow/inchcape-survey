import React from "react";
import { Wrench } from "lucide-react";

const services = [
  {
    title: "Marine Inspection",
    desc: "Comprehensive vessel inspections including hire, condition, cargo, damage and more.",
  },
  {
    title: "Liquid Cargo and Gas",
    desc: "Expert handling of petroleum, chemical, and gas cargo — from loading to sampling.",
  },
  {
    title: "Laboratory Analysis",
    desc: "Accurate, certified lab tests for marine cargo and fuels through trusted partners.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Wrench className="text-blue-800 w-8 h-8" />
          </div>
          <h2 className="text-4xl font-extrabold text-blue-900 uppercase tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 italic">
            {/* Inchcape Survey & Inspection Company Limited was established in
            Chattogram, Bangladesh as a Marine Surveyor Company and Inspection
            Services provider. */}
            Inchcape Survey & Inspection Company Limited was established in
            Chattogram, Bangladesh as a Marine Surveyor Company and Inspection
            Services provider. We conduct marine and cargo survey activities
            including Petroleum and Chemicals Survey, and Agricultural cargo
            such as Crude Palm Oil for loading/discharging.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Single "Know More" button */}
        <div className="text-center pt-6">
          <a
            href="/services/details" // adjust route as needed
            className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-900 transition"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
}
