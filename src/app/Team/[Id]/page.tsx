import React from 'react'
import{teams} from '@/constants'



type TeamDetailspageProps={
    params:{
      Id:string;

    }

};
const findTeamDetails=(id:number)=>{
  console.log(id)
 return  teams.find((item)=>{
     return item.id===id;}); 
}


function TeamDetails({params} :TeamDetailspageProps) {
  
  const Team=findTeamDetails(Number(params.Id));
  
  return (
    <div className='min-h-screen bg-red-400'>TeamDetails
      <div>
      <h1 className='text-2xl text-blue-700 ' >{Team?.title}</h1>
      <p className='font-semibold p-2'>{Team?.content}</p>
      <p className='font-bold'>Name:{Team?.name}</p>
      </div>
    </div>
  )
}

export default TeamDetails;