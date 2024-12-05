import React, { useEffect, useState } from "react";

interface CountdownProps {
  countdownEndDate: string;
  remainingOrders: number;
}

const CountdownTimer: React.FC<CountdownProps> = ({ countdownEndDate, remainingOrders }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>(
    { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );
  const [ordersLeft, setOrdersLeft] = useState<number>(remainingOrders);

  useEffect(() => {
    const updateTimeLeft = () => {
      const endDate = new Date(countdownEndDate).getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [countdownEndDate]);

  const handleOrderClaim = () => {
    if (ordersLeft > 0) {
      setOrdersLeft(ordersLeft - 1);
    }
  };

  return (
    <div className="flex justify-center flex-wrap py-8 bg-transparent">
      <div className="flex flex-col items-center space-y-4 mx-1 mb-4 bg-slate-700 p-4 rounded-lg w-24">
        <div className="text-gray-300 text-3xl font-bold">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <p className="text-white text-lg !mt-1">Days</p>
      </div>
      <div className="flex flex-col items-center space-y-4 mx-1 mb-4 bg-slate-700 p-4 rounded-lg w-24">
        <div className="text-gray-300 text-3xl font-bold">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <p className="text-white text-lg !mt-1">Hours</p>
      </div>
      <div className="flex flex-col items-center space-y-4 mx-1 mb-4 bg-slate-700 p-4 rounded-lg w-24">
        <div className="text-gray-300 text-3xl font-bold">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <p className="text-white text-lg !mt-1">Minutes</p>
      </div>
      <div className="flex flex-col items-center space-y-4 mx-1 mb-4 bg-slate-700 p-4 rounded-lg w-24">
        <div className="text-gray-300 text-3xl font-bold">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <p className="text-white text-lg !mt-1">Seconds</p>
      </div>
      <div className="flex flex-col items-center space-y-4 mx-1 mb-4 bg-slate-700 p-4 rounded-lg">
        <div className="text-red-500 text-3xl font-bold">
          {ordersLeft}<span className="text-gray-300">/50</span>
        </div>
        <p className="text-red-500 text-lg !mt-1">Orders Left</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
