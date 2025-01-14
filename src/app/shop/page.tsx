"use client";

import React, { useEffect, useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { PiGitDiffBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { Filters } from "../components/Filters";
import { Sorts } from "../components/Sorts";
import { Footer } from "../components/Footer";
import Image from "next/image"; // Import Image from next/image

// Define Product type
type Product = {
  id: number;
  title: string;
  price: string;
  salePrice: string;
  image: string;
};

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const pageTitle = "Our Shop";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
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

        {/* Main Content Section */}
        <div className="bg-white py-12 px-4">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Product Grid - Left Section */}
            <div className="md:col-span-3">
              <Sorts />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 group relative"
                  >
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={500}  // Adjust width as necessary
                        height={400} // Adjust height as necessary
                        className="w-full h-60 object-cover rounded-lg group-hover:opacity-80 transition duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="flex space-x-4">
                          <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full">
                            <PiGitDiffBold size={24} />
                          </button>
                          <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full">
                            <MdOutlineShoppingBag size={24} />
                          </button>
                          <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full">
                            <CiHeart size={24} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-gray-800 mt-4">
                      {product.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <p className="text-[#FF9F0D] font-bold text-xl">
                        ${product.salePrice}
                      </p>
                      <p className="text-gray-500 line-through">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md disabled:opacity-50"
                >
                  <MdKeyboardDoubleArrowLeft />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md ${
                      currentPage === index + 1 ? "bg-[#FF9F0D] text-white" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md disabled:opacity-50"
                >
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>

            {/* Filters and Search - Right Section */}
            <div className="sticky top-20 hidden md:block">
              <Filters />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShopPage;
