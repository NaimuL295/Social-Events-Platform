import React from 'react';

const Faq = () => {

const FaqData=[
  {
    question: "How can I join an event?",
    answer:
      "Joining an event is simple! Browse through our upcoming events, choose the one that interests you most, read the details carefully, and click the 'Join Now' button to complete your registration instantly."
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes, creating an account is essential. It allows you to securely track your event bookings, receive important updates, save your preferences, and access exclusive offers or early-bird discounts on selected events."
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Absolutely! We understand plans can change. You can cancel your registration up to 24 hours before the event begins and, if applicable, receive a refund according to our cancellation policy."
  },
  {
    question: "Is there any participation fee?",
    answer:
      "Participation fees vary depending on the event. While many events are completely free, others may have a registration fee mentioned clearly in the event details to ensure full transparency."
  }
];

    return (
        <div>
            <div className="max-w-7xl mx-auto my-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold  text-center mb-10">
          Frequently Asked Questions
        </h2>  
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How can I join an event?</div>
  <div className="collapse-content text-sm">Simply browse events, select your preferred one, and click the 'Join Now' button.</div>
</div>
{FaqData.map((data ,index)=>
    <div  key={index} className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold"> {data.question}</div>
  <div className="collapse-content text-sm">{data.answer}</div>
</div>
)}

        </div>
        </div>
    );
};

export default Faq;