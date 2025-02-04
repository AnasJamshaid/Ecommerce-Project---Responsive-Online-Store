// components/Filters.tsx
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import SearchBar from './SearchBar';

interface FiltersProps {
  onSearch: (searchTerm: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onSearch }) => {

  return (
    <div className="col-span-1 p-4 border rounded-md shadow-md max-h-[1800px] bg-white flex flex-col">
      {/* Search Bar */}
      <SearchBar onSearch={onSearch} />

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Category
        </h3>
        <ul className="space-y-2">
          {[
            "Sandwiches",
            "Burger",
            "Chicken Chup",
            "Drink",
            "Pizza",
            "Thé",
            "Non Veg",
            "Uncategorized",
          ].map((category) => (
            <li key={category} className="flex items-center">
              <input type="checkbox" id={category} className="mr-2" />
              <label htmlFor={category} className="text-gray-600">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Advertisement */}
      <div className="mb-6 relative w-full max-w-sm mx-auto">
        <Image
          src="/shop.jpg" // Replace with your image path
          alt="Ad"
          layout="responsive"
          width={1000}
          height={400}
          className="w-full h-[400px] object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center px-6 text-white">
          <h4 className="text-lg font-medium">Perfect Taste</h4>
          <h2 className="text-2xl font-bold mt-1">
            Classic Restaurant
          </h2>
          <p className="text-[#FF9F0D] font-bold text-3xl mt-2">
            45.00$
          </p>
          <button className="flex items-center  text-white font-medium mt-52 text-lg">
            Shop Now <BsArrowRight className="ml-2 text-xl" />
          </button>
        </div>
      </div>

      {/* Filter by Price */}
      <div className="mb-6 p-2">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Filter By Price
        </h3>
        <div className="space-y-4">
          {/* Price Range Slider */}
          <input
            type="range"
            min="0"
            max="8000"
            className="slider w-full h-2 rounded-lg appearance-none cursor-pointer"
          />

          {/* From and Filter Text */}
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">
              From $0 to $8000
            </span>
            <span className="text-sm text-gray-600">Filter</span>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold  text-gray-700 mb-4">
          Latest Products
        </h3>
        <ul className="space-y-4">
          {["Pizza", "Cupcake", "Cookies", "Sandwich"].map(
            (product, index) => (
              <li key={index} className="flex items-center space-x-4">
                {/* Product Image */}
                <Image
                  src="/pizza.jpg"
                  alt={product}
                  width={64}  // Set the width
                  height={64} // Set the height
                  className="object-cover rounded-md"
                />
                {/* Product Details */}
                <div className="text-gray-700">
                  <h4 className="font-semibold text-md">{product}</h4>
                  {/* Star Ratings */}
                  <div className="flex space-x-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < 3 ? "text-[#FF9F0D]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Product Price */}
                  <p className="text-[#FF9F0D] font-medium text-sm">
                    $10.00
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Product Tags */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Product Tags
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Service",
            "Our Menu",
            "Pizza",
            "Cupcake",
            "Burger",
            "Cookies",
            "Our Shop",
            "Tandoori Chicken",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#FF9F0D] hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};