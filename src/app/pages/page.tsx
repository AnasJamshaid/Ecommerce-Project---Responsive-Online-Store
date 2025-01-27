'use client';
import React from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border transition-transform duration-300 ${
        isOpen ? "border-[#FF9F0D]" : "border-gray-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className="text-gray-500 text-xl transform transition-transform duration-200">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const Page = () => {
  const pageTitle = "FAQs Page"; // Static title for the page

  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website serves as a platform to showcase our services and provide information to our users."
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via the contact form on our website or by calling our support hotline."
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including web design, digital marketing, and more. Please visit our Services page for detailed information."
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we have a refund policy in place. Please refer to our Terms and Conditions for more details."
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we have a refund policy in place. Please refer to our Terms and Conditions for more details."
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we have a refund policy in place. Please refer to our Terms and Conditions for more details."
    }
  ];

  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>

          {/* Breadcrumb */}
          <Breadcrumb />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Questions Look Here
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
