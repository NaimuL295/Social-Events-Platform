
 import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
import React, { use } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';
import { setHours, setMinutes } from 'date-fns';
import { useLoaderData, useNavigate } from 'react-router';

import Swal from 'sweetalert2';
const ManageEventUpdate = () => {
  const navigate=useNavigate()
     const {user}=use(AuthContext)
     const manage=useLoaderData()
  console.log(manage);
  
     const manageDate=manage.data
   const [selectedDateTime, setSelectedDateTime] = useState(
    setHours(setMinutes(new Date(), 30), 17),
  );
       const handleUpdate=(e)=>{
             e.preventDefault();
     const from=e.target;
     const fromData=new FormData(from);
     const data=Object.fromEntries(fromData.entries())

// console.log(title, description ,events,location, selectedDate);
// title,description,events,thumbnail,location ,date:startDate

  if (!data.title || !data.description || !data.eventType || !data.thumbnail || !data.location) {
    return toast.error("All fields must be filled");

}
axios.put(`https://social-event-server-side.vercel.app/event-update/${manageDate._id}`,
  {...data, date:selectedDateTime, email:user?.email})
.then((result) => {
  navigate("/comingEvent")
  console.log(result.data);

  Swal.fire({
    title: " The event will be Update successfully",
    icon: "success",
    draggable: true
  });
}).catch((err) => {
  console.log(err);
});
    }
    return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold  mb-6">Update Event</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium  mb-1">
            Event Title *
          </label>
          <input
            id="title"
            defaultValue={ manageDate.title}
            type="text"
          name='title'
            className='w-full px-3 py-2 border rounded-md '
            placeholder="Event Title"
          />
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium  mb-1">
            Description *
          </label>
          <textarea id="description"
          name='description'
          defaultValue={manageDate.description}
            rows={4}
            className='w-full px-3 py-2 border rounded-md '
            placeholder="Describe your event in detail..."
          />
         
        </div>

        {/* two */}
        <div className='lg:flex items-center gap-12'>
        {/* Event Type */}
  <div>
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Select event type</legend>
      <select
        required
        name="eventType"
        className="select"
        defaultValue=""
      >
        <option value="" disabled>
       
        </option>
        <option value="cleanup">Cleanup</option>
        <option value="plantation">Plantation</option>
        <option value="donation">Donation</option>
        <option value="workshop">Workshop</option>
        <option value="seminar">Seminar</option>
        <option value="awareness">Awareness Campaign</option>
        <option value="fundraiser">Fundraiser</option>
        <option value="webinar">Webinar</option>
        <option value="training">Training Session</option>
        <option value="volunteering">Volunteering</option>
      </select>
    </fieldset>
  </div>


    {/* Event Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium  mb-1">
            Event Date & Time *
            
          </label>

 <DatePicker
      
       selected={selectedDateTime}
       onChange={(date) => setSelectedDateTime(date)}
       showTimeSelect
      //  minTime={setHours(setMinutes(new Date(), 0), 17)}
      Time={setHours(setMinutes(new Date(),0,0,))}
       dateFormat="MMMM d, yyyy h:mm aa"
    //  defaultValue={manageDate.date}
    //
      required  placeholderText="Select Event date"
     />
   

        </div>

</div>
        {/* Thumbnail Image URL */}
        <div>
          <label htmlFor="thumbnail" className="block  font-medium  mb-1">
            Thumbnail Image URL
          </label>
          <input
          defaultValue={manageDate.thumbnail}
          name='thumbnail'
            id="thumbnail"
            type="url"
          
            className="w-full px-3 py-2 border  rounded-md"
            placeholder="https://example.com/image.jpg"
         required  />
          <p className="mt-1 text-xs ">
            Provide a direct link to your event image (optional)
          </p>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium ">
            Location *
          </label>
          <input
            id="location"
            type="text"
            defaultValue={manageDate.location}
         name='location'
            className='w-full px-3 py-2 border rounded-md'
         placeholder="Enter Your   Location "
          required   />
         
        </div>

    
        <div className="btn  bg-green-600 text-white">
        <ToastContainer></ToastContainer>
          <button className=''
            type="submit"> Submitting  </button>
        </div>
      </form>
    </div>
  );

};

export default ManageEventUpdate;