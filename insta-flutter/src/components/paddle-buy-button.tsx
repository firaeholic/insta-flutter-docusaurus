import React, { useEffect, useState } from 'react';

import { initializePaddle, Paddle } from '@paddle/paddle-js';

export function PaddleButton() {
  // Create a local state to store Paddle instance
  const [paddle, setPaddle] = useState<Paddle>();

  // Download and initialize Paddle instance from CDN
  useEffect(() => {
    initializePaddle({environment: 'sandbox', token: 'test_60847a9fc7625e599ef6165ae08' }).then(
      (paddleInstance: Paddle | undefined) => {
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      },
    );
  }, []);

  // Callback to open a checkout
  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [{ priceId: 'pri_01j2sb08hws8bgxn2wf655g0zw', quantity: 1 }],
    });
  };

  return (
    <button
      onClick={openCheckout}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Buy Now
    </button>
  );
}
