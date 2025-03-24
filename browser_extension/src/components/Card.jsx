import React, { useState } from 'react';

export const Card = ({ img, name, desc, isActive: initialActive }) => {
  const [isActive, setIsActive] = useState(initialActive);

  return (
    <div className="dark:bg-gray-700 bg-gray-300 p-4 rounded-lg flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <img src={img} alt="logo" className="w-12 h-12" />
        <div>
          <h1 className="text-gray-800 dark:text-white text-lg">{name}</h1>
          <p className="text-gray-500 dark:text-gray-300">{desc}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {/* Remove Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Remove
        </button>

        {/* Toggle Button */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
            isActive ? 'bg-green-500' : 'bg-gray-500'
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
              isActive ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};
