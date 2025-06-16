
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useAxiosSecure from "../../Hook/useAxiosSecure"
import JoinCard from '../../Share/JoinCard';
import Spinner from '../../Share/Spinner';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const JoinEvent = () => {
  const {user}=use(AuthContext)
    const navigate=useNavigate()
    const [join,setJoin]=useState([])
  const axiosSecure=useAxiosSecure()

// userax
    useEffect(()=>{
 if (!user?.email) return
axiosSecure.get(`/event-join?emailParams=${user?.email}`).then((result) => {
    
 setJoin(result.data)

const upcomingEvents = result.data
  .sort((a, b) => new Date(a.date) - new Date(b.date));

setJoin(upcomingEvents);

}).catch((err) => {
    console.log(err);
    
});
    },[user,axiosSecure])


if (!join ) {
  return <Spinner/>;
}

if (join.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center my-16 p-6 bg-gray-50 rounded-xl shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        You Have Not Attended Any Events
      </h1>
      <button
        onClick={() => navigate("/comingEvent")}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg  "
      >
        <FaArrowLeft className="text-lg" />
        <span>Go Back</span>
      </button>
    </div>
  );
}



    return (
        <div className='w-11/12  grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto  my-4'>
            {join.map(join=>
                <JoinCard key={join._id}  join={join}>  </JoinCard>
            )}
        </div>
    );
};

export default JoinEvent;