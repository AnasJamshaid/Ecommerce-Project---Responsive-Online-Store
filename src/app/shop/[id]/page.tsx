"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getFoodDataById } from "@/sanity/dataFetching";
import SecondHeader from "@/app/components/SecondHeader";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Footer } from "@/app/components/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiGitDiffBold } from "react-icons/pi";

type FoodItem = {
  _id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery: string[] | null;
  tags: string[] | null;
  categories: string[] | null;
  badges: string[] | null;
  shortDescription: string;
  sku: string;
  available: boolean;
  rating: number;
  reviewCount: number;
};

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getFoodDataById(id);
        setProduct(data);
        setSelectedImage(data?.image || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const pageTitle = "Product Details";

  return (
    <>
      <div className="main-container">
        <SecondHeader />
        <div
          className="relative text-white h-72 bg-cover bg-center"
          style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
        >
          {/* Overlay for darker background */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div
            className="relative flex flex-col items-center justify-center h-full space-y-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }} // Use Helvetica font for header
          >
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>

            {/* Breadcrumb Component */}
            <Breadcrumb />
          </div>
        </div>
        {/* Product Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {loading ? (
            <div className="text-center text-sm w-full">
              <p>Loading product details...</p>
            </div>
          ) : (
            <>
              {/* Left Section: Product Images */}
              <div className="flex-1 max-w-lg">
                <div className="flex gap-4">
                  {/* Gallery Thumbnails */}
                  <div className="flex flex-col space-y-4">
                    {(product?.gallery?.length ?? 0) > 0 &&
                      product?.gallery?.map((imgUrl, index) => (
                        <div
                          key={index}
                          className={`w-16 h-16 rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 hover:border-blue-500 ${
                            selectedImage === imgUrl
                              ? "border-blue-500"
                              : "border-gray-300"
                          }`}
                          onClick={() => handleThumbnailClick(imgUrl)}
                        >
                          <Image
                            src={imgUrl}
                            alt={`Gallery Image ${index + 1}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                  </div>

                  {/* Main Image */}
                  <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={selectedImage || "/default-image.jpg"}
                      alt={product?.name || "Product Image"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section: Product Details */}
              <div className="flex-1">
                {/* Stock Status */}
                <div
                  className={`px-3 py-1 rounded-md text-center w-28 text-sm text-white`}
                  style={{
                    backgroundColor: product?.available ? "#FF9F0D" : "#FF0000",
                  }}
                >
                  {product?.available ? "In Stock" : "Out of Stock"}
                </div>
                {/* Product Name */}
                <h1
                  className="text-3xl font-extrabold mt-4"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {product?.name || "Product Name"}
                </h1>
                {/* Short Description */}
                <p
                  className="mt-2 text-base text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {product?.shortDescription ||
                    "No short description available."}
                </p>{" "}
                <br />
                <div className="mt-2 border-b border-gray-300"></div>
                {/* Pricing */}
                <div className="mt-4 flex items-center space-x-4">
                  {/* Original Price (if available) */}
                  {product?.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      {parseFloat(product.originalPrice).toFixed(2)} $
                    </span>
                  )}

                  {/* Separator (|) */}
                  {product?.originalPrice && (
                    <span className="text-2xl text-black">|</span>
                  )}

                  {/* Current Price */}
                  <span className="text-3xl font-bold text-black">
                    {parseFloat(product?.price || "0.00").toFixed(2)} $
                  </span>
                </div>
                {/* Reviews */}
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mt-2">
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => {
                        const isFilled =
                          index < Math.floor(product?.rating ?? 0); // Full star
                        const isHalf =
                          index === Math.floor(product?.rating ?? 0) &&
                          (product?.rating ?? 0) % 1 !== 0; // Half star

                        return (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={
                              isFilled
                                ? "#FF9F0D"
                                : isHalf
                                  ? "#FF9F0D"
                                  : "#FF9F0D"
                            } // Full or half star
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="star-icon"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        );
                      })}
                    </div>

                    {/* Separator */}
                    <span className="text-lg text-gray-500">|</span>

                    {/* Reviews count */}
                    <span className="text-sm text-gray-500">
                      {product?.reviewCount || "5.0"} Rating
                    </span>

                    {/* Separator */}
                    <span className="text-lg text-gray-500">|</span>

                    {/* Reviews Count */}
                    <span className="text-sm text-gray-600">
                      {product?.reviewCount || "22"} Reviews
                    </span>
                  </div>
                </div>
                {/* Categories */}
                <div className="mt-4">
                  <p className="text-gray-700 mt-2">Dictum/Cursus/Risus</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4 mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-0">
                      {/* Minus Button */}
                      <button
                        onClick={() =>
                          setQuantity((prev) => Math.max(prev - 1, 0))
                        }
                        className="w-10 h-10 flex items-center justify-center border border-black text-black font-bold hover:border-[#FF9F0D] hover:text-[#FF9F0D] focus:outline-none focus:border-[#FF9F0D]"
                      >
                        -
                      </button>

                      {/* Quantity Box */}
                      <div
                        className={`w-16 h-10 flex items-center justify-center border-y border-black text-lg font-semibold ${
                          isFocused ? "border-[#FF9F0D]" : "border-black"
                        }`}
                        onClick={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        tabIndex={0} // To make it focusable
                      >
                        {quantity}
                      </div>

                      {/* Plus Button */}
                      <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="w-10 h-10 flex items-center justify-center border border-black text-black font-bold hover:border-[#FF9F0D] hover:text-[#FF9F0D] focus:outline-none focus:border-[#FF9F0D]"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => alert(`Added ${quantity} items to cart!`)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#FF9F0D] text-white font-bold rounded shadow hover:bg-[#e88d0c] focus:outline-none"
                    >
                      <MdOutlineShoppingBag size={18} />{" "}
                      {/* React icon for shopping cart */}
                      Add to Cart
                    </button>
                  </div>
                  <br />
                  <div className="mt-2 border-b border-gray-300"></div>
                  <div className="mt-6 space-y-4 text-gray-800">
                    {/* Wishlist and Compare */}
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF9F0D] transition-all duration-300">
                        <FaRegHeart size={20} />
                        <span
                          className="font-medium"
                          style={{ fontFamily: "Inter, Arial, sans-serif" }}
                        >
                          Add to Wishlist
                        </span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF9F0D] transition-all duration-300">
                        <PiGitDiffBold size={20} />
                        <span
                          className="font-medium"
                          style={{ fontFamily: "Inter, Arial, sans-serif" }}
                        >
                          Compare
                        </span>
                      </button>
                    </div>

                    {/* Categories */}
                    <div className="flex items-start gap-2">
                      <span
                        className="font-semibold"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        Categories:
                      </span>
                      <span
                        className="text-gray-600"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        {product?.categories?.join(", ") || "N/A"}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex items-start gap-2">
                      <span
                        className="font-semibold"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        Tags:
                      </span>
                      <span
                        className="text-gray-600"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        {product?.tags?.join(" | ") || "N/A"}
                      </span>
                    </div>

                    {/* SKU */}
                    <div className="flex items-start gap-2">
                      <span
                        className="font-semibold"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        SKU:
                      </span>
                      <span
                        className="text-gray-600"
                        style={{ fontFamily: "Inter, Arial, sans-serif" }}
                      >
                        {product?.sku || "N/A"}
                      </span>
                    </div>

                    {/* Share Icons */}
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-semibold"
                          style={{ fontFamily: "Inter, Arial, sans-serif" }}
                        >
                          Share:
                        </span>
                        <div
                          className="flex items-center gap-2"
                          style={{ fontFamily: "Inter, Arial, sans-serif" }}
                        >
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300"
                          >
                            <FaFacebook size={18} />
                          </a>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300"
                          >
                            <FaTwitter size={18} />
                          </a>
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300"
                          >
                            <FaInstagram size={18} />
                          </a>
                          <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300"
                          >
                            <FaYoutube size={18} />
                          </a>
                        </div>
                      </div>{" "}
                      <br />
                      <div className="mt-2 border-b border-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 container mx-auto px-24">
          {/* Button Group */}
          <div className="flex space-x-4">
            {/* Description Button */}
            <button
              onClick={() => {
                setShowDescription(true);
                setShowReviews(false); // Hide reviews when description is shown
              }}
              className={`px-4 py-2 w-36 text-white ${
                showDescription ? "bg-[#FF9F0D]" : "bg-gray-300"
              }`}
            >
              Description
            </button>

            {/* Reviews Button */}
            <button
              onClick={() => {
                setShowReviews(true);
                setShowDescription(false); // Hide description when reviews are shown
              }}
              className={`px-4 py-2 w-36  text-white ${
                showReviews ? "bg-[#FF9F0D]" : "bg-gray-300"
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Description Content */}
          {showDescription && (
            <div className="mt-4 flex flex-col">
              <p
                className="text-base text-gray-600 mt-2"
                style={{ fontFamily: "Inter, Arial, sans-serif" }}
              >
                {product?.description || "No description available."}
              </p>
            </div>
          )}

          {/* Reviews Content */}
          {showReviews && (
            <div className="mt-4">
              <div className="flex items-center space-x-2 mt-2">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => {
                    const isFilled = index < Math.floor(product?.rating ?? 0); // Full star
                    const isHalf =
                      index === Math.floor(product?.rating ?? 0) &&
                      (product?.rating ?? 0) % 1 !== 0; // Half star
                    return (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isFilled || isHalf ? "#FF9F0D" : "#FF9F0D"}
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="star-icon"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    );
                  })}
                </div>
                <span className="text-lg text-gray-500">|</span>
                <span className="text-sm text-gray-500">
                  {product?.reviewCount || "5.0"} Rating
                </span>
                <span className="text-lg text-gray-500">|</span>
                <span className="text-sm text-gray-600">
                  {product?.reviewCount || "22"} Reviews
                </span>
              </div>
            </div>
          )}
        </div>{" "}
        <br />
       
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
