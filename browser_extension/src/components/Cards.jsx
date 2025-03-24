import React, { useState } from 'react';
import data from '../data.json';
import { Card } from './Card';

export const Cards = ({ extensions }) => {
  const [cards, setCards] = useState(data); // Manage state at parent level

  // Function to remove a card by name
  const handleRemove = (name) => {
    setCards(cards.filter((item) => item.name !== name));
  };

  // Filter data based on selected option
  const filteredData = cards.filter((item) => {
    if (extensions === "active") return item.isActive;
    if (extensions === "inactive") return !item.isActive;
    return true; // Show all if "all" is selected
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
      {filteredData.map((item, index) => (
        <Card
          key={index}
          img={item.logo}
          name={item.name}
          desc={item.description}
          isActive={item.isActive}
          onRemove={handleRemove} // ✅ Pass the remove function
        />
      ))}
    </div>
  );
};
