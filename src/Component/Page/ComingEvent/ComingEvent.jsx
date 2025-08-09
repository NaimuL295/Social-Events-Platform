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
        <div className="    max-w-screen-2xl   md:container px-8">
          <div className='my-5 space-x-1 flex'>

      <select 
    value={search}
          onChange={handleChange}
    className="border select-xs  py-2 rounded"
  > 
    <option  value="All">All</option>
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



<fieldset className="w-full space-y-1 dark:text-gray-800">
	<label htmlFor="Search" className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search"     name='search' onChange={(e) => setSearch(e.target.value)}
    required    placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
	</div>
</fieldset>



   </div></div> 
     

     {eventData.length === 0 ? (
          <div className="text-center mt-5">
            <h1>No event found</h1>
          </div>
        ) : ( 
  
       <div className='  max-w-screen-2xl   md:container px-4'>  
       
         <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto w-11/12 gap-12'>  
        {eventData.map(eventsData=>
           <EventCard key={eventsData._id} eventsData={eventsData}></EventCard>
        )}

             
        </div></div>
        )} 
     
     
      
         </>      
    );
};

export default ComingEvent;
