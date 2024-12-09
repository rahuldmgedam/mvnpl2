import React, { useState } from 'react'

const MasterNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
  return (
    <nav className="bg-teal-200 p-4 shadow-md">
    <ul className="flex space-x-6 items-center">
      <li className="relative">
        {/* Master Dropdown */}
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 text-gray-700 font-medium bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Master
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute mt-2 bg-white border rounded-md shadow-lg w-48">
            <li className="hover:bg-gray-100">
              <a
                href="/source"
                className="block px-4 py-2 text-gray-700"
              >
                Source Master
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="/material-master"
                className="block px-4 py-2 text-gray-700"
              >
                Material Master
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="/grade-master"
                className="block px-4 py-2 text-gray-700"
              >
                Grade Master
              </a>
            </li>
           
            <li className="hover:bg-gray-100">
              <a
                href="/supplier-master"
                className="block px-4 py-2 text-gray-700"
              >
                Supplier Master
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="/transport-master"
                className="block px-4 py-2 text-gray-700"
              >
                Transport Master
              </a>
            </li>
            <li className="hover:bg-gray-100">
              <a
                href="/destination-master"
                className="block px-4 py-2 text-gray-700"
              >
                Destination Master
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  </nav>
  )
}

export default MasterNav