import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const ServiceDetails = () => {
  const services = [
    {
      title: "Marine Inspection",
      items: [
        "On Hire / Off Hire Survey",
        "Draft Survey",
        "PNI Survey",
        "Bunker Survey",
        "Cargo Damage Survey",
        "Hold Cleanliness",
        "Container Inspection",
        "Cargo Sampling",
        "Stuffing and Un-stuffing Survey",
        "Damage Investigation",
        "Loading & Discharging Supervision",
        "Pre break-bulk / Unsealing",
        "Condition Survey",
        "Weighing Survey",
        "Expedite Survey",
        "Towing and Lashing Survey",
        "Investigation Survey",
        "Measuring and Condition Survey",
        "Follow up Survey",
        "Pre Purchase Surveys",
        "Hold Cleanliness",
      ],
    },
    {
      title: "Liquid Cargo and Gas",
      items: [
        "Loading / Discharging Superintendence",
        "Bunker Survey",
        "Oil Losses Inspection",
        "Loss Control / Cargo Damage Survey",
        "ROB Inspection",
        "ROB Fuel Consumption / Bunker Survey",
        "Pre-shipment Inspection",
        "Sampling and Analysis",
        "Tank Cleanliness Inspection",
        "Oil Losses Inspection",
      ],
    },
    {
      title: "Laboratory Analysis",
      items: [
        "Certified lab tests for marine cargo and fuels",
        "Trusted partner labs for accurate petroleum testing",
      ],
    },
  ];
  return (
    <div className="bg-[url('/hero.jpg')] opacity-90 bg-cover bg-center h-auto md:h-screen py-30 md:pt-24">
      <div className="max-w-6xl mx-auto items-center">
        <div className="max-h-screen overflow-y-auto scrollbar-hide">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md text-center text-balance">
            <div className="text-blue-900 mb-4">Service Details</div>
          </h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 z-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="bg-white/10 text-black p-6 shadow-xl border border-white/20 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl backdrop-blur-[2px]"
              >
                <h3 className="text-xl lg:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1 text-[10px] lg:text-[10px] lg:text-md p-1 font-semibold">
                  {service.items.map((item, i) => (
                    <li className="bg-gray-100/10 rounded-full p-1" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
