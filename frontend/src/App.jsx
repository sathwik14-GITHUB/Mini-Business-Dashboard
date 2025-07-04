import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayCard from "./components/DisplayCard";
import "./index.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", location: "" });
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setBusinessData(data);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const response = await fetch(
      `http://localhost:5000/regenerate-headline?name=${formData.name}&location=${formData.location}`
    );
    const data = await response.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center mt-4">Business SEO Dashboard</h1>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Generate AI-powered SEO headlines for your business
      </p>
      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Enter Your Business Information
        </h2>
        <InputForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        {businessData && (
          <DisplayCard
            data={businessData}
            onRegenerate={regenerateHeadline}
          />
        )}
      </div>
    </div>
  );
}
