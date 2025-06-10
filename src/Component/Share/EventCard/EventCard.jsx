import React from 'react';
import { Link } from 'react-router';
  import { MdOutlineDateRange } from "react-icons/md";
  import { IoLocationOutline } from "react-icons/io5";
const EventCard = ({eventsData}) => {
    return (
    <div className="card max-w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img 
          src={eventsData?.thumbnail} 
          alt={eventsData?.title} 
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{eventsData?.title}</h2>
      { <span className=" text-base font-medium">{eventsData?.eventType}</span> }
        </div>
        <div className="flex items-center mt-2">
         <IoLocationOutline></IoLocationOutline>
        <span className="ml-2 text-base">{eventsData?.location}</span>
        </div>
        <div className="flex items-center mt-2">
           <MdOutlineDateRange></MdOutlineDateRange>
          <span className="ml-2 text-base">{eventsData?.date}</span>
          
        </div>
       
        <div className="card-actions justify-end mt-4">
        <Link to={`/details/${eventsData._id}`}>   <button className="btn bg-green-500 text-white">
       View event
          </button>  </Link>
        </div>
      </div>
    </div>








  );

};

export default EventCard;