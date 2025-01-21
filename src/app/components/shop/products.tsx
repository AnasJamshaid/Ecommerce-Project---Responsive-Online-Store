'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (foods.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {foods.map((food) => (
        <Link href={`/product/${food._id}`} key={food._id}>
          <div className="bg-white p-6 rounded-lg shadow">
            <Image
              src={food.image}
              alt={food.name}
              width={500}
              height={400}
              className="rounded-lg"
            />
            <h3>{food.name}</h3>
            <p>${food.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
