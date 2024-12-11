import React from 'react';
import { Button } from '@material-tailwind/react';

const MegaBundleBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-sm md:text-base">🚀 Mega Bundle</span>
        <span className="hidden md:inline text-sm">Get access to all our premium templates!</span>
      </div>
      <Button
        color="primary"
        size="sm"
        variant="solid"
        className="flex items-center gap-2 text-xs md:text-sm"
        onClick={() => window.location.href = '/get-all-access'}
      >
        Get All Access
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </div>
  );
};

export default MegaBundleBanner;