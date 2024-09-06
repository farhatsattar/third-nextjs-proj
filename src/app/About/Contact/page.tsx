import React from 'react'
import Image from 'next/image';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShopLock } from "react-icons/fa6";


function Contact() {
  return (
    < div className='min-h-screen p-10 space-x-5 text-blue-800 flex flex-col items-start'>
      <FaPhoneVolume />
      contact : (0321)4591889
      
      <div>  
      <MdOutlineMarkEmailUnread /> 
      
       E-mail:ibrahim@dentalsurgeryclinic.come
       
       <div>
       <FaShopLock />
        
        Address: Dental surgery clinic ,4-ghazali road ,Asghar Hospital basement samanabad,Lahore.
        
        
        </div>
        </div>
        
      

       
        
    </div>
  )
}

export default Contact;