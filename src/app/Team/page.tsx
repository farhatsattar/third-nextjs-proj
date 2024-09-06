import Link from 'next/link';

import React from 'react'
import { teams } from '@/constants';
import Image from 'next/image';


function Team() {
  

  return (
    <div className=' min-h-screen flex flex-col border-4 bg-slate-300 text-2xl font-semibold text-red-600  flex-wrap  gap-5 py-10 text-wrap '>{
      teams.map((item,index,)=>(<Link key={item.id} href={`/Team/${item.id}`}>{item.title}</Link>))
    }
    
      
    
      
       </div>
  )
}

export default Team;