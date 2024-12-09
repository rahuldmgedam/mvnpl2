import React, { useState } from "react";
import MasterNav from "../MasterNav";

function SourceMaster() {
  const [source, setSource] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sources, setSources] = useState([
    "Source 1",
    "Source 2",
    "Source 3",
  ]); // Example data

  const handleAddSource = () => {
    if (source) {
      setSources([...sources, source]);
      setSource("");
      alert("Source added successfully!");
    } else {
      alert("Please enter a source name.");
    }
  };

  const handleDeleteSource = () => {
    if (selectedSource) {
      setSources(sources.filter((src) => src !== selectedSource));
      setSelectedSource("");
      alert("Source deleted successfully!");
    } else {
      alert("Please select a source to delete.");
    }
  };

  const filteredSources = sources.filter((src) =>
    src.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (<>
    <MasterNav/>
    <div className="p-6 bg-teal-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Source Master</h1>

      {/* Add Source */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Enter Source:</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-teal-300"
          placeholder="Enter source name"
        />
        <button
          onClick={handleAddSource}
          className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
        >
          Add Source
        </button>
      </div>

      {/* Update/Delete Source */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select on Source name to update or delete:
        </label>
        <select
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-teal-300"
        >
          <option value="">--Select a Source--</option>
          {sources.map((src, index) => (
            <option key={index} value={src}>
              {src}
            </option>
          ))}
        </select>
        <button
          onClick={handleDeleteSource}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          Delete Source
        </button>
      </div>

      {/* Search Source */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Search:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-teal-300"
          placeholder="Search Source"
        />
        <ul className="mt-4">
          {filteredSources.length > 0 ? (
            filteredSources.map((src, index) => (
              <li key={index} className="text-gray-700 p-1">
                {src}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No sources found.</li>
          )}
        </ul>
      </div>
    </div>  </>
  );
}

export default SourceMaster;
