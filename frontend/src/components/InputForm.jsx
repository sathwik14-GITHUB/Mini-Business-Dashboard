import React from "react";

export default function InputForm({ formData, setFormData, handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Business Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 border rounded bg-blue-50"
        />
      </div>
      <div>
        <label className="block font-medium">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
          className="w-full p-2 border rounded bg-blue-50"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-2 rounded hover:opacity-90"
      >
        {loading ? "Generating..." : "Generate SEO Headline"}
      </button>
    </form>
  );
}
