import React from "react";
import Link from "next/link";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

const SuccessPage = () => {
  return (
    <>
      <div className="main-container">
        <SecondHeader />
        <div
          className="relative text-white h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/page-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full space-y-4">
            <h1 className="text-5xl font-bold text-center font-helvetica">
              Success!
            </h1>
            <Breadcrumb />
          </div>
        </div>

        {/* Success Message */}
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50">
          <div className="bg-green-500 p-8 rounded-full shadow-xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-white mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-green-600">Payment Successful!</h1>
          <p className="mt-4 text-lg text-gray-700">Thank you for your purchase. Your transaction was completed successfully.</p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Back to Shop
            </Link>
            <Link
              href="/shipping"
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Proceed to Shipping
            </Link>
            <Link
              href="/invoice"
              className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Create Invoice
            </Link>
          </div>

          {/* Return to Home Link */}
          <Link href="/" className="mt-8 text-blue-500 underline text-lg">
            Return to Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;
