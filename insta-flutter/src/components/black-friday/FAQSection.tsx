import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  questions: FAQ[];
}

const FAQSection: React.FC<FAQProps> = ({ title, questions }) => {
  return (
    <section className="bg-slate-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{title}</h2>
        <div className="space-y-6">
          {questions.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
