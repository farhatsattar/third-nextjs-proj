'use client'
import React from 'react'
import Image from 'next/image';
import next from 'next';
import image8 from '../public/image8.jpg';

function About() {
  return (
    <div className='min-h-screen'><h1 className='font-black p-3 text-sky-400   text-5xl'>
      An oasis of calm, compassion and tranquility</h1>
      

    <p className='text-purple-800 gap-10  text-balance p-7'>Every member of our team is focused on ensuring you receive clear, compassionate, and delightful treatments - and on making sure you feel at home.
    
    Receive dental care in our state-of-the-art offices designed by experts to serve as places of comfort and relaxation.

    </p>
    <img src='image8.jpg' alt='image8' width={2000} height={100}/>
    
    
      
    

    
    </div>
    
  )
  
}

export default About;