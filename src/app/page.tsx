'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import Navbar from './component/navbar';
import image2 from '../public/image2.jpg';







function Home() {
  return (
  


    <div className="min-h-screen "> 
    
    <img src={"image2.jpg"} alt="image2" width={2000} height={100} />

    <h1 className='text-amber-900 font-serif gap-2 p-5 text-5xl bg-sky-500 hover:text-red-600  '>Reconnect with your smile!</h1>
    <p className='text-pink-800  font-inter border-4 border-black p-4 text-xl  rounded-lg'>
       brings you a modern, calming experience that 
      leaves your teeth healthy a your soul rejuvenated.Come experience the modern, 
      transformative way to receive dental care in Lahore.
      </p>
      
      
      
      </div>
      
      
  )
}

export default Home;