import React from "react";
import { Wrench, Ship, Droplets, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Marine Inspection",
    desc: "Comprehensive vessel inspections including hire, condition, cargo, damage and more.",
    icon: <Ship className="w-10 h-10 text-blue-700 mb-4 mx-auto" />,
  },
  {
    title: "Liquid Cargo and Gas",
    desc: "Expert handling of petroleum, chemical, and gas cargo — from loading to sampling.",
    icon: <Droplets className="w-10 h-10 text-blue-700 mb-4 mx-auto" />,
  },
  {
    title: "Laboratory Analysis",
    desc: "Accurate, certified lab tests for marine cargo and fuels through trusted partners.",
    icon: <FlaskConical className="w-10 h-10 text-blue-700 mb-4 mx-auto" />,
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
            Inchcape Survey & Inspection Company Limited was established in
            Chattogram, Bangladesh as a Marine Surveyor Company and Inspection
            Services provider. We conduct marine and cargo survey activities
            including Petroleum and Chemicals Survey, and Agricultural cargo
            such as Crude Palm Oil for loading/discharging.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition-all text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center pt-6">
          <Link
            to="/services/details"
            className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-900 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
