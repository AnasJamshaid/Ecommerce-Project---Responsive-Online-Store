import React, { useEffect, useState } from "react";

interface FoodItem {
  name: string;
  price: string;
  image: string;
}

interface CartSlideInProps {
  cart: { [key: string]: { product: FoodItem; quantity: number } };
  setIsCartVisible: (isVisible: boolean) => void;
  onCheckout: () => void;
  updateCart: (cart: { [key: string]: { product: FoodItem; quantity: number } }) => void;
}

const CartSlideIn: React.FC<CartSlideInProps> = ({
  cart,
  setIsCartVisible,
  onCheckout,
  updateCart,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActionInProgress, setIsActionInProgress] = useState(false);

  // Slide-in effect on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isActionInProgress) {
      // Auto-close after 5 seconds if no action is in progress
      const timeout = setTimeout(() => {
        setIsCartVisible(false);
      }, 10000);

      // Clean up timeout on unmount or when actions are in progress
      return () => clearTimeout(timeout);
    }
  }, [isActionInProgress, setIsCartVisible]);

  const handleIncreaseQuantity = (productId: string) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      updatedCart[productId].quantity += 1;
      // Ensure updateCart is a function before calling
      if (typeof updateCart === "function") {
        updateCart(updatedCart);
      } else {
        console.error("updateCart is not a function");
      }
      setIsActionInProgress(true);
    } else {
      console.error("Product not found in the cart.");
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId]; // Remove product from cart if quantity is 0
      }
      // Ensure updateCart is a function before calling
      if (typeof updateCart === "function") {
        updateCart(updatedCart);
      } else {
        console.error("updateCart is not a function");
      }
      setIsActionInProgress(true);
    } else {
      console.error("Product not found in the cart.");
    }
  };

  // Reset action progress after a brief timeout
  useEffect(() => {
    if (isActionInProgress) {
      const timeout = setTimeout(() => {
        setIsActionInProgress(false);
      }, 500); // Adjust this timeout to suit your needs
      return () => clearTimeout(timeout);
    }
  }, [isActionInProgress]);

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-96 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out rounded-l-lg ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setIsCartVisible(false)}
            className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Cart Content */}
        {Object.keys(cart).length === 0 ? (
          <div className="flex justify-center items-center flex-1">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1">
            {Object.entries(cart).map(([id, { product, quantity }]) => (
              <div
                key={id}
                className="flex items-center mb-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    {quantity} x ${parseFloat(product.price).toFixed(2)}
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  ${(parseFloat(product.price) * quantity).toFixed(2)}
                </p>
                <div className="ml-4 flex flex-col items-center">
                  <button
                    onClick={() => handleIncreaseQuantity(id)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    &#43; {/* Plus symbol */}
                  </button>
                  <button
                    onClick={() => handleDecreaseQuantity(id)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    &#8722; {/* Minus symbol */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total and Checkout */}
        <div className="mt-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>
              ${" "}
              {Object.values(cart)
                .reduce(
                  (acc, { product, quantity }) =>
                    acc + parseFloat(product.price) * quantity,
                  0
                )
                .toFixed(2)}
            </span>
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
