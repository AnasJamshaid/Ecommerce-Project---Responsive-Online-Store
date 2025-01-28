'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the CartItem type
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Create the CartContext
const CartContext = createContext<any>(null);

export const useCart = () => {
  return useContext(CartContext);
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string>("");

  useEffect(() => {
    // Get the saved cart from localStorage on page load
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === "Foodtuck99") {
      setCartItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          price: item.price - 50, // Apply discount
        }))
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        couponCode,
        setCouponCode,
        addToCart,
        removeFromCart,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
