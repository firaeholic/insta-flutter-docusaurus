import React from "react";

interface Template {
  image: string;
  title: string;
  description: string;
}

interface ShowcaseProps {
  title: string;
  subtitle: string;
  templates: Template[];
  ctaText: string;
  ctaLink: string;
}

const ShowcaseSection: React.FC<ShowcaseProps> = ({ title, subtitle, templates, ctaText, ctaLink }) => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-100 mb-10">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templates.map((template, index) => (
            <div key={index} className="bg-slate-800 shadow-md rounded-lg overflow-hidden">
              <img src={template.image} alt={template.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                <p className="text-gray-300 mb-4">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-100 my-10">
          17+ premium templates to help you kickstart your next project.
          <br />
          <span className="text-red-500">Save 90% off</span> for a limited time.
        </p>
        <a
          href={ctaLink}
          className="px-8 py-4 bg-red-500 text-gray-100 font-bold rounded-lg shadow-lg hover:bg-red-400 transition duration-300 mt-10 hover:text-gray-100"
        >
          Get Offer
        </a>
        {/* <a href="/templates" target="_blank" className=" text-gray-400 mt-4 hover:text-gray-100 ml-2">
          View all templates
        </a> */}
      </div>
    </section>
  );
};

export default ShowcaseSection;
