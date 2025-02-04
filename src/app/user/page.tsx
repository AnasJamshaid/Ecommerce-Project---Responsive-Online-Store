"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import { Footer } from "../components/Footer";

interface UserData {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  profileImageUrl: string | null;
}

const UserDataPage: React.FC = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (user) {
      const clerkUserData: UserData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.primaryEmailAddress?.emailAddress || null,
        profileImageUrl: user.imageUrl,
      };
      setUserData(clerkUserData);

      fetch(`/api/user/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData((prevData) => ({ ...prevData, ...data }));
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your data.</div>;
  }

  return (
    <>
      <div className="main-container">
        <SecondHeader />
        <div
          className="relative text-white h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/page-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full space-y-4">
            <h1 className="text-4xl font-semibold text-center text-white">Welcome to Your Profile</h1>
            <Breadcrumb />
          </div>
        </div>

        <div className="container mx-auto my-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
              <h2 className="text-xl font-semibold">Account Options</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Addresses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Payment Methods
                  </a>
                </li>
              </ul>

              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold">Order #12345</p>
                  <p className="text-sm text-gray-600">Placed on 2023-10-01</p>
                  <p className="text-sm text-gray-600">Total: $99.99</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold">Order #12346</p>
                  <p className="text-sm text-gray-600">Placed on 2023-10-05</p>
                  <p className="text-sm text-gray-600">Total: $149.99</p>
                </div>
              </div>
            </div>

            {/* Right Profile Section */}
            <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Profile</h1>
              {userData ? (
                <div>
                  <div className="flex justify-center mb-6">
                    <img
                      src={userData.profileImageUrl || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/150";
                      }}
                    />
                  </div>

                  <div className="space-y-4 text-lg">
                    <p>
                      <strong className="font-semibold">First Name:</strong> {userData.firstName}
                    </p>
                    <p>
                      <strong className="font-semibold">Last Name:</strong> {userData.lastName}
                    </p>
                    <p>
                      <strong className="font-semibold">Email:</strong> {userData.email}
                    </p>
                  </div>
                </div>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UserDataPage;
