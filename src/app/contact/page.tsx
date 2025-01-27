'use client'

import React, { useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const pageTitle = "Contact"; // Static title for the Contact page

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      }
    }
  };

  const validateForm = (): boolean => {
    let formIsValid = true;
    const newErrors: Errors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name) {
      formIsValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      formIsValid = false;
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject) {
      formIsValid = false;
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-5xl font-bold text-white">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto my-12 px-6">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#FF9F0D" }}
        >
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Fill out the form below to reach out to
          us.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 border-t-4"
          style={{ borderColor: "#FF9F0D" }}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              style={{ backgroundColor: "#FF9F0D" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
