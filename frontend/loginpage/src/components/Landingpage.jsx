import React from "react";
import { useLocation } from "react-router-dom";

export default function Landingpage() {
  const location = useLocation();
  const token = location.state?.token;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 flex flex-col items-center justify-center">
      <div className="text-center bg-white shadow-xl rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Your Secure Zone 🔐
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Please keep your token secure. Protect it like a treasure chest 🏴‍☠️
          — unauthorized access can compromise your account!
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner text-gray-800">
          <p className="text-lg font-mono">
            <strong>Your Token:</strong>
          </p>
          <p className="break-all mt-2 text-indigo-800 bg-indigo-100 p-2 rounded-md font-medium">
            {token || "No token found!"}
          </p>
        </div>
      </div>
    </div>
  );
}
