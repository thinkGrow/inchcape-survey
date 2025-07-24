import React from "react";
import { ClipboardCheck, ClipboardList, Star } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        className="bg-gradient-to-br from-white to-blue-50 py-20 px-6"
        id="about"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 uppercase mb-4 tracking-tight">
              About Us
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto border-l-4 border-red-600 pl-4 text-left">
              INCHCAPE SURVEY & INSPECTION COMPANY LIMITED HAVE PROFESSIONAL
              EXPERT TO CONDUCT ALL MARINE SURVEY ACTIVITY LIKELY ON HIRE
              SURVEY, CONDITION SURVEY, OFF HIRE BUNKER SURVEY, TOWING & LASHING
              SURVEY, STUFFING SURVEY, PRE-LOADING SURVEY, BUNKER SURVEY, MARINE
              WARRANTY SURVEY, VESSELS SUITABILITY SURVEY, TOWING INSPECTION
              SURVEY, PROJECT CARGO SURVEY AND P&I SURVEY.
            </p>
          </div>

          {/* Who We Are */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-3">
              <ClipboardCheck className="w-6 h-6" />
              WHO WE ARE
            </div>
            <p className="italic text-red-600 text-base md:text-lg">
              OUR MARINE SURVEYORS HAS THE TECHNICAL STRENGTH, KNOWLEDGE AND
              TOOLS TO ACHIEVE THE PRECISION, ACCURACY AND RESULTS YOU NEED.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-6">
              <ClipboardList className="w-6 h-6" />
              WHAT WE DO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-800">
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-blue-300">
                  Marine Inspection
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Liquid Cargo and Gas Survey
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Laboratory analysis
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Cargo Inspection
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Ship Inspectors
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Maritime consultant and surveyor
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-blue-300">
                  Claim Investigators
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Vessel Collisions Surveyors and Investigators
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Mechanical Inspectors
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Loss Adjusters
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Investigators and consulter
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  Electrical Inspectors
                </li>
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex items-center gap-3 text-blue-900 font-bold text-xl mb-6">
              <Star className="w-6 h-6" />
              OUR VALUES
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-blue-300">
                  • Quality Precision Inspection
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  • Creative and Professional Experts
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  • Accurate Reporting
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-blue-300">
                  • Fast Response
                </li>
                <li className="pl-4 border-l-4 border-blue-300">
                  • Ensure Customer Satisfaction
                </li>
                <li className="pl-4 border-l-4 border-blue-800 font-bold text-blue-800">
                  Survey & Inspection success rate is 100%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
