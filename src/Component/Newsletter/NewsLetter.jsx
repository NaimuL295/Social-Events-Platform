import React from "react";

const NewsLetter = () => {
  return (
    <section className=" py-2 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 ">
         Stay Connected!
        </h2>
        <p className=" text-lg mb-6">
          Get notified about upcoming events and volunteer opportunities in your area.
        </p>

        <button className="btn bg-green-500   text-white px-6 text-base" >
          Subscribe
        </button>

        <p className="text-sm  mt-4">
          * This is a visual-only button. Subscription feature coming soon.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
