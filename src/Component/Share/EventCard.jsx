import React from 'react';
import { Link } from 'react-router';
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { format } from 'date-fns';

const EventCard = ({ eventsData }) => {
  const Dates = format(new Date(eventsData?.date), "MMM dd, yyyy 'at' h:mm a");

  return (
    <div className="card max-w-96 rounded-xl shadow-lg  transition-all duration-300 ">
      {/* Thumbnail */}
      <figure className="rounded-t-xl overflow-hidden">
        <img
          src={eventsData?.thumbnail}
          alt={eventsData?.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-4 bg-white rounded-b-xl">
        {/* Title & Type */}
        <div className="flex justify-between items-start flex-wrap">
          <h2 className="card-title text-lg font-bold ">{eventsData?.title}</h2>
          <span className="text-xs sm:text-sm font-semibold  px-2 py-1 rounded-full">
            {eventsData?.eventType}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center mt-2  text-sm sm:text-base">
          <IoLocationOutline className="" />
          <span className="ml-2">{eventsData?.location}</span>
        </div>

        {/* Date */}
        <div className="flex items-center mt-1  text-sm sm:text-base">
          <MdOutlineDateRange className="" />
          <span className="ml-2">{Dates}</span>
        </div>

        {/* Button */}
        <div className="card-actions justify-end mt-3">
          <Link to={`/details/${eventsData._id}`}>
            <button className="btn rounded-full px-5 py-2 bg-green-500 text-white shadow-md hover:shadow-yellow-500/50 transition-all duration-300">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
