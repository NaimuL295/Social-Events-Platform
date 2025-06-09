import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventCard from '../../Share/EventCard/EventCard';

const ComingEvent = () => {
const [eventData,setEvent]=useState([])
const [search,setSearch]=useState("")

     useEffect(()=>{
axios.get(`http://localhost:3000/event-search?searchparams=${search}`).

then((result) => {
   setEvent(result.data )

}).catch((err) => {
    console.log(err);
    
});
 },[search])
 console.log(eventData);
 
    return (
    <> 
        <div className='w-9/12 mx-auto my-3.5'>
          <div className='my-5 space-x-1 flex'>
<label className="input">
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
    
    className="input-xl text-base text-black"
    onChange={(e) => setSearch(e.target.value)}
    required
    placeholder="Search"
  />

</label>  <button className='btn bg-green-500' type='submit'>Submit</button >    </div></div> 
         <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto w-10/12 gap-6'>  
        {eventData.map(eventsData=>
           <EventCard key={eventsData._id} eventsData={eventsData}></EventCard>
        )}

             
        </div>
         </>      
    );
};

export default ComingEvent;