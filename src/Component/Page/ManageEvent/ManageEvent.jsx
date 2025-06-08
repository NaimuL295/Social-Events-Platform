import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import ManageCard from '../../Share/ManageCard';
const ManageEvent = () => {
    const [mangoUser,setMango]=useState([])
    const {user}=use(AuthContext);

    useEffect(()=>{
       if (!user)return
       //use userax
        axios.get(`http://localhost:3000/event-join?emailParams=${user?.email}`).then((result) => {
            setMango(result.data)
        }).catch((err) => {
            console.log(err);
            
        });
    },[user])
    // console.log(mangoUser);
   return (
        <>
      
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4'>
     {mangoUser.map(manage=>
         <ManageCard  key={manage._id} manage={manage}>

            </ManageCard>
     )}
     </div>
        </>
    );
};

export default ManageEvent;