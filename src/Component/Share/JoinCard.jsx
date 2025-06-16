import { format } from 'date-fns';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';

const JoinCard = ({join}) => {
  const Dates = format(new Date(join?.date), "MMM dd, yyyy 'at' h:mm a");
    return(
   <div className="card max-w-96 bg-base-100 shadow-xl dark:shadow-2xl   hover:shadow-2xl transition-shadow duration-300 p-2">
      <figure>
        <img 
          src={join?.thumbnail} 
          alt={join?.title} 
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{join?.title}</h2>
    <h2 className='text-base font-bold'> {join?.eventType}</h2>
        </div>
        
        <div className="flex items-center mt-1">
         <IoLocationOutline></IoLocationOutline>
          <span className="ml-1  text-base">{join?.location}</span>
        </div>
      
        <div className="flex items-center mt-1">
         <MdOutlineDateRange ></MdOutlineDateRange>
          <span className="ml-2 text-base">{Dates}</span>
        </div>
      
        <p>{join?.description}</p>
      </div>
    </div>
    )
};

export default JoinCard;