import React from "react";

interface Proposition {
  icon: string;
  title: string;
  description: string;
}

interface ValueProps {
  title: string;
  propositions: Proposition[];
}

const ValuePropositionSection: React.FC<ValueProps> = ({ title, propositions }) => {
  return (
    <section className="bg-slate-900 text-gray-300 py-16" id="value-proposition">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        {/* Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-6xl text-yellow-400 mb-4">{prop.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
