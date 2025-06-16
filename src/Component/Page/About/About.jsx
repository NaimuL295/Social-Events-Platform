import React from 'react';

import { FaUsers, FaTree, FaRecycle, FaHandsHelping } from 'react-icons/fa'
const About = () => {
     return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold  mb-6">
          About <span className="text-green-600">CommunityConnect</span>
        </h1>
        <p className="text-xl  max-w-3xl mx-auto">
          Empowering communities through collective action and sustainable development initiatives across Bangladesh.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className=" rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold  mb-6">Our Mission</h2>
          <p className="text-lg  mb-6">
            To bridge the gap between passionate volunteers and meaningful social development opportunities, creating tangible impact in local communities.
          </p>
     </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
           <div  className="text-2xl p-4 shadow-md  " >
        <FaUsers/>
         <h1>  Community Building </h1>  
      <h4> Connect like-minded individuals   </h4>
      </div>
        
       
          <div className="text-2xl p-4 shadow-md">
     <FaTree/>
         <h1>  Environmental Care </h1>  
      <h4>Promote green initiatives </h4>
      </div>
          <div  className="text-2xl p-4 shadow-md">
      <FaRecycle/>
         <h1> Sustainable Actions </h1>  
      <h4>Drive long-term change </h4>
      </div>
 <div  className="text-2xl p-4 shadow-md ">
     <FaHandsHelping/>
         <h1>Volunteerism </h1>  
      <h4>Make service accessible </h4>
      </div>
        </div>

       </section>

   
   

    
    </div>
  );
};

export default About;
