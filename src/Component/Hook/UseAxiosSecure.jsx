import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

    const axiosInstance = axios.create({
 baseURL: 'http://localhost:3000',
  withCredentials:true
});
const UseAxiosSecure = () => {

const {logout}=use(AuthContext)
axiosInstance.interceptors.response.use(
    (response)=>  response
        , (error)=>{
  const status=error.response?.status;
  if (status === 4001 ||status === 4003) {
    logout().then((result) => {
    console.log(result);
        
    }).catch((err) => {
        console.log(err);
        
    });
  }
  
  return Promise.reject(error);
  });
    return axiosInstance
};

export default UseAxiosSecure;