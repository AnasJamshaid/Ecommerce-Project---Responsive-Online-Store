import React, { useState, useEffect } from "react";
import { getFoodData } from "@/sanity/dataFetching"; // Adjust import path
import Image from "next/image";
import { PiGitDiffBold } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import Link from "next/link"; // Import Link component for navigation

interface FoodItem {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  categories: string[];
}

const SimilarProducts: React.FC<{ currentProductId: string; onProductClick: (id: string) => void }> = ({
  currentProductId,
  onProductClick,
}) => {
  const [products, setProducts] = useState<FoodItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getFoodData();

        // Exclude the current product from the list
        const filteredProducts = allProducts.filter(
          (product: FoodItem) => product._id !== currentProductId
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentProductId]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 4) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 4 + products.length) % products.length);
  };

  if (products.length === 0) {
    return <p className="text-center text-gray-600">No similar products found.</p>;
  }

  return (
    <div className="relative w-full ">
      {/* Heading with Arrow Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800"style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>Similar Products</h2>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className=" p-2 rounded-full shadow-lg text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-lg text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="flex gap-6 overflow-x-auto py-6">
  {products.slice(currentIndex, currentIndex + 4).map((product) => (
    <div
      key={product._id}
      className="w-[250px] p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 group relative cursor-pointer"
    >
      {/* Product Image */}
      <Link href={`/shop/${product._id}`}>
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            className="w-full h-[250px] object-cover rounded-lg group-hover:opacity-80 transition duration-300"
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
      </Link>

      {/* Product Info */}
      <h3 className="font-semibold text-lg text-gray-800 mt-4">{product.name}</h3>
      <div className="flex items-center space-x-2 mt-2">
        {product.originalPrice && (
          <>
            <p className="text-[#FF9F0D] font-bold text-xl">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          </>
        )}
        {!product.originalPrice && (
          <p className="text-[#FF9F0D] font-bold text-xl">
            ${product.price.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default SimilarProducts;
