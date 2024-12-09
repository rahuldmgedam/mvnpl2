import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSite, setSelectedSite] = useState("Ghuggus");
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toISOString().split("T")[0];

  const handleLogin = () => {
    if (username && password) {
      navigate("/coal-site");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleLogin}
            className="w-1/2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 mr-2"
          >
            Login
          </button>
          <button
            className="w-1/2 p-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            Close
          </button>
        </div>
        <div className="text-center text-sm mb-4">
          <p>{currentTime}</p>
          <p>{currentDate}</p>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Selected Site</label>
          <input
            type="text"
            value={selectedSite}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
