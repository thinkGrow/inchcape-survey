import React from "react";
import { Wrench, CheckCircle } from "lucide-react";

const ListItem = (props) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
    <span>{props.text}</span>
  </li>
);


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

        {/* Marine Inspection */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Marine Inspection
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-700">
            <ul className="space-y-3">
              <ListItem text="On Hire / Off Hire Survey" />
              <ListItem text="Bunker Survey" />
              <ListItem text="Container Inspection" />
              <ListItem text="Damage Investigation" />
              <ListItem text="Condition Survey" />
              <ListItem text="Towing and Lashing Survey" />
              <ListItem text="Follow up Survey" />
            </ul>
            <ul className="space-y-3">
              <ListItem text="Draft Survey" />
              <ListItem text="Cargo Damage Survey" />
              <ListItem text="Cargo Sampling" />
              <ListItem text="Loading & Discharging Supervision" />
              <ListItem text="Weighing Survey" />
              <ListItem text="Investigation Survey" />
              <ListItem text="Pre Purchase Surveys" />
            </ul>
            <ul className="space-y-3">
              <ListItem text="PNI Survey" />
              <ListItem text="Hold Cleanliness" />
              <ListItem text="Stuffing and Un-stuffing Survey" />
              <ListItem text="Pre break-bulk / Opening seals / Unsealing" />
              <ListItem text="Expedite Survey" />
              <ListItem text="Measuring and Condition Survey" />
              <ListItem text="Hold Cleanliness" />
            </ul>
          </div>
        </div>

        {/* Liquid Cargo and Gas */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Liquid Cargo and Gas
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-base text-gray-700">
            <ListItem text="Loading / Discharging Superintendence" />
            <ListItem text="Bunker Survey" />
            <ListItem text="Oil Losses Inspection" />
            <ListItem text="Loss Control / Cargo Damage Survey" />
            <ListItem text="ROB Inspection" />
            <ListItem text="ROB Fuel Consumption / Bunker Survey" />
            <ListItem text="Pre-shipment Inspection" />
            <ListItem text="Sampling and Analysis" />
            <ListItem text="Tank Cleanliness Inspection" />
            <ListItem text="Oil Losses Inspection" />
          </ul>
        </div>

        {/* Laboratory Analysis */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Laboratory Analysis
          </h3>
          <p className="text-gray-700 max-w-4xl">
            If required by the client, we perform laboratory analysis at an
            authorized partner lab — recognized as one of the most reliable in
            Bangladesh. Please contact us for any marine survey or petroleum
            testing services.
          </p>
        </div>
      </div>
    </section>
  );
}
