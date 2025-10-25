import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventCard from '../../Share/EventCard';
import Spinner from '../../Share/Spinner';

const ComingEvent = () => {
const [eventData,setEvent]=useState([])
const [search,setSearch]=useState("")

const handleChange = (e) => {
  setSearch(e.target.value);
};


     useEffect(()=>{
      const query = search === "All" ? "" : search;
axios.get(`https://social-events-platform-server-site.vercel.app/event-search?searchparams=${query}`).

then((result) => {
   setEvent(result.data )

}).catch((err) => {
    console.log(err);
    
});
 },[search])

if (!eventData) {
return <Spinner/>  
}

    return (
    <> 
<div className="lg:w-10/12 lg:px-8 w-11/12 px-4 mx-auto">

  <div className="my-5 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">

   
    <select
      value={search}
      onChange={handleChange}
      className="select-xs py-2 px-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus: transition-all"
    >
      <option value="All">All</option>
      <option value="cleanup">Cleanup</option>
      <option value="Plantation">Plantation</option>
      <option value="Donation">Donation</option>
      <option value="workshop">Workshop</option>
      <option value="seminar">Seminar</option>
      <option value="awareness">Awareness Campaign</option>
      <option value="fundraiser">Fundraiser</option>
      <option value="webinar">Webinar</option>
      <option value="training">Training Session</option>
      <option value="volunteering">Volunteering</option>
    </select>

    {/* Search Box */}
    <fieldset className="w-full sm:w-auto">
      <label htmlFor="Search" className="hidden">Search</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            fill="currentColor"
            viewBox="0 0 512 512"
            className="w-4 h-4 "
          >
            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195Z" />
          </svg>
        </span>
        <input
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search..."
          className="w-40 sm:w-56 py-2 pl-10 pr-3 text-sm rounded-full border-2  focus:outline-none focus:ring-2 "
        />
      </div>
    </fieldset>
  </div>

  {eventData === null ? (
    <div className="text-center mt-5">
      <div className="flex w-52 flex-col gap-4 mx-auto">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  ) : eventData.length === 0 ? (
    <h1 className="text-center mt-5">No event found</h1>
  ) : (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12">
      {eventData.map((eventsData) => (
        <EventCard key={eventsData._id} eventsData={eventsData} />
      ))}
    </div>
  )}
</div>


  
     
      
         </>      
    );
};

export default ComingEvent;
