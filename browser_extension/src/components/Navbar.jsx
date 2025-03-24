import React from 'react'
import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'

export const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className='flex justify-between items-center py-4 px-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md'>
        <div>
            <img src={logo} alt="logo" />
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}
        </button>
    </div>
  )
}
