
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useAxiosSecure from "../../Hook/useAxiosSecure"
import JoinCard from '../../Share/JoinCard';


const JoinEvent = () => {
    const [join,setJoin]=useState([])
  const axiosSecure=useAxiosSecure()
const {user}=use(AuthContext)
// userax
    useEffect(()=>{
 if (!user?.email) return
axiosSecure.get(`/event-join?emailParams=${user?.email}`).then((result) => {
    
 setJoin(result.data)
    const now = new Date();
      const upcomingEvents = result.data
        .filter((event) => new Date(event.date) > now)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

      setJoin(upcomingEvents);
}).catch((err) => {
    console.log(err);
    
});
    },[user,axiosSecure])
console.log(join);


    return (
        <div className='w-11/12  grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto  my-4'>
            {join.map(join=>
                <JoinCard key={join._id}  join={join}>  </JoinCard>
            )}
        </div>
    );
};

export default JoinEvent;