import React from "react";
import { Mail } from 'lucide-react';
import captainImage from '../assets/captain.jpg'; // adjust path based on setup

const About = () => {
  return (
    <>
      <section id="about" className="bg-[#f4f6fb] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 text-3xl font-extrabold mb-2 text-balance">
              Captain Md Fazlay Uddin Chowdhury
            </h2>
            <p className="italic mb-6">
              Managing Director of the Inchcape Survey & Inspection Company
              Limited
            </p>
            <blockquote className="text-lg text-gray-700 font-medium border-l-4 border-blue-700 pl-4 mb-4">
              “TO CREATE SUCCESS & HAPPINESS FOR CUSTOMERS & EMPLOYEES BY
              INCREASING EFFICIENCY & PROFITABILITY FOR THE COMPANY”
            </blockquote>
            <p className="text-sm mb-4 text-gray-700">
              Md Fazlay Uddin Chowdhury has over 15 years of experience as
              Master on 22 vessels and sea experience over 30 years. He gained
              experience on oil tankers (crude & product including VLCCs), bulk
              carriers (handy to cape size), OBO and general cargo/container
              vessels.
            </p>
            <p className="text-sm mb-4 text-gray-700">
              He has worked with Ship Management Companies managing oil tankers,
              chemical tankers, gas tankers, containers, Ro-Ro and Ro-Pax
              vessels. As a consultant since 2010, he has handled
              fire/explosion, collisions, grounding, unsafe port disputes,
              building disputes, cargo damage, wreck removals etc.
            </p>
            <p className="text-sm text-gray-700">
              He has also carried out numerous 'Navigational Audits',
              'Pre-purchase Inspections', 'PNI Survey', 'Condition Surveys' and
              'Bay Piloting'.
            </p>
            <div className="flex items-center gap-2 text-blue-800 mt-4">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:captainfazlayuddin@gmail.com"
                className="hover:underline"
              >
                captainfazlayuddin@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={captainImage}
              alt="Capt. Md Fazlay Uddin Chowdhury"
              className="rounded-lg shadow-md w-full max-w-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
