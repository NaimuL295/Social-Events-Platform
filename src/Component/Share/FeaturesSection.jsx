import { FaUsers, FaCalendarCheck, FaLeaf, FaHandsHelping, FaChartLine } from 'react-icons/fa';


const FeaturesSection = () => {
 
  return (




    <section className="py-16  w-11/12 mx-auto">

  <div className="text-center mx-auto px-4">
        <div 
         
        >
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Empower Your Community
          </h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Discover how our platform makes social impact easy and measurable
          </p>
        </div>

       
     
    
      </div>
     



<div  className='grid lg:grid-cols-5 md:grid-cols-2 gap-8 my-2'>
<div className="card flex justify-center mb-4 shadow-md space-y-1 p-2">
<FaUsers className="text-4xl text-green-500 " />
<h1 className='text-center my-1'>Volunteer Network</h1>
<p className='text-center my-1'>  Connect with passionate individuals in your community</p>

</div>
 <div className='card flex justify-center mb-4 shadow-md space-y-1 p-2"'>
    <FaLeaf className="text-4xl text-emerald-500" />
            <h1>Eco Initiatives</h1>
            <h5>Join tree plantations and clean-up drives</h5>
            </div>
 <div  className="card flex justify-center mb-4 shadow-md space-y-1 p-2">
<FaChartLine className="text-4xl text-purple-500" />
<h1>Impact Tracking</h1>
<h5>See real-time results of your contributions</h5>
    
    
        </div>
<div  className="card flex justify-center mb-4 shadow-md space-y-1 p-2">
    <FaHandsHelping className="text-4xl text-orange-500" />
    <h1>Community Support</h1>
    <h5>Participate in donation drives and skill-sharing</h5></div>
  <div  className="card flex justify-center mb-4 shadow-md space-y-1 p-2">
    <FaCalendarCheck className="text-4xl text-blue-500" />
      
      <h1>Event Management</h1>
      <h5>Create and manage events with easy-to-use tools</h5>
     
      </div>

</div>
{/*  */}
  
      
    </section>
  );
};

export default FeaturesSection;


 
