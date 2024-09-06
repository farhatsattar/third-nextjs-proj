import React from 'react'
import Image from 'next/image'
import image1 from "../public/image1.jpg"
import image6 from "../public/image6.jpg"
import image4 from "../public/image4.jpg"
import image7 from "../public/image7.jpg"



function Services() {
  return ( 
   <>
    <div>
      <h1 className='font-black p-5 font-lg  text-indigo-700 text-5xl  text-center '>
        
        we provide services:

    </h1>
    
    
    <figure className="md:flex bg-gray-100 rounded-xl p-8">
    
    <img className='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full max-auto' src='image1.jpg' alt='image1'/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      
      <h2 className='text-4xl bold'>
   
        
     Oral & Maxillofacial Surgery
     
     </h2>
     
      <p className="text-lg font-semibold">

      We provide a full spectrum of surgical services and compassionate support for you and your family.
       Our team of dental experts offers special focus on Oral and Maxillofacial Surgery, giving out the highest calibre of surgical care for patients requiring bone grafts, implant placements and treatments for diseases and injuries to the teeth, 
      jaws, mouth, bones and facial structures.
      </p>

       
      
   </div>
   </figure>
   </div>
   


   <div className='flex space-x-4'>

   <figure  className="md:flex bg-gray-100 rounded-xl p-8  ">
        
    < img className='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full  mx-auto ' src='image4.jpg' alt='image4' />
    
    
    <div className="pt-4 md:p-8 text-center md:text-left space-y-2 ">
      
      <h2 className='text-4xl bold'>
   
        
      Orthodontic Braces
     </h2>
     
     
      <p className="text-lg font-semibold">
      
      
Not everyone is born with beautiful teeth. Crooked and misaligned teeth are known sources of self-consciousness, embarrassment and low self-esteem.

Dental braces are used to correct malocclusions (teeth that are crowded or crooked). For some, their teeth may be straight, 
but their upper and lower jaws may not meet properly. 
Correcting a bad bite and improperly aligned teeth are important not only for aesthetic reasons but also for proper oral health and function.
       
      </p>
      
      
    
      

      
    </div>
    



  
    </figure>
    </div>

   <div  >

    

      <figure  className="md:flex bg-gray-100 rounded-xl p-8 ">
        
    < img className='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full  mx-auto' src='image7.jpg' alt='image7' />
    
    
    <div className="pt-4 md:p-8 text-center md:text-left space-y-2 ">
      
      <h2 className='text-4xl bold'>
   
        
      Teeth Whitening
     </h2>
     
     
      <p className="text-lg font-semibold">
      
      
      
Everybody wants clean, white and healthy-looking teeth but as we get older our teeth get stained and eventually lose their luster.

There are a lot of factors like your diet (coffee, tea, soda) and lifestyle (smoking) that trigger the yellowing of your teeth. If you’ve been wanting to get rid of the unsightly color and stain on your teeth, 
you’ve come to the right place!

Millions of patients worldwide have enjoyed brighter, more youthful smiles with Zoom whitening treatment. 
We receive a lot of patients in and around Lahore who come to us for our in-office whitening treatment.
       
      </p>
      
      
    
      

      
    </div>
    



  
    </figure>
    </div>
   <div  >

    

      <figure  className="md:flex bg-gray-100 rounded-xl p-8  ">
        
    < img className='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full  mx-auto' src='image5.jpg' alt='image5' />
    
    
    <div className="pt-4 md:p-8 text-center md:text-left space-y-2 ">
      
      <h2 className='text-4xl bold'>
   
        
      Dental Crowns
     </h2>
     
     
      <p className="text-lg font-semibold">
      
      
Over time, teeth can be damaged, cracked or weakened by decay. Dentists use a crown to entirely cover or cap a damaged tooth. 
Crowns are made to match the color of your natural teeth, 
and besides strengthening an impaired tooth, these can be used to improve your teeth’s appearance, shape or alignment.

Dental crowns can be fashioned from stainless steel, ceramic, acrylic, gold and metal alloys. Unlike removable devices such as dentures, 
crowns are cemented onto existing teeth or implants, and can only be removed by your dentist.
       
      </p>
      
      
    
      

      
    </div>
    



  
    </figure>
    </div>

    
    <div >

    

      <figure  className="md:flex bg-gray-100 rounded-xl p-8   ">
        
    <img className='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full  mx-auto' src='image6.jpg' alt='image6'/>
    
    
    <div className="pt-4 md:p-8 text-center md:text-left space-y-2 ">
      
      <h2 className='text-4xl bold'>
   
        
      Root canal treatment
     </h2>
     
     
      <p className="text-lg font-semibold">
      
Root canal treatment involves replacing a tooth’s damaged or infected pulp with a filling. 
The pulp (often called the nerve of the tooth) 
is contained within the hollow centre of the tooth and consists of blood vessels
 and nerve fibres that supply oxygen, nutrients and feeling to the tooth.
       
      </p>
      
      
    
      

      
    </div>
    



  
    </figure>
    </div>
    </>

    
    
    
    
    
    

     
      
      
  )
}

export default Services;
