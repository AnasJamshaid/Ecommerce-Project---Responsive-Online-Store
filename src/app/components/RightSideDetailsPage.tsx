import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiGitDiffBold } from "react-icons/pi";
import { useParams } from "next/navigation";
import { getFoodDataById } from "@/sanity/dataFetching";
import { FaFacebook, FaInstagram, FaRegHeart, FaTwitter, FaYoutube } from "react-icons/fa";
import CartSlideIn from "./CartSlideIn"; // Import the CartSlideIn component

type FoodItem = {
    _id: string;
    name: string;
    image?: string;  // image can be string or undefined
    available?: boolean;
    originalPrice?: string;
    price: string;
    rating?: number;
    reviewCount?: number;
    categories?: string[];
    tags?: string[];
    sku?: string;
    shortDescription?: string;
};

// Define the cart type where the product can have an image of type `string | undefined`
const [cart, setCart] = useState<{ [key: string]: { product: FoodItem; quantity: number } }>({});



export const RightSideDetailsPage: React.FC = () => {
    const params = useParams();
    const id = params.id as string;
    const [product, setProduct] = useState<FoodItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [cart, setCart] = useState<{ [key: string]: { product: FoodItem; quantity: number } }>({});
    const [isCartVisible, setIsCartVisible] = useState(false);

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

    // Get cart from localStorage on page load
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0 && product) {
            setCart((prevCart) => {
                const updatedCart = {
                    ...prevCart,
                    [product._id]: {
                        product,
                        quantity: prevCart[product._id] ? prevCart[product._id].quantity + quantity : quantity,
                    },
                };

                // Save updated cart to localStorage
                localStorage.setItem("cart", JSON.stringify(updatedCart));

                return updatedCart;
            });
            alert(`Added ${quantity} ${product.name}(s) to cart!`);
            setIsCartVisible(true); // Show cart slice/modal when added
        } else {
            alert("Please select a valid quantity!");
        }
    };

    const handleCheckout = () => {
        // Handle checkout logic here, like navigating to a checkout page or showing a checkout form
        alert("Proceeding to checkout...");
    };

    return (
        <div className="flex-1">
            {/* Stock Status */}
            <div
                className={`px-3 py-1 rounded-md text-center w-28 text-sm text-white ${product?.available ? "bg-[#FF9F0D]" : "bg-[#FF0000]"}`}
                aria-live="polite"
            >
                {product?.available ? "In Stock" : "Out of Stock"}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-extrabold mt-4" style={{ fontFamily: "Helvetica, Arial, sans-serif" }} aria-labelledby="product-name">
                {product?.name || "Product Name"}
            </h1>

            {/* Short Description */}
            <p className="mt-2 text-base text-gray-600" style={{ fontFamily: "Inter, sans-serif" }} aria-describedby="short-description">
                {product?.shortDescription || "No short description available."}
            </p>

            <div className="mt-2 border-b border-gray-300"></div>

            {/* Pricing */}
            <div className="mt-4 flex items-center space-x-4">
                {product?.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                        {parseFloat(product.originalPrice).toFixed(2)} $
                    </span>
                )}
                {product?.originalPrice && <span className="text-2xl text-black">|</span>}
                <span className="text-3xl font-bold text-black">
                    {parseFloat(product?.price || "0.00").toFixed(2)} $
                </span>
            </div>

            {/* Reviews Section */}
            <div className="mt-4">
                <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, index) => {
                            const isFilled = index < Math.floor(product?.rating ?? 0);
                            return (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={isFilled ? "#FF9F0D" : "#FF9F0D"}
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    className="star-icon"
                                    aria-hidden="true"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            );
                        })}
                    </div>
                    <span className="text-lg text-gray-500">|</span>
                    <span className="text-sm text-gray-500">{product?.reviewCount || "5.0"} Rating</span>
                    <span className="text-lg text-gray-500">|</span>
                    <span className="text-sm text-gray-600">{product?.reviewCount || "22"} Reviews</span>
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
                        <button
                            onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
                            className="w-10 h-10 flex items-center justify-center border border-black text-black font-bold hover:border-[#FF9F0D] hover:text-[#FF9F0D] focus:outline-none focus:border-[#FF9F0D]"
                        >
                            -
                        </button>
                        <div className="w-16 h-10 flex items-center justify-center border-y border-black text-lg font-semibold">
                            {quantity}
                        </div>
                        <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="w-10 h-10 flex items-center justify-center border border-black text-black font-bold hover:border-[#FF9F0D] hover:text-[#FF9F0D] focus:outline-none focus:border-[#FF9F0D]"
                        >
                            +
                        </button>
                    </div>
                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="flex items-center gap-2 px-4 py-2 bg-[#FF9F0D] text-white font-bold rounded shadow hover:bg-[#e88d0c] focus:outline-none"
                    >
                        <MdOutlineShoppingBag size={18} />
                        Add to Cart
                    </button>

                    {/* Display Cart Slide-In */}
                    {isCartVisible && (
                        <CartSlideIn cart={cart} setIsCartVisible={setIsCartVisible} onCheckout={handleCheckout} updateCart={setCart} />
                    )}
                </div>
            </div>

            <div className="mt-2 border-b border-gray-300"></div>

            <div className="mt-6 space-y-4 text-gray-800">
                {/* Wishlist and Compare */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF9F0D] transition-all duration-300">
                        <FaRegHeart size={20} />
                        <span className="font-medium">Add to Wishlist</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF9F0D] transition-all duration-300">
                        <PiGitDiffBold size={20} />
                        <span className="font-medium">Compare</span>
                    </button>
                </div>
                {/* Categories */}
                <div className="flex items-start gap-2">
                    <span className="font-semibold">Categories:</span>
                    <span className="text-gray-600">{product?.categories?.join(", ") || "N/A"}</span>
                </div>

                {/* Tags */}
                <div className="flex items-start gap-2">
                    <span className="font-semibold">Tags:</span>
                    <span className="text-gray-600">{product?.tags?.join(" | ") || "N/A"}</span>
                </div>

                {/* SKU */}
                <div className="flex items-start gap-2">
                    <span className="font-semibold">SKU:</span>
                    <span className="text-gray-600">{product?.sku || "N/A"}</span>
                </div>

                {/* Share Icons */}
                <div>
                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Share:</span>
                        <div className="flex items-center gap-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
                                <FaFacebook size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2 border-b border-gray-300"></div>

            </div>
        </div>
    );
};
