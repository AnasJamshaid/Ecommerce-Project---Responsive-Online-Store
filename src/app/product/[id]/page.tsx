'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getFoodDataById } from '@/sanity/dataFetching';
import Breadcrumb from '@/app/components/Breadcrumb';
import SecondHeader from '@/app/components/SecondHeader';

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
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center text-lg">Product not found.</div>;
  }

 const pageTitle = "Productsdetalis"; // Static title for the Contact page

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

    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
   
      {/* Left Section: Product Images */}
      <div className="flex-1 max-w-lg">
        <div className="relative w-full h-80">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image Gallery */}
        <div className="mt-4 flex space-x-4">
          {product.gallery && product.gallery.length > 0 ? (
            product.gallery.map((imgUrl, index) => (
              <div key={index} className="w-24 h-24 bg-gray-200 rounded-lg">
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
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <div className="mt-4 flex items-center space-x-4">
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
          <span className="text-xl text-red-600 font-semibold">${product.price}</span>
        </div>

        <div className="flex items-center mt-2 text-yellow-500">
          <span>{product.rating}</span>
          <div className="flex ml-2">
            {/* Render star ratings */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-400'}`}
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
          <span className="ml-2">({product.reviewCount} Reviews)</span>
        </div>

        <p className="mt-2 text-gray-600">{product.shortDescription}</p>

        {/* Add to Cart / Wishlist */}
        <div className="mt-4 space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
            Add to Cart
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none">
            Add to Wishlist
          </button>
        </div>

        {/* Tags and Categories */}
        <div className="mt-4 text-sm text-gray-500">
          <span>Category: {product.categories.join(', ')}</span>
          <span className="ml-4">Tags: {product.tags.join(', ')}</span>
        </div>

        {/* Availability */}
        <div className="mt-2 text-lg font-semibold text-green-600">
          {product.available ? 'In Stock' : 'Out of Stock'}
        </div>

        {/* Product Description */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Reviews</h3>
          {/* Reviews would go here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
