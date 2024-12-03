import React from "react";

interface Testimonial {
  name: string;
  image: string;
  quote: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <section className="bg-slate-900 text-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-lg italic text-gray-100 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-xl font-bold text-gray-300">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
