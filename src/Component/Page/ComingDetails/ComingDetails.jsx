import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaArrowLeft } from "react-icons/fa";

   import { format } from 'date-fns';
const ComingDetails = () => {
 
    const {user}=use(AuthContext)
    const data=useLoaderData()
    const newData=data?.data
  const navigate=useNavigate()
const Dates = format(new Date(newData?.date), "MMM dd, yyyy 'at' h:mm a");

    const handlerJoin=()=>{
    axios.post("https://social-events-platform-server-site.vercel.app/event-join-user",
      {...newData ,email:user?.email}).then((result) => {
        setTimeout(()=>{
 navigate("/joinEvent") 
      },1000) 
       console.log(result.data); 
      
Swal.fire({
  title: "Success",
  icon: "success",
  draggable: true
 


});
    }).catch((err) => {
    
     console.log(err);
     
       
    })     
    
    }
   return (

<>
<div className='w-11/12 mx-auto'>
     <div className=' pl-5'   onClick={()=>navigate("/comingEvent")}  > 
        <button className='btn bg-green-600 text text-white flex    items-center gap-2  my-4 '> <FaArrowLeft className="text-lg" />   <span>Go Back</span>  </button>
    </div>   
  
    <div    className=" w-full lg:flex     rounded-2xl overflow-hidden shadow-md bg-white p-4 hover:shadow-xl transition-shadow duration-300  my-3.5 ">
    <div>    <img
        className="w-full h-52  object-cover rounded-xl"
        src={newData?.thumbnail}
        // alt={title}
      />  </div>
      <div className="mt-4 space-y-1  lg:px-10  lg:flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{newData?.title}</h2>
     <p className="text-gray-600"><span className="font-medium">Location:</span> {newData?.location}</p> 
         <p className="text-gray-600"><span className="font-medium">Type:</span> {newData?.eventType}</p> 
         <p className="text-gray-600"><span className="font-medium">Date:</span> {Dates}</p>
         <p className="text-gray-600">{newData?.description}</p>



  <div className="mt-2"> 
        <button 
     onClick={handlerJoin}
          className=" bg-green-600 text-white font-medium py-2 px-4 rounded-xl  transition-colors"
        >
       Join event
        </button>
      </div>
      </div> 
    
    </div></div>
    </>
  );
};

export default ComingDetails;