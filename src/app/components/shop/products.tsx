"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use next/navigation for navigation
import { PiGitDiffBold } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { getFoodData } from "@/sanity/dataFetching";

type FoodItem = {
  _id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
};

const ProductCard: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Router for navigation

  // Fetch food data on component mount
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoodData();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const addtocart = (food: FoodItem) => {
    try {
      // Retrieve the cart from localStorage or initialize as an empty array
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
      // Ensure cart is an array
      if (!Array.isArray(cart)) {
        console.error("Cart is not an array. Resetting cart.");
        localStorage.setItem("cart", JSON.stringify([]));
        return;
      }
  
      // Check if the food item already exists in the cart
      const existingFood = cart.find((item: FoodItem) => item._id === food._id);
  
      if (existingFood) {
        // If the food item already exists, update its quantity
        existingFood.quantity += 1;
      } else {
        // If the food item does not exist, add it to the cart with quantity 1
        const newFood = { ...food, quantity: 1 };
        cart.push(newFood);
      }
  
      // Update the cart in localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Redirect to the Add to Cart page
      router.push("/addtocart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  
  if (loading) {
    return <div>Loading products...</div>;
  }

  if (foods.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8">
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {foods.map((food) => (
              <div
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 group relative cursor-pointer"
                key={food._id}
                onClick={() => router.push(`/shop/${food._id}`)} // Navigate to the product detail page
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={500}
                    height={400}
                    className="w-full h-60 object-cover rounded-lg group-hover:opacity-80 transition duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="flex space-x-4">
                      {/* Product Comparison Icon Link */}
                      <Link href={`/compare/${food._id}`}>
                        <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full">
                          <PiGitDiffBold size={24} />
                        </button>
                      </Link>

                      {/* Add to Cart Icon */}
                      <button
                        onClick={() => addtocart(food)}
                        className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full"
                      >
                        <MdOutlineShoppingBag size={24} />
                      </button>

                      {/* Add to Wishlist Icon Link */}
                      <Link href={`/wishlist/add/${food._id}`}>
                        <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition rounded-full">
                          <CiHeart size={24} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <h3 className="font-semibold text-lg text-gray-800 mt-4">
                  {food.name}
                </h3>
                <div className="flex items-center space-x-2 mt-2">
                  {food.originalPrice && (
                    <>
                      <p className="text-[#FF9F0D] font-bold text-xl">
                        ${food.price}
                      </p>
                      <p className="text-gray-500 line-through">
                        ${food.originalPrice}
                      </p>
                    </>
                  )}
                  {!food.originalPrice && (
                    <p className="text-[#FF9F0D] font-bold text-xl">
                      ${food.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
