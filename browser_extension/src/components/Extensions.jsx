import React, { useState } from 'react'
import { Cards } from './Cards';

export const Extensions = () => {

    const [extensions, setExtensions] = useState("all");
  return (
    <div className='py-8 px-16'>
        <div className='flex justify-between items-center'>
            <h1 className='text-gray-800 dark:text-white text-xl'>Extensions List</h1>

            <div className='flex items-center gap-4'>
                <button className='px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded-full'>All</button>

                <button className='px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded-full'>Active</button>

                <button className='px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded-full'>Inactive</button>
            </div>
        </div>

        <Cards/>
        
    </div>
  )
}
