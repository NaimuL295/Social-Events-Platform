


import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';


const axiosInstance = axios.create({

  baseURL:"https://social-event-server-side.vercel.app",
 withCredentials:true
});

const useAxiosSecure= () => {
const { logout}=use(AuthContext)

 axiosInstance.interceptors.response.use(
    (response) => response, // Success: pass through
    (error) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        // Logout without async/await
       logout()
          .then(() => console.log('User logged out (401/403)'))
          .catch((err) => console.error('Logout failed:', err));
      }

      return Promise.reject(error); 
    }
  );

    return axiosInstance;
};

export default useAxiosSecure;


