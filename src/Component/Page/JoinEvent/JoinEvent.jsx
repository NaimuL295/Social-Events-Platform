
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
    
}).catch((err) => {
    console.log(err);
    
});
    },[user,axiosSecure])
console.log(join);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {join.map(join=>
                <JoinCard key={join._id}  join={join}>  </JoinCard>
            )}
        </div>
    );
};

export default JoinEvent;