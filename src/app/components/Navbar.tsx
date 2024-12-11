import React from 'react';
import Image from 'next/image';
import { FaSearch,FaSlidersH,FaCog,FaBell,FaHeart,FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
        <div className="input relative w-full md:w-auto">
          <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2 text-[#9ca3af] text-2xl' />
          <input 
            type="text" 
            title="search" 
            placeholder="Say something here" 
            className='border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12'
          />
          <FaSlidersH className='absolute top-1/2 right-12 -translate-y-1/2 text-[#9ca3af] text-2xl' />
        </div>
      </div>
      <div className="icons flex gap-8 mt-4 md:mt-0">
        <FaHeart className="text-[#9ca3af] text-2xl" />
      <FaBell className='text-[#9ca3af] text-2xl' />
        <FaCog className='text-[#9ca3af] text-2xl' />
        <FaUser className='text-[#9ca3af] text-2xl' />
        
        </div>
    </div>
  );
}