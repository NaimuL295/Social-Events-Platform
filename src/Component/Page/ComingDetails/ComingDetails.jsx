import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ComingDetails = () => {
    const {user}=use(AuthContext)
    const data=useLoaderData()
    const newData=data?.data



    const handlerJoin=()=>{
    axios.post("https://social-event-server-side.vercel.app/event-join-user",{...newData ,email:user?.email}).then((result) => {
       console.log(result.data);   
Swal.fire({
  title: "Success",
  icon: "success",
  draggable: true
});
    }).
   
    catch((err) => {
    
        console.log(err);
       
    })     
    
    }
   return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-md bg-white p-4 hover:shadow-xl transition-shadow duration-300  my-3.5 ">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={newData?.thumbnail}
        // alt={title}
      />
      <div className="mt-4 space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">{newData?.title}</h2>
     <p className="text-gray-600"><span className="font-medium">Location:</span> {newData?.location}</p> 
         <p className="text-gray-600"><span className="font-medium">Type:</span> {newData?.event}</p> 
         <p className="text-gray-600"><span className="font-medium">Date:</span> {newData?.date}</p>
         <p className="text-gray-600">{newData?.description}</p>

      </div> 
      <div className="mt-4">
        <button
     onClick={handlerJoin}
          className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-xl  transition-colors"
        >
       Join event
        </button>
      </div>
    </div>
  );
};

export default ComingDetails;