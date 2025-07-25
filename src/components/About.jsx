import React from "react";
import { ClipboardCheck, ClipboardList, Star } from "lucide-react";

const About = () => {
  const whatWeDo = [
    "Marine Inspection",
    "Liquid Cargo and Gas Survey",
    "Laboratory analysis",
    "Cargo Inspection",
    "Ship Inspectors",
    "Maritime consultant and surveyor",
    "Claim Investigators",
    "Vessel Collisions Surveyors and Investigators",
    "Mechanical Inspectors",
    "Loss Adjusters",
    "Investigators and consulter",
    "Electrical Inspectors",
  ];

  const values = [
    "Quality Precision Inspection",
    "Creative and Professional Experts",
    "Accurate Reporting",
    "Fast Response",
    "Ensure Customer Satisfaction",
    "Survey & Inspection success rate is 100%",
  ];

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Intro */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 uppercase mb-4 tracking-tight">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto border-l-4 border-blue-900 pl-4 text-left">
            INCHCAPE SURVEY & INSPECTION COMPANY LIMITED HAVE PROFESSIONAL EXPERT TO CONDUCT ALL MARINE SURVEY ACTIVITY LIKELY ON HIRE SURVEY, CONDITION SURVEY, OFF HIRE BUNKER SURVEY, TOWING & LASHING SURVEY, STUFFING SURVEY, PRE-LOADING SURVEY, BUNKER SURVEY, MARINE WARRANTY SURVEY, VESSELS SUITABILITY SURVEY, TOWING INSPECTION SURVEY, PROJECT CARGO SURVEY AND P&I SURVEY.
          </p>
        </div>

        {/* Who We Are */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-3">
            <ClipboardCheck className="w-6 h-6" />
            WHO WE ARE
          </div>
          <div className="bg-blue-50 rounded-md p-4 text-center text-blue-900 text-base font-medium">
            Our marine surveyors combine technical strength, operational knowledge,
            <br />
             and modern tools to deliver consistent and reliable inspections across all vessel types.
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-6">
            <ClipboardList className="w-6 h-6" />
            WHAT WE DO
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
            {whatWeDo.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-blue-200 rounded-md p-3 shadow-sm hover:shadow-md transition text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-6">
            <Star className="w-6 h-6" />
            OUR VALUES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
            {values.map((item, i) => (
              <div
                key={i}
                className={`p-3 rounded-md shadow-sm text-center font-medium border ${item.includes("100%") ? "border-blue-800 text-blue-800 font-bold" : "border-blue-200"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
