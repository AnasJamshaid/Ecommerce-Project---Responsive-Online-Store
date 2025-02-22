"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import SecondHeader from "../components/SecondHeader";
import { Footer } from "../components/Footer";
import CartSlideIn from "../components/CartSlideIn";
import Link from "next/link";
import Image from "next/image";

interface FoodItem {
  id: string;
  name: string;
  price: string;
  image: string | null;
}

const AddToCart = () => {
  const [cart, setCart] = useState<{
    [key: string]: { product: FoodItem; quantity: number };
  }>({});
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
    setLoading(false);
  }, []);

  const totalAmount = Object.values(cart).reduce(
    (acc, { product, quantity }) => {
      const productPrice = product?.price ? parseFloat(product.price) : 0;
      return acc + productPrice * quantity;
    },
    0
  );

  const shippingCharge = 5.99;
  const finalTotal = totalAmount + shippingCharge - discount;

  const handleQuantityChange = (productId: string, increase: boolean) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      const updatedItem = { ...updatedCart[productId] };
      updatedItem.quantity = increase
        ? updatedItem.quantity + 1
        : Math.max(updatedItem.quantity - 1, 1);

      updatedCart[productId] = updatedItem;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = { ...cart };
    delete updatedCart[productId];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="main-container">
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center text-white">
            Add To Cart
          </h1>
          <Breadcrumb />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 space-y-8 mt-16">
        {loading ? (
          <div className="space-y-8 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        ) : Object.keys(cart).length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 p-6">
            <p className="text-4xl text-black font-semibold">
              Your cart is Empty
            </p>
            <p className="text-black text-sm mt-2">
              Looks like you haven't added anything yet.
            </p>
            <Link
              href="/shop"
              className="mt-4 px-6 py-2 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#FF9F0D] transition duration-300"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-8 px-4 md:px-8 lg:px-12">
            {/* Cart Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse shadow-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-gray-800">Product</th>
                    <th className="p-4 text-gray-800">Price</th>
                    <th className="p-4 text-gray-800">Quantity</th>
                    <th className="p-4 text-gray-800">Total</th>
                    <th className="p-4 text-gray-800">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(cart).map(([id, { product, quantity }]) => (
                    <tr key={id} className="border-b">
                      <td className="p-4 flex items-center space-x-4">
                        <div className="w-16 h-16 overflow-hidden rounded-lg">
                          <Image
                            src={product?.image || "/default-image.jpg"}
                            alt={product?.name || "Product Image"}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <span className="text-gray-800 font-semibold">
                          {product?.name || "Unknown Product"}
                        </span>
                      </td>
                      <td className="p-4 text-gray-800">
                        ${parseFloat(product?.price || "0").toFixed(2)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(id, false)}
                            className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                            disabled={quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-gray-800 font-medium">
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(id, true)}
                            className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-gray-800 font-medium">
                        $
                        {(parseFloat(product?.price || "0") * quantity).toFixed(
                          2
                        )}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleRemoveItem(id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coupon & Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Coupon Code
                </h3>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter your code"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-3 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#FF7F0D]"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <div className="mt-2 text-green-600">
                    Coupon applied: -${discount.toFixed(2)}
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Total Bill
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Cart Subtotal:</span>
                  <span className="text-gray-800 font-semibold text-lg">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">
                    Shipping Charge:
                  </span>
                  <span className="text-gray-800 font-semibold text-lg">
                    ${shippingCharge.toFixed(2)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount Applied:</span>
                    <span>- ${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center font-semibold text-lg border-t-2 pt-4 border-gray-200">
                  <span className="text-gray-800">Total Amount:</span>
                  <span className="text-gray-800">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="block text-center w-full px-6 py-3 bg-[#FF9F0D] text-white text-lg font-semibold rounded-lg hover:bg-[#FF7F0D] transition duration-300"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {isCartVisible && (
        <CartSlideIn
          cart={cart}
          setIsCartVisible={setIsCartVisible}
          onCheckout={() => alert("Proceeding to checkout...")}
          updateCart={setCart as any}
        />
      )}
      <Footer />
    </div>
  );
};

export default AddToCart;
