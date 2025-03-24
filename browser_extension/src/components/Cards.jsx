import React from 'react';
import data from '../data.json';
import { Card } from './Card';

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-11">
      {data.map((item, index) => (
        <Card
          key={index}
          img={`/assets/images/${item.logo}`} // ✅ Fixed path
          name={item.name}
          desc={item.description}
          isActive={item.isActive} // ✅ Pass isActive from JSON
        />
      ))}
    </div>
  );
};
