import React from "react";
import { FaStar, FaUsers } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

export default function DisplayCard({ data, onRegenerate }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-center mb-2">
        Business Dashboard Results
      </h2>

      <h3 className="text-2xl font-bold text-center">{data.name}</h3>
      <p className="text-center text-gray-500 mb-4">📍 {data.location}</p>

      {/* Rating and Reviews */}
      <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-4">
        <div>
          <p className="font-medium text-sm text-gray-600 mb-1">
            Simulated Google Business Profile
          </p>
          <div className="flex items-center text-yellow-500 text-lg font-semibold">
            <FaStar className="mr-1" />
            {data.rating}
          </div>
        </div>
        <div className="text-sm text-gray-700 flex items-center">
          <FaUsers className="mr-1" />
          {data.reviews} reviews
        </div>
      </div>

      {/* Headline Section */}
      <div className="mb-4">
        <p className="font-medium mb-1">AI-Generated SEO Headline</p>
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm text-gray-500">Latest</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-md text-blue-700 font-medium">
          {data.headline}
        </div>
      </div>

      {/* Regenerate Button */}
      <button
        onClick={onRegenerate}
        className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
      >
        <FiRefreshCcw />
        Regenerate SEO Headline
      </button>

      {/* Metrics */}
      <div className="border-t mt-6 pt-4 grid grid-cols-3 text-center text-sm gap-2">
        <div>
          <p className="text-green-600 text-xl font-bold">{data.satisfaction}%</p>
          <p className="text-gray-600">Customer Satisfaction</p>
        </div>
        <div>
          <p className="text-blue-600 text-xl font-bold">{data.responseTime}h</p>
          <p className="text-gray-600">Avg Response Time</p>
        </div>
        <div>
          <p className="text-purple-600 text-xl font-bold">{data.years}+</p>
          <p className="text-gray-600">Years in Business</p>
        </div>
      </div>
    </div>
  );
}
