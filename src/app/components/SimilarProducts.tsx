import React, { useState, useEffect, useRef } from "react";
import { getFoodData } from "@/sanity/dataFetching"; // Adjust import path
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FoodItem {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  categories: string[];
}

const SimilarProducts: React.FC<{ currentProductId: string }> = ({
  currentProductId,
}) => {
  const [products, setProducts] = useState<FoodItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current item index
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container
  const [isMobileView, setIsMobileView] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getFoodData();
        const filteredProducts = allProducts.filter(
          (product: FoodItem) => product._id !== currentProductId
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentProductId]);

  const productsToShow = isMobileView ? 1 : 4;

  const addtocart = (food: FoodItem) => {
    try {
        let cart = JSON.parse(localStorage.getItem("cart") || "{}");

        if (typeof cart !== "object" || Array.isArray(cart)) {
            console.error("Cart is not an object. Resetting cart.");
            cart = {};
        }

        // Check if the product already exists
        if (cart[food._id]) {
            cart[food._id].quantity += 1;
        } else {
            cart[food._id] = { product: food, quantity: 1 }; // Store full product data
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        router.push("/addtocart"); // Redirect to cart
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};


  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, products.length - productsToShow));
    if (containerRef.current) {
        const itemWidth = containerRef.current.offsetWidth / productsToShow;
        containerRef.current.scrollLeft += itemWidth;
    }

  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    if (containerRef.current) {
        const itemWidth = containerRef.current.offsetWidth / productsToShow;
        containerRef.current.scrollLeft -= itemWidth;
    }
  };

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-600">No similar products found.</p>
    );
  }

  return (
    <div className="relative w-full flex justify-center items-center mt-16  container pb-9 z-10">
      <div className="max-w-7xl w-full px-4 md:px-0">
        <div className="flex justify-between items-center mb-6 px-11">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">
            You Might Also Like
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full shadow-md text-gray-500 hover:bg-gray-100 hover:text-[#FF9F0D] transition"
              aria-label="Previous Product"
              disabled={currentIndex === 0}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full shadow-md text-gray-500 hover:bg-gray-100 hover:text-[#FF9F0D] transition"
              aria-label="Next Product"
              disabled={currentIndex >= products.length - productsToShow}

            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory justify-center"> {/* Added justify-center */}
          {products.map((product, index) => (
            <div
            key={product._id}
            className={`w-64 flex-shrink-0 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition group relative cursor-pointer snap-start`}
            style={{ scrollSnapAlign: 'start', display: index >= currentIndex && index < currentIndex + productsToShow ? 'block' : 'none' }}
          >
                <Link href={`/shop/${product._id}`}>
                  <div className="relative rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="w-full h-[150px] md:h-[200px] object-cover transition duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
                  </div>
                </Link>
                <div className="mt-3 text-left">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      {product.originalPrice ? (
                        <>
                          <span className="text-[#FF9F0D] font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-gray-500 line-through ml-2">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-[#FF9F0D] font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents navigating to the product page
                      addtocart(product);
                    }}
                      className="bg-[#FF9F0D] text-white rounded-full p-2 hover:bg-[#e08e08] transition"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <MdOutlineShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;