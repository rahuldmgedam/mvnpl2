import React, { useState } from 'react';

const CoalSiteSelector = () => {
  const [selectedSite, setSelectedSite] = useState('');
  const sites = [
    'Ghuggus',
    'Gondegaon',
    'Majri',
    'Pimpalgaon',
    'Pimpalgaon Siding',
    'Rajur',
    'Sasti',
    'Tadali',
    'Wani',
  ];

  const handleChange = (event) => {
    setSelectedSite(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="p-6 bg-blue-200 rounded-lg shadow-lg">
        <label
          htmlFor="siteSelector"
          className="block mb-2 text-lg font-semibold text-gray-700"
        >
          Select Site
        </label>
        <select
          id="siteSelector"
          value={selectedSite}
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="" disabled>
            Select a Site
          </option>
          {sites.map((site, index) => (
            <option key={index} value={site}>
              {site}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CoalSiteSelector;
