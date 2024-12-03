import clsx from "clsx";

import React, { useEffect, useState } from 'react';
import { initializePaddle, Paddle } from '@paddle/paddle-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


// Define prop types
interface ProductPricing {
  personal: {
    paddle: string;
    price: number;
  };
}

interface Product {
  pricing: ProductPricing;
}

interface PaddleButtonProps {
  product: Product;
  type?: 'personal';
}

interface PricingProps {
  title: string;
  pricingOptions: {
    planName: string;
    price: string;
    originalPrice: string;
    description: string[];
    offerLabel: string;
    buttonLabel: string;
    buttonLink: string;
    isBestValue: boolean;
    paddleProductId: string;
  }[];
}




const PricingSection: React.FC<PricingProps> = ({ title, pricingOptions }) => {
  const { siteConfig } = useDocusaurusContext();
  const { 
    paddleSandBox,
    paddleVendorId,
    paddleApiKey,
    paddleAuthCode,
    paddleDeveloperId,
    paddleTeamId,

  } = siteConfig.customFields;

  const [paddle, setPaddle] = useState<Paddle | undefined>();

  console.log("paddleSandBox", paddleSandBox);
  console.log("paddleAuthCode", paddleAuthCode);

  // Initialize Paddle
  useEffect(() => {
    initializePaddle({environment: paddleSandBox == "true" ? "sandbox" : "production", token: paddleAuthCode as string})
      .then((paddleInstance: Paddle | undefined) => {
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      });
  }, []);

  // Open checkout
  const openCheckout = (paddle_id: string) => {
    paddle?.Checkout.open({
      items: [{ priceId: paddle_id, quantity: 1 }],
    });
  };

  return (
    <section className="bg-slate-900 text-gray-300 py-16" id="pricing">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-300">
          {title} - 90% OFF!
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Discover the best Black Friday deal for our premium products. <br />
          Get Access to all our products with a single purchase. <br />
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-10">
          {pricingOptions.map((option, index) => {
            const {
              planName,
              price,
              originalPrice,
              description,
              offerLabel,
              buttonLabel,
              buttonLink,
              isBestValue,
            } = option;
            return (
              <div
                key={index}
                className={clsx(
                  "bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300",
                  "flex-1",
                  {
                    "md:w-2/5": index === 0,
                    "md:w-3/5": index === 1,
                    "border-4 border-yellow-500": isBestValue,
                  }
                )}
              >
                {/* Offer Label */}
                <div
                  className={clsx(
                    "inline-block text-sm font-semibold uppercase py-2 px-6 rounded-full shadow-lg mb-6",
                    isBestValue
                      ? "bg-gray-700 text-gray-300"
                      : "bg-red-500 text-gray-100"
                  )}
                >
                  {offerLabel}
                </div>

                {/* Plan Name */}
                <h3
                  className={clsx(
                    "font-semibold mb-4 text-gray-100",
                    {
                      "text-2xl": index === 0,
                      "text-3xl": index === 1,
                    }
                  )}
                >
                  {planName}
                </h3>

                {/* Price */}
                {isBestValue ? (
                  <p className="text-lg text-gray-500 line-through mb-2">
                    <span className="text-red-500">{originalPrice}</span>
                  </p>
                ) : (
                  <p className="text-md text-gray-500 mb-2">
                    <span className="text-green-500">
                      Available only for the Black Friday 2024
                    </span>
                  </p>
                )}
                <p className="text-4xl font-bold text-gray-100 mb-4">{price}</p>

                {/* Description */}
                <ul className="list-disc text-lg text-gray-300 mb-6 space-y-2 pl-0">
                  {description.map((desc, idx) => (
                    <li key={idx} className="flex items-center text-center ml-0">
                      {/* Check SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openCheckout(option.paddleProductId)}
                  className={clsx(
                    "inline-block border-0 mt-8 px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105",
                    {
                      "text-lg": index === 0,
                      "text-xl": index === 1,
                      "bg-gray-700 text-red-500 hover:bg-gray-700 hover:text-red-500":
                        isBestValue,
                      "bg-red-500 text-gray-100 hover:bg-red-400 hover:text-gray-100":
                        !isBestValue,
                    }
                  )}
                  aria-label={`Select the ${planName} plan`}
                >
                  {buttonLabel}
                </button>
              </div>
            );
          })}
        </div>

        {/* Extra Information */}
        <div className="mt-8 text-center text-lg text-gray-400">
          <p className="font-semibold text-yellow-400">
            Limited to the first 50 orders - Hurry, only a few spots left!
          </p>
          <p>
            Secure your deal with Paddle, our trusted payment processor. <br />
            You're just a few steps away from getting access to all our premium
            products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
