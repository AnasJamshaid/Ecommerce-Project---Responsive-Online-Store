'use client'


import React from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiGitDiffBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { Filters } from "../components/Filters";
import { Sorts } from "../components/Sorts";
import { Footer } from "../components/Footer";
import Image from "next/image"; 
import { getFoodData } from "@/sanity/dataFetching";
import { urlFor } from "@/sanity/lib/image";

type FoodItem = {
  _id: string;
  name: string;
  price: string;
  originalPrice: string;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
};

const ShopPage: React.FC = () => {
  const [foods, setFoods] = React.useState<FoodItem[]>([]);

  // Fetch food items data
  React.useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoodData();
      setFoods(data);
    };
    fetchFoods();
  }, []);

  const pageTitle = "Our Shop";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {foods.map((food) => (
                <Link href={`/shop/${food._id}`} key={food._id}>
                  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 group relative cursor-pointer">
                    <div className="relative">
                      <Image
                        src={urlFor(food.image).url()}
                        alt={food.name}
                        width={500}
                        height={400}
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
                </Link>
              ))}
            </div>
          </div>

          <div className="sticky top-20 hidden md:block">
            <Filters />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
