// import axios from "axios";
// import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
const handlerContact = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    if (!values.name || !values.email || !values.message) {
        return toast("Please fill in all fields");
    } else {
        toast("Form submitted successfully");
        // axios.post("https://social-event.netlify.app/contact", values)
    }
};

  return (
    <section className="  mx-auto px-4 sm:px-6 lg:px-8  my-6 max-w-screen-2xl">
      <div className="max-w-6xl mx-auto px-4">
      
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
                                       
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? Feel free to contact us via the form or details below.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>📍 Location: Dhaka, Bangladesh</li>
              <li>📧 Email: contact001@gmail.com</li>
              <li>📞 Phone: +880 1234 567890</li>
            </ul>
          </div>
       
          <form  onSubmit={handlerContact} className="bg-white shadow-lg rounded-lg p-6 space-y-4"> 
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              name="message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
             


          </form>
          <ToastContainer/>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
