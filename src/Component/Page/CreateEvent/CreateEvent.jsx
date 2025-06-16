import axios from 'axios';
import React, { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { setHours, setMinutes } from 'date-fns';
import { useNavigate } from 'react-router';
const CreateEvent = () => {
    const navigate=useNavigate()
  const {user}=use(AuthContext)

  const [selectedDateTime, setSelectedDateTime] = useState(
    setHours(setMinutes(new Date(), 30), 17),
  );
   

    const handleCreate=(e)=>{
          e.preventDefault();
  const from=e.target;
  const fromData=new FormData(from);
  const data=Object.fromEntries(fromData.entries())
//console.log(title, description ,events,location, selectedDate);


  if (!data.title || !data.description || !data.eventType || !data.thumbnail || !data.location) {
    return toast.error("All fields must be filled");

}
axios.post("https://social-event-server-side.vercel.app/event",
  {...data, date:selectedDateTime, email:user?.email})
.then((result) => {
  console.log(result.data);


Swal.fire({
  title: " The event will be created successfully",
  icon: "success",
  draggable: true
});
  setTimeout(()=>{
navigate("/comingEvent")
  },1000)

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

{/* two */}
        <div className='lg:flex items-center gap-12'>
        <div>
<fieldset className="fieldset">
  <legend className="fieldset-legend"> Select event type</legend>
  <select disabled={false} name="eventType"className="select">
   
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
{/* one */}
  {/* Event Date */}
        <div >
          <label htmlFor="date" className="block text-sm font-medium  mb-1">
            Event Date & Time * </label>
  <DatePicker 
      selected={selectedDateTime}
      onChange={(date) => setSelectedDateTime(date)}
      showTimeSelect
      Time={setHours(setMinutes(new Date(), 0), 17)}
     // Time={setHours(setMinutes(new Date(), 30), 20)}
      dateFormat="MMMM d, yyyy h:mm aa"
    
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
          <input  name='thumbnail' type="url"
          className="w-full px-3 py-2 border  rounded-md"
            placeholder="https://example.com/image.jpg"
         required />
          <p className="mt-1 text-xs ">
            Provide a direct link to your event image   </p>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium  mb-1">
            Location *
          </label>
          <input type="text"   name='location'  className='w-full px-3 py-2 border rounded-md'
         required  placeholder="Enter Your   Location "
          />
         
        </div>

      
        <div className=" btn  bg-green-600 text-white">
          <ToastContainer></ToastContainer>
          <button
            type="submit"> Submitting  </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;