import React from 'react';

import { FaUsers, FaTree, FaRecycle, FaHandsHelping } from 'react-icons/fa'
const About = () => {
     return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8  my-6 max-w-screen-2xl">
      {/* Hero Section */}
      <section className="text-center ">
        <h1 className="text-3xl md:text-6xl   font-bold  ">
          About <span className="text-green-600">CommunityConnect</span>
        </h1>
        <p className=" lg:text-xl   text-center">
          Empowering communities through collective action and sustainable <br /> development initiatives across Bangladesh.
        </p>
      </section>

      {/* Mission Section */}
      <section className="my-6   max-w-7xl">
        <div className=" rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold  mb-3 text-center">Our Mission</h2>
          <p className="text-lg  mb-6 text-center">
            To bridge the gap between passionate volunteers and meaningful social development opportunities, creating tangible impact in local communities.
          </p>
     </div>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
           <div  className=" p-4 shadow-md  " >
        <FaUsers size={30}/>
         <h1 className='text-2xl'>  Community Building </h1>  
      <p> Connect like-minded individuals  </p>
      </div>
        
       
          <div className=" p-4 shadow-md">
     <FaTree size={30}/>
         <h1 className='text-2xl'>  Environmental Care </h1>  
      <h4>Promote green initiatives </h4>
      </div>
          <div  className=" p-4 shadow-md">
      <FaRecycle size={30}/>
         <h1 className='text-2xl'> Sustainable Actions </h1>  
      <h4>Drive long-term change </h4>
      </div>
 <div  className=" p-4 shadow-md ">
     <FaHandsHelping size={30}/>
         <h1 className='text-2xl'>Volunteerism </h1>  
      <h4>Make service accessible </h4>
      </div>
        </div>

       </section>

   
   

    
    </div>
  );
};

export default About;
