import React from 'react';

import { FaUsers, FaTree, FaRecycle, FaHandsHelping } from 'react-icons/fa'
const About = () => {
     return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          About <span className="text-green-600">CommunityConnect</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering communities through collective action and sustainable development initiatives across Bangladesh.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-green-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            To bridge the gap between passionate volunteers and meaningful social development opportunities, creating tangible impact in local communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaUsers className="text-4xl text-green-600" />, title: "Community Building", desc: "Connect like-minded individuals" },
              { icon: <FaTree className="text-4xl text-green-600" />, title: "Environmental Care", desc: "Promote green initiatives" },
              { icon: <FaRecycle className="text-4xl text-green-600" />, title: "Sustainable Actions", desc: "Drive long-term change" },
              { icon: <FaHandsHelping className="text-4xl text-green-600" />, title: "Volunteerism", desc: "Make service accessible" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

   

    
    </div>
  );
};

export default About;
