
// import React, { useState } from "react";

// function Home() {
//   const [formData, setFormData] = useState({
//     gatePassNo: "",
//     inOut: "",
//     doNumber: "",
//     supplier: "",
//     product: "",
//     qtyRemaining: "",
//     grossWeight: "",
//     backupDate: "",
//     backupTime: "",
//     tareWeight: "",
//     tareDate: "",
//     tareTime: "",
//     weightDiff: "",
//     transporter: "",
//     source: "",
//     wclGatePass: "",
//     wclDate: "",
//     wclOutTime: "",
//     wclGrossWeight: "",
//     wclTareWeight: "",
//     wclNetWeight: "",
//     grade: "",
//     siteName: "Ghuggus",
//     truckNo: "",
//     panNo: "AAMFH6820P",
//     gstinNo: "27AAMFH6820P1ZQ",
//     comments: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-teal-50">
//       {/* Top Navbar */}
//       <nav className="bg-teal-200 p-4">
//         <ul className="flex space-x-6 justify-center text-sm font-medium text-gray-700">
//           <li className="hover:underline cursor-pointer">Weighment</li>
//           <li className="hover:underline cursor-pointer">Customer Report</li>
//           <li className="hover:underline cursor-pointer">Supplier Report</li>
//           <li className="hover:underline cursor-pointer">DO Report</li>
//           <li className="hover:underline cursor-pointer">Transport Report</li>
//           <li className="hover:underline cursor-pointer">Help</li>
//           <li className="hover:underline cursor-pointer">Display Report</li>
//         </ul>
//       </nav>

//       {/* Form */}
//       <form
//         className="max-w-7xl mx-auto bg-white mt-6 p-6 shadow-md rounded-md"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex justify-between mb-4">
//           <button
//             type="button"
//             className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//           >
//             Refresh
//           </button>
//           <div className="flex items-center space-x-2">
//             <label className="text-gray-700">WB</label>
//             <input
//               type="number"
//               name="wb"
//               className="px-2 py-1 border rounded-md"
//               readOnly
//               value="0"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <label className="block text-gray-700">Gate Pass No.</label>
//             <input
//               type="text"
//               name="gatePassNo"
//               value={formData.gatePassNo}
//               onChange={handleInputChange}
//               placeholder="GP-XXXXXX"
//               className="w-full px-2 py-1 border rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">IN/OUT</label>
//             <select
//               name="inOut"
//               value={formData.inOut}
//               onChange={handleInputChange}
//               className="w-full px-2 py-1 border rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="IN">IN</option>
//               <option value="OUT">OUT</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700">DO No.</label>
//             <select
//               name="doNumber"
//               value={formData.doNumber}
//               onChange={handleInputChange}
//               className="w-full px-2 py-1 border rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="DO1">DO1</option>
//               <option value="DO2">DO2</option>
//             </select>
//           </div>
//           {/* Additional Fields */}
//           <div>
//             <label className="block text-gray-700">Supplier</label>
//             <select
//               name="supplier"
//               value={formData.supplier}
//               onChange={handleInputChange}
//               className="w-full px-2 py-1 border rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="Supplier 1">Supplier 1</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700">Product</label>
//             <select
//               name="product"
//               value={formData.product}
//               onChange={handleInputChange}
//               className="w-full px-2 py-1 border rounded-md"
//             >
//               <option value="">Select</option>
//               <option value="Product 1">Product 1</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700">QTY Remaining</label>
//             <input
//               type="text"
//               name="qtyRemaining"
//               value={formData.qtyRemaining}
//               onChange={handleInputChange}
//               className="w-full px-2 py-1 border rounded-md"
//               placeholder="Enter QTY Remaining"
//             />
//           </div>
//           {/* More fields here (add as needed, keeping the grid layout) */}
//           <div>
//             <label className="block text-gray-700">Site Name</label>
//             <input
//               type="text"
//               name="siteName"
//               value={formData.siteName}
//               readOnly
//               className="w-full px-2 py-1 border rounded-md bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Truck No.</label>
//             <input
//               type="text"
//               name="truckNo"
//               value={formData.truckNo}
//               onChange={handleInputChange}
//               placeholder="Enter Truck No."
//               className="w-full px-2 py-1 border rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">PAN No.</label>
//             <input
//               type="text"
//               name="panNo"
//               value={formData.panNo}
//               readOnly
//               className="w-full px-2 py-1 border rounded-md bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">GSTIN No.</label>
//             <input
//               type="text"
//               name="gstinNo"
//               value={formData.gstinNo}
//               readOnly
//               className="w-full px-2 py-1 border rounded-md bg-gray-100"
//             />
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="block text-gray-700">Additional Comments</label>
//           <textarea
//             name="comments"
//             value={formData.comments}
//             onChange={handleInputChange}
//             className="w-full px-2 py-1 border rounded-md"
//             rows="4"
//             placeholder="Enter any additional comments here..."
//           ></textarea>
//         </div>
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function WeightmentForm() {
  const [formData, setFormData] = useState({
    gatePassNo: "",
    inOut: "",
    doNumber: "",
    supplier: "",
    product: "",
    qtyRemaining: "",
    grossWeight: "",
    backupDate: "",
    backupTime: "",
    tareWeight: "",
    tareDate: "",
    tareTime: "",
    netWeight: "",
    weightDiff: "",
    transporter: "",
    source: "",
    wclGatePass: "",
    wclDate: "",
    wclOutTime: "",
    wclGrossWeight: "",
    wclTareWeight: "",
    wclNetWeight: "",
    grade: "",
    remarks: "",
    siteName: "Ghuggus",
    truckNo: "",
    panNo: "AAMFH6820P",
    gstinNo: "27AAMFH6820P1ZQ",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Top Navbar */}
      <nav className="bg-teal-200 p-4">
        <ul className="flex space-x-6 justify-center text-sm font-medium text-gray-700">
          <li className="hover:underline cursor-pointer">Weighment</li>
          <li className="hover:underline cursor-pointer">Customer Report</li>
          <li className="hover:underline cursor-pointer">Supplier Report</li>
          <Link to='/doMaster' >
          
          <li className="hover:underline cursor-pointer">DO Report</li>
          </Link>
          <li className="hover:underline cursor-pointer">Transport Report</li>
          <li className="hover:underline cursor-pointer">Help</li>
          <li className="hover:underline cursor-pointer">Display Report</li>
        </ul>
      </nav>

      {/* Form */}
      <form
        className="max-w-7xl mx-auto bg-white mt-6 p-6 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        {/* First Section */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Gate Pass No.</label>
            <input
              type="text"
              name="gatePassNo"
              value={formData.gatePassNo}
              onChange={handleInputChange}
              placeholder="GP-XXXXXX"
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          {/* Other fields like IN/OUT, DO No., Supplier, Product, etc. */}
          <div>
            <label className="block text-gray-700">QTY Remaining</label>
            <input
              type="text"
              name="qtyRemaining"
              value={formData.qtyRemaining}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter QTY Remaining"
            />
          </div>
          <div>
            <label className="block text-gray-700">Gross Weight</label>
            <input
              type="text"
              name="grossWeight"
              value={formData.grossWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter Gross Weight"
            />
          </div>
          <div>
            <label className="block text-gray-700">Backup Date</label>
            <input
              type="date"
              name="backupDate"
              value={formData.backupDate}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Backup Time</label>
            <input
              type="time"
              name="backupTime"
              value={formData.backupTime}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tare Weight</label>
            <input
              type="text"
              name="tareWeight"
              value={formData.tareWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter Tare Weight"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tare Date</label>
            <input
              type="date"
              name="tareDate"
              value={formData.tareDate}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tare Time</label>
            <input
              type="time"
              name="tareTime"
              value={formData.tareTime}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Net Weight</label>
            <input
              type="text"
              name="netWeight"
              value={formData.netWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Net Weight"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">WCL Gross Wt</label>
            <input
              type="text"
              name="wclGrossWeight"
              value={formData.wclGrossWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter WCL Gross Wt"
            />
          </div>
          <div>
            <label className="block text-gray-700">WCL Tare Wt</label>
            <input
              type="text"
              name="wclTareWeight"
              value={formData.wclTareWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter WCL Tare Wt"
            />
          </div>
          <div>
            <label className="block text-gray-700">WCL Net Wt</label>
            <input
              type="text"
              name="wclNetWeight"
              value={formData.wclNetWeight}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Enter WCL Net Wt"
            />
          </div>
          <div>
            <label className="block text-gray-700">Grade</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            >
              <option value="">Select</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Remarks</label>
            <select
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border rounded-md"
            >
              <option value="">Select</option>
              <option value="Remark 1">Remark 1</option>
              <option value="Remark 2">Remark 2</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border rounded-md"
            rows="4"
            placeholder="Enter any additional comments here..."
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WeightmentForm;
