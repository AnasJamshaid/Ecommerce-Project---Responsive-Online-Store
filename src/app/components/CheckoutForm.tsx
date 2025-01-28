"use client";
import { useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    zip: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold">Billing Details</h2>
      
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full border p-2"
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={handleChange}
      />

      {/* Phone Number */}
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2"
        onChange={handleChange}
      />

      {/* Company */}
      <input
        type="text"
        name="company"
        placeholder="Company (Optional)"
        className="w-full border p-2"
        onChange={handleChange}
      />

      {/* Address Fields */}
      <input
        type="text"
        name="address1"
        placeholder="Address Line 1"
        className="w-full border p-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address2"
        placeholder="Address Line 2 (Optional)"
        className="w-full border p-2"
        onChange={handleChange}
      />

      {/* City, Country, ZIP */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="w-full border p-2"
          onChange={handleChange}
        />
      </div>

      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        className="w-full border p-2"
        onChange={handleChange}
      />

      {/* Billing Info Save Option */}
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" /> 
        <span>Save billing information for future purchases</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button type="button" className="bg-gray-300 p-2 rounded">Back to Cart</button>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Proceed to Shipping</button>
      </div>
    </form>
  );
}

