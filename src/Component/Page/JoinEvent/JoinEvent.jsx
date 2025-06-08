import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import JoinCard from '../../Share/JoinCard';

const JoinEvent = () => {
    const [join,setJoin]=useState([])
const {user}=use(AuthContext)
    useEffect(()=>{
        if (!user?.email) return
axios.get(`http://localhost:3000/event-join?emailParams=${user?.email}`).then((result) => {
    
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