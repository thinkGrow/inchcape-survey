import React from "react";
import CountUp from "react-countup";

const stats = [
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 9100, suffix: "+", label: "Vessels Visited" },
//   { value: 2020, label: "Established" },
];

const Stats = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-extrabold text-blue-900">
              <CountUp end={stat.value} duration={10} />
              {stat.suffix && <span>{stat.suffix}</span>}
            </h3>
            <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
