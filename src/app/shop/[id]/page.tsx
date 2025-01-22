"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getFoodDataById } from "@/sanity/dataFetching";
import SecondHeader from "@/app/components/SecondHeader";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Footer } from "@/app/components/Footer";
import { RightSideDetailsPage } from "@/app/components/RightSideDetailsPage";
import SimilarProducts from "@/app/components/SimilarProducts";

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
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getFoodDataById(id as string);
        if (data) {
          setProduct(data);
          setSelectedImage(data?.image || "/default-image.jpg");
        }
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
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>
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
                  {product?.gallery?.length ? (
                    product?.gallery?.map((imgUrl, index) => (
                      <div
                        key={index}
                        className={`w-16 h-16 rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 hover:border-blue-500 ${selectedImage === imgUrl ? "border-blue-500" : "border-gray-300"}`}
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
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
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
            <RightSideDetailsPage />
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
      className={`px-4 py-2 w-36 text-white ${showDescription ? "bg-[#FF9F0D]" : "bg-gray-300"}`}
    >
      Description
    </button>

    {/* Reviews Button */}
    <button
      onClick={() => {
        setShowReviews(true);
        setShowDescription(false); // Hide description when reviews are shown
      }}
      className={`px-4 py-2 w-36 text-white ${showReviews ? "bg-[#FF9F0D]" : "bg-gray-300"}`}
    >
      Reviews
    </button>
  </div>
  <br />
  <div className="mt-2 border-b border-gray-300"></div>
  
  {/* Description Content */}
  {showDescription && (
    <div className="mt-4 flex flex-col">
      <div
        className="text-sm text-gray-600 mt-2 leading-relaxed"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
        dangerouslySetInnerHTML={{
          __html: product?.description || "No description available."
        }}
      />
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
        <span className="text-sm text-gray-500">{product?.rating || "5.0"} Rating</span>
        <span className="text-lg text-gray-500">|</span>
        <span className="text-sm text-gray-600">{product?.reviewCount || "22"} Reviews</span>
      </div>
    </div>
  )}
  <br />

  <div className="mt-2 border-b border-gray-300"></div>
</div>


      <div className="container mx-auto px-24 mt-12">
      <SimilarProducts currentProductId={id as string} onProductClick={() => { }} />
      </div>
      
<div className="mt-10"><Footer /></div>
      
    </div>
  );
};

export default ProductDetail;
