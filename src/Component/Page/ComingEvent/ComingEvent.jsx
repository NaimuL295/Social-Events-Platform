import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventCard from '../../Share/EventCard/EventCard';
import Spinner from '../../Share/Spinner';

const ComingEvent = () => {
const [eventData,setEvent]=useState([])
const [search,setSearch]=useState("")

const handleChange = (e) => {
  setSearch(e.target.value);
};



     useEffect(()=>{
      const query = search === "All" ? "" : search;
axios.get(`https://social-event-server-side.vercel.app/event-search?searchparams=${query}`).

then((result) => {
   setEvent(result.data )

}).catch((err) => {
    console.log(err);
    
});
 },[search])

if (!eventData ) {
  return <Spinner />;
}

    return (
    <> 
        <div className="max-w-screen-2xl   md:container px-4 ">
          <div className='my-5 space-x-1 flex'>


      <select 
    value={search}
          onChange={handleChange}
    className="border select-xs    py-2 rounded"
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



  
<label className="input input-sm">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>


<input
    type="search"
    name='search'
    
  className='input  input-sm'
    onChange={(e) => setSearch(e.target.value)}
    required
    placeholder="Search"
  />

</label>    
   </div></div> 
     

     {eventData.length === 0 ? (
          <div className="text-center mt-5">
            <h1>No event found</h1>
          </div>
        ) : (
           <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto w-10/12 gap-6'>  
        {eventData.map(eventsData=>
           <EventCard key={eventsData._id} eventsData={eventsData}></EventCard>
        )}

             
        </div>
        )} 
     
     
      
         </>      
    );
};

export default ComingEvent;
