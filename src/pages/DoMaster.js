import React, { useState } from "react";
import MasterNav from "../components/MasterNav";

function DoMaster() {
  const [formData, setFormData] = useState({
    inOut: "",
    doNumber: "",
    doDate: "",
    material: "",
    grade: "",
    quantity: "",
    source: "",
    party: "",
    doValidUpto: "",
    site: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
      <>
         <div>
     <MasterNav/>
      </div>
    <div className="min-h-screen bg-teal-50 flex justify-center items-center">
   
      <form
        className="bg-white p-6 shadow-md rounded-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-semibold text-green-600 mb-4">
          Do Master
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">IN/OUT</label>
          <select
            name="inOut"
            value={formData.inOut}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select--</option>
            <option value="IN">IN</option>
            <option value="OUT">OUT</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">DO No.</label>
          <input
            type="text"
            name="doNumber"
            value={formData.doNumber}
            onChange={handleInputChange}
            placeholder="Enter DO Number"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">DO Date</label>
          <input
            type="date"
            name="doDate"
            value={formData.doDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Material</label>
          <select
            name="material"
            value={formData.material}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select Material--</option>
            <option value="Material 1">Material 1</option>
            <option value="Material 2">Material 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Grade</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select Grade--</option>
            <option value="Grade A">Grade A</option>
            <option value="Grade B">Grade B</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">QTY</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Enter Quantity"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Source</label>
          <select
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select Source--</option>
            <option value="Source 1">Source 1</option>
            <option value="Source 2">Source 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Party</label>
          <select
            name="party"
            value={formData.party}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select Party--</option>
            <option value="Party 1">Party 1</option>
            <option value="Party 2">Party 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">DO Valid Upto</label>
          <input
            type="date"
            name="doValidUpto"
            value={formData.doValidUpto}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Select a Site</label>
          <select
            name="site"
            value={formData.site}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select a Site--</option>
            <option value="Site 1">Site 1</option>
            <option value="Site 2">Site 2</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            New
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default DoMaster;
