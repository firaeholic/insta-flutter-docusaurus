import React from "react";

interface ComparisonItem {
  item: string;
  description: string;
  price: string;
}

interface ComparisonProps {
  title: string;
  comparison: ComparisonItem[];
  totalSavings: string;
}

const ComparisonSection: React.FC<ComparisonProps> = ({ title, comparison, totalSavings }) => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl mb-10">
          Compare our prices for individual items and see how much you can save by purchasing the bundle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {comparison.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item.item}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <p className="text-2xl font-bold text-yellow-500">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 text-yellow-500 p-6 rounded-lg shadow-lg border-2 border-yellow-500 ">
          <h3 className="text-xl font-semibold">Total Savings</h3>
          <p className="text-3xl font-bold">{totalSavings}</p>
          <a href="#pricing" className="mt-4 inline-block px-8 py-4 bg-red-500 text-gray-100 hover:text-gray-100 font-bold rounded-lg shadow-lg hover:bg-red-400 transition duration-300">
            Buy Now for $449
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
