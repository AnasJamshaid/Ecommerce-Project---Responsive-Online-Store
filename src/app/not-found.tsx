import Breadcrumb from "./components/Breadcrumb";
import { Footer } from "./components/Footer";
import SecondHeader from "./components/SecondHeader";
import Link from "next/link";

export default function NotFound() {
  const pageTitle = "404 Error";
  
  return (
    <div className="main-container">
      {/* Header */}
      <SecondHeader />
      
      {/* Background Banner */}
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* 404 Content */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl font-bold text-[#FF9F0D]">404</h1>
        <p className="text-3xl font-helvetica text-black font-extrabold mt-4">
          Oops! Looks like something went wrong
        </p>
        <p className="text-gray-900 font-inter mt-2">
          Page Cannot be found! We'll have it figured out in no time.
          <br />
          Meanwhile, check out these fresh ideas:
        </p>
        
        {/* Button to Home */}
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-[#FF9F0D] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#FF9F0D] font-inter transition"
        >
          Go to Home
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
