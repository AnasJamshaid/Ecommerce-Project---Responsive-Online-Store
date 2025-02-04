// pages/ShopPage.tsx
'use client'

import React, { useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Sorts } from "../components/Sorts";
import ProductCard from "../components/shop/products";
import { Filters } from "../components/Filters";
import { Footer } from "../components/Footer";

const ShopPage: React.FC = () => {
  const pageTitle = "Our Shop";
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="main-container">
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      <div className="bg-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <Sorts />
            <ProductCard searchTerm={searchTerm} /> {/* Pass the search term */}
          </div>

          <div className="sticky top-20 hidden md:block">
            <Filters onSearch={handleSearch} /> {/* Pass the handleSearch function */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;