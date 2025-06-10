import React, { use, useEffect, useState } from 'react';

//import axios from 'axios';
import ManageCard from '../../Share/ManageCard';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { AuthContext } from '../../Context/AuthContext';

const ManageEvent = () => {
    const [mangoUser,setMango]=useState([])
   const {user}=use(AuthContext)
   
    
const axiosSecure=useAxiosSecure()
    useEffect(()=>{
       if (!user)return
       //use userax
       console.log(user?.email);
       
 axiosSecure.get(`/event-manage?emailParams=${user?.email}`,{
     withCredentials: true
 }).
 then((result) => {
            setMango(result.data)
        }).catch((err) => {
            console.log(err);
            
        })
    },[user,axiosSecure])
console.log(mangoUser.email);
   return (
        <>
      
         <div className='w-9/12   grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-4 mx-auto'>
     {mangoUser.map(manage=>
         <ManageCard  key={manage._id} manage={manage}>

            </ManageCard>
     )}
     </div>
        </>
    );
};

export default ManageEvent;