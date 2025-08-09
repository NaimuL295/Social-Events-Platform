import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Participant",
    message:
      "The event was flawlessly organized! From the moment I registered to the final session, everything felt smooth and engaging. I met amazing people and learned a lot. Highly recommend joining!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Kim",
    role: "Guest Speaker",
    message:
      "Speaking at this event was a fantastic experience. The organizers were professional, the audience was enthusiastic, and the overall atmosphere was inspiring. I’d gladly return for future events.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Aisha Rahman",
    role: "Volunteer",
    message:
      "Volunteering here gave me a chance to contribute and connect with incredible individuals. The event was well-structured and full of positive energy. I’ll be part of it again next year!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];
    return (
        <div>
                <section className="max-w-7xl mx-auto text-center">
   <h2 className="text-4xl font-bold text-center  mb-12">
       Stories From Our Happy Attendees
      </h2>



 <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-12  '> 
    {testimonials.map((testimonial,index)=>
    <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
           transform transition-all duration-300 ease-in-out">
<h3 className="text-xl font-semibold text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-700 leading-relaxed">{testimonial.message}</p>
    </div>
    )}</div>
                </section>
        </div>
    );
};

export default TestimonialsSection;

