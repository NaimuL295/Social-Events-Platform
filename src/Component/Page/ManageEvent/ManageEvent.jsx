import React, { use, useEffect, useState } from 'react';

//import axios from 'axios';
import ManageCard from '../../Share/ManageCard';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { AuthContext } from '../../Context/AuthContext';
import Spinner from '../../Share/Spinner';
import { useNavigate } from 'react-router';
 import Swal from 'sweetalert2';
 import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
const ManageEvent = () => {
    const [mangoUser,setMango]=useState([])
    
   const {user}=use(AuthContext)
      const navigate=useNavigate()
const axiosSecure=useAxiosSecure()
    useEffect(()=>{
       if (!user)return
       //use userax
       //console.log(user?.email);
       
 axiosSecure.get(`/event-manage?emailParams=${user?.email}`,{
     withCredentials: true
 }).
 then((result) => {
            setMango(result.data)
        }).catch((err) => {
            console.log(err);
            
        })
    },[user,axiosSecure]) 




 const handleDelete=(id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  axios.delete(`https://social-event-server-side.vercel.app/event-delete/${id}`).then((result) => {
          console.log(result.data);


  Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
       const remaining=mangoUser.filter(us=>us._id!==id);
 setMango(remaining)
        }).catch((err) => {
          console.log(err);
          
        });
  }
});
  }


if (!mangoUser) {
  return <Spinner />;
}

if (mangoUser.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center my-16 p-6 bg-gray-50 rounded-xl shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
      You have not Created  any  Event
      </h1>
      <button
        onClick={() => navigate("/createEvent")}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg  "
      >
        <FaArrowLeft className="text-lg" />
        <span>Go Back</span>
      </button>
    </div>
  );
}




   return (
        <>
      
         <div className=' max-w-screen-2xl   md:container  grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 my-4 mx-auto'>
     {mangoUser.map(manage=>
         <ManageCard  key={manage._id} manage={manage}  handleDelete={handleDelete}  >

            </ManageCard>
     )}
     </div>
        </>
    );
};

export default ManageEvent;