"use client";
import { useState } from "react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Payment</h2>
      <select className="w-full border p-2" onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="">Select Payment Method</option>
        <option value="stripe">Credit/Debit Card (Stripe)</option>
        <option value="paypal">PayPal</option>
      </select>

      <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded">
        Proceed to Payment
      </button>
    </div>
  );
}
