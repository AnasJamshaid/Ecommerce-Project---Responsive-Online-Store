import React from "react";

export default function CartSummary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {/* List of Products */}
        <div>
          <h3 className="text-lg">Product Name</h3>
          <p className="text-sm text-gray-600">Quantity: 1</p>
          <p className="text-sm text-gray-600">Price: $50.00</p>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$50.00</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-$5.00</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$4.00</span>
        </div>

        {/* Total */}
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>$54.00</span>
        </div>

        {/* Place Order Button */}
        <button className="bg-blue-600 text-white p-2 w-full rounded mt-4">Place Order</button>
      </div>
    </div>
  );
}
