import React from 'react'
import { useRouter } from 'next/navigation';


function BookNow() {
  return (
    <div className='min-h-screen'><h1 className='font-bold text-left p-3'>
      Patient information for appointment:</h1>
      <div className='text-left p-2'>Name : </div>
      
      <div className='text-left p-2'>Phone No:</div>
      <div className='text-left p-2'>Address:</div>
      <div className='text-left p-2'>service want to have:</div>
      
      </div>
  )
}

export default BookNow;