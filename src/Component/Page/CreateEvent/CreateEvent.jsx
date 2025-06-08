import axios from 'axios';
import React, { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
const CreateEvent = () => {
  const {user}=use(AuthContext)
const [selectedDate, setSelectedDate] = useState(new Date());
    const handleCreate=(e)=>{
          e.preventDefault();
  const from=e.target;
  const fromData=new FormData(from);
  const data=Object.fromEntries(fromData.entries())
// title,
// description,
// events,thumbnail,location
  

//console.log(title, description ,events,location, selectedDate);
// title,description,events,thumbnail,location ,date:startDate

console.log();



  if (!data.title || !data.description || !data.eventType || !data.thumbnail || !data.location) {
    return toast.error("All fields must be filled");

}
axios.post("http://localhost:3000/event",
  {...data, date:selectedDate, email:user?.email})
.then((result) => {
  console.log(result.data);

 

Swal.fire({
  title: " The event will be created successfully",
  icon: "success",
  draggable: true
});
}).catch((err) => {
  console.log(err);
  
});

    }
    return (
    <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold  mb-6">Create New Event</h2>
      <form onSubmit={handleCreate} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium  mb-1">
            Event Title *
          </label>
          <input
            id="title"
            type="text"
          name='title'
            className='w-full px-3 py-2 border rounded-md '
          required  placeholder="Event Title"
          />
         
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium  mb-1">
            Description *
          </label>
          <textarea id="description"
          name='description'
            rows={4}
            className='w-full px-3 py-2 border rounded-md '
           required placeholder="Describe your event in detail..."
          />
         
        </div>

        {/* Event Type */}
        <div>
<fieldset className="fieldset">
  <legend className="fieldset-legend">  Event Type </legend>
  <select  name="eventType"className="select">
     <option>Select event type</option>
    <option value="cleanup"> Cleanup</option>
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
</fieldset>


        </div>

        {/* Thumbnail Image URL */}
        <div>
          <label htmlFor="thumbnail" className="block  font-medium text-gray-700 mb-1">
            Thumbnail Image URL
          </label>
          <input  name='thumbnail' type="url"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="https://example.com/image.jpg"
         required />
          <p className="mt-1 text-xs text-gray-500">
            Provide a direct link to your event image   </p>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location *
          </label>
          <input type="text"   name='location'  className='w-full px-3 py-2 border rounded-md'
         required  placeholder="Enter Your   Location "
          />
         
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date & Time * </label>

  <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
     required  placeholderText="Select Event date"
    />
  

        </div>
        <div className=" btn">
          <ToastContainer></ToastContainer>
          <button
            type="submit"> Submitting  </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;