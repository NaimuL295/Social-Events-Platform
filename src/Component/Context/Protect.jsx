import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Spinner from '../Share/Spinner';
import { Navigate, useLocation } from 'react-router';

const Protect = ({children}) => {

    const {user,loading}=use(AuthContext)
const location=useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }

if(!user || !user?.email){
  return <Navigate  state={{from:location.pathname}} to="/login" >    </Navigate>
    
}


    return ( 
        <div>
 {children}
      </div>
    );
};

export default Protect;