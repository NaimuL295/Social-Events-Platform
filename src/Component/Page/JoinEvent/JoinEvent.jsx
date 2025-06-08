
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import JoinCard from '../../Share/JoinCard';
import UseAxiosSecure from '../../Hook/UseAxiosSecure';

const JoinEvent = () => {
    const [join,setJoin]=useState([])
const {user}=use(AuthContext)
// userax
    useEffect(()=>{
        if (!user?.email) return
UseAxiosSecure.get(`http://localhost:3000/event-join?emailParams=${user?.email}`).then((result) => {
    
 setJoin(result.data)
    
}).catch((err) => {
    console.log(err);
    
});
    },[])
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