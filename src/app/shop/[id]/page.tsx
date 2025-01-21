"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getFoodDataById } from "@/sanity/dataFetching";
import SecondHeader from "@/app/components/SecondHeader";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Footer } from "@/app/components/Footer";

type FoodItem = {
  _id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery: string[]; // gallery as an array
  tags: string[];
  categories: string[];
  badges: string[];
  shortDescription: string;
  sku: string;
  available: boolean;
  rating: number;
  reviewCount: number;
};

const ProductDetail: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getFoodDataById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Rendering Header, Breadcrumb, and Footer first
  const pageTitle = "Product Details"; // Static title for the Contact page

  return (
    <>
    <div className="main-container">
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-white" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            {pageTitle}
          </h1>

          {/* Breadcrumb Component */}
          <Breadcrumb />
        </div>
      </div>

      {/* Content starts */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Loading State */}
        {loading ? (
          <div className="text-center text-lg w-full">
            <p>Loading product details...</p>
          </div>
        ) : (
          <>
            {/* Left Section: Product Images */}
            <div className="flex-1 max-w-lg">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={product?.image ?? "/default-image.jpg"}
                  alt={product?.name ?? "Default Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Image Gallery */}
              <div className="mt-4 flex space-x-4">
                {product?.gallery && product.gallery.length > 0 ? (
                  product.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={imgUrl}
                        alt={`Gallery Image ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))
                ) : (
                  <div>No gallery images available.</div>
                )}
              </div>
            </div>

            {/* Right Section: Product Information */}
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-gray-800">
                {product?.name ?? "Product Name"}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                {product?.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xl text-red-600 font-semibold">
                  ${product?.price ?? "0.00"}
                </span>
              </div>

              <div className="flex items-center mt-2 text-yellow-500">
                <span>{product?.rating ?? "0"}</span>
                <div className="flex ml-2">
                  {/* Render star ratings */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${index < (product?.rating ?? 0) ? "text-yellow-500" : "text-gray-400"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-3.217 1.693.613-3.593-2.61-2.548 3.623-.527L10 5l1.591 4.028 3.623.527-2.61 2.548.613 3.593L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2">({product?.reviewCount ?? "0"} Reviews)</span>
              </div>

              <p className="mt-2 text-gray-600">{product?.shortDescription ?? "No description available"}</p>

              {/* Add to Cart / Wishlist */}
              <div className="mt-4 space-x-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none">
                  Add to Cart
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all focus:outline-none">
                  Add to Wishlist
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all focus:outline-none">
                  Buy Now
                </button>
              </div>

              {/* Categories and Tags */}
              {/* Categories */}
              <div className="mt-4 text-sm text-gray-500">
                <span>
                  Category:{" "}
                  {Array.isArray(product?.categories) &&
                  product.categories.length > 0
                    ? product.categories.join(", ")
                    : "No categories available"}
                </span>
                <span className="ml-4">
                  Tags:{" "}
                  {Array.isArray(product?.tags) && product.tags.length > 0
                    ? product.tags.join(", ")
                    : "No tags available"}
                </span>
              </div>

              {/* Availability */}
              <div className="mt-2 text-lg font-semibold text-green-600">
                {product?.available ? "In Stock" : "Out of Stock"}
              </div>

              {/* Product Description */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Description</h3>
                <p className="text-gray-700">{product?.description ?? "No description available"}</p>
              </div>

              {/* Reviews Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Reviews</h3>
                {/* Reviews will be added here */}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
      </div>

    </>
  );
};

export default ProductDetail;
