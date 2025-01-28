'use client';

import React, { useState } from "react";

interface FoodItem {
  name: string;
  price: string;
  image: string | null;
}

interface CartSlideInProps {
  cart: { [key: string]: { product: FoodItem; quantity: number } };
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onCheckout: () => void;
  updateCart: React.Dispatch<React.SetStateAction<{ [key: string]: { product: FoodItem; quantity: number } }>>;
}

const CartSlideIn: React.FC<CartSlideInProps> = ({ cart, setIsCartVisible, onCheckout, updateCart }) => {
  const totalAmount = Object.values(cart).reduce(
    (acc, { product, quantity }) => acc + parseFloat(product.price) * quantity,
    0
  );

  const handleQuantityChange = (productId: string, increase: boolean) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      const updatedItem = { ...updatedCart[productId] };
      updatedItem.quantity = increase
        ? updatedItem.quantity + 1
        : updatedItem.quantity > 1
        ? updatedItem.quantity - 1
        : 0;

      if (updatedItem.quantity === 0) {
        delete updatedCart[productId]; // Remove item from cart if quantity is 0
      } else {
        updatedCart[productId] = updatedItem; // Update item with the new quantity
      }

      updateCart(updatedCart); // Update cart state
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 w-96 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out rounded-l-lg">
      <div className="p-6 flex flex-col h-full space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setIsCartVisible(false)}
            className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {Object.keys(cart).length === 0 ? (
          <div className="flex justify-center items-center flex-1">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1">
            {Object.entries(cart).map(([id, { product, quantity }]) => (
              <div key={id} className="flex items-center mb-4 border-b border-gray-200 pb-4">
                <img
                  src={product.image || ""}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">{quantity} x ${parseFloat(product.price).toFixed(2)}</p>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  ${(parseFloat(product.price) * quantity).toFixed(2)}
                </p>
                <div className="ml-4 flex flex-col items-center">
                  <button
                    onClick={() => handleQuantityChange(id, true)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    &#43;
                  </button>
                  <button
                    onClick={() => handleQuantityChange(id, false)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    &#8722;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-[#FF9F0D] transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlideIn;
