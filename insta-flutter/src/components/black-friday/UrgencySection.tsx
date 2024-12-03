import React, { useEffect, useState } from "react";

interface UrgencyProps {
  title: string;
  subtitle: string;
  countdown: {
    endDate: string;
  };
  remainingOrders: number;
  cta: string;
}

const UrgencyWithOrdersSection: React.FC<UrgencyProps> = ({
  title,
  subtitle,
  countdown,
  remainingOrders,
  cta,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [ordersLeft, setOrdersLeft] = useState<number>(remainingOrders);

  useEffect(() => {
    const updateTimeLeft = () => {
      const endDate = new Date(countdown.endDate).getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [countdown.endDate]);

  const handleOrderClaim = () => {
    if (ordersLeft > 0) {
      setOrdersLeft(ordersLeft - 1);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        <div className="text-4xl md:text-6xl font-bold mb-8">
          <span className="bg-black text-yellow-400 px-4 py-2 rounded">{timeLeft}</span>
        </div>
        <div className="text-2xl md:text-3xl font-semibold mb-8">
          <p className="text-yellow-400">{ordersLeft} orders left!</p>
        </div>
        <a
          href="#pricing"
          onClick={handleOrderClaim}
          className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-300 hover:text-black transition"
        >
          {cta}
        </a>
      </div>
    </section>
  );
};

export default UrgencyWithOrdersSection;
