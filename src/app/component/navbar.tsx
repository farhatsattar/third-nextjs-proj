'use client'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa';

import { FaPhoneAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className='bg-blue-950 text-white p-2'>
        
        <div className='container mx-auto flex justify-between items-center'>
            <a href=""className="text-2xl hover:text-purple-700 font-bold"> Dental surgery clinic </a>

            <div className='flex justify-end space-x-10'>
            <FaFacebook size={30}  href='https://www.facebook.com/muhammad.zafar.7505?mibextid=ZbWK'/> 
          <div className='space-x-5'>
          <FaPhoneAlt  />
          0321-4591889</div>
          </div>
          
          
      

        </div>
        </nav>
  )
}
