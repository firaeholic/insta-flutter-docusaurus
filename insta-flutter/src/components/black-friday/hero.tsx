import React from "react";
import CountdownTimer from "./CountdownTimer";
import countdownData from "../../../data/flutter/countdownData.json";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroProps> = ({ headline, subheadline, ctaText, ctaLink }) => {
  const scrollToValueProposition = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-900 text-white pb-20 pt-40 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative">
        {/* Discount Badge */}
        <div className="inline-block bg-red-500 text-white text-sm font-semibold uppercase py-2 px-4 rounded-full mb-4">
          Limited Time Exclusive Offer
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl mb-6">
          Unlock the full potential of your business with our <span className="font-bold">17+ premium apps bundle</span>!
        </p>
        
        {/* Countdown Timer */}
        <CountdownTimer
          countdownEndDate={countdownData.countdownEndDate}
          remainingOrders={countdownData.remainingOrders}
        />

        {/* Key Benefits */}
        <div className="text-lg md:text-xl mb-8 space-y-2">
          <p>
            <span className="font-bold text-red-600">90% Discount</span> on the regular price 
            <span className="text-red-500 line-through"> $6,689 </span>,<br /> now only
            <span className="text-green-400 text-2xl font-bold"> $449</span>!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={scrollToValueProposition}
            className="px-4 py-2 bg-red-600 text-gray-300 text-lg font-semibold border-0 rounded-lg  hover:bg-red-500 hover:text-gray-100"
          >
            Explore Deal
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
