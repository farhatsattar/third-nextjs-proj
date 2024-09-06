'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';





 const ForAppointment=() =>{
    const useroute=useRouter()
return(

    
            <div  className=' min-h-screen  flex flex-row space-x-5 p-8 gap-5 justify-center items-center '>
                

            
            
          
             <h1 className='font-extrabold text-green-600 text-wrap text-2xl  '>
        For booking click button and booknow:</h1>
<button  className=' bg-red-500  rounded-md  py-5 px-8 focus:outline-round text-lg p-8  font-bold hover:text-blue-900' onClick={()=>useroute.push('/BookNow')}>Book Now</button>
</div>
    
)
};
 export default ForAppointment;