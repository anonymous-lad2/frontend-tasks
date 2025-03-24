import React, { useState } from 'react';
import { Cards } from './Cards';

export const Extensions = () => {
  const [extensions, setExtensions] = useState("all");

  return (
    <div className="py-8 px-16">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 dark:text-white text-xl">Extensions List</h1>

        <div className="flex items-center gap-4">
          <button
            className={`px-5 py-2 rounded-full ${
              extensions === "all" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setExtensions("all")}
          >
            All
          </button>

          <button
            className={`px-5 py-2 rounded-full ${
              extensions === "active" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setExtensions("active")}
          >
            Active
          </button>

          <button
            className={`px-5 py-2 rounded-full ${
              extensions === "inactive" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setExtensions("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Pass selected filter to Cards */}
      <Cards extensions={extensions} />
    </div>
  );
};
