import React from 'react';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Payment Successful!</h1>
      <p className="mt-4">Thank you for your purchase.</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Return to Home
      </Link>
    </div>
  );
};

export default SuccessPage;