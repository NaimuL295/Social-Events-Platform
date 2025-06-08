import React from 'react';
import { Link } from 'react-router';
const PageError = () => {
    return (
        <div>
          <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-indigo-600">404</p>
    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
       
      
   <button className='btn bg-green-500'> <Link to="/" > Go back home   </Link> </button>
    </div>
  </div>
</section>  
        </div>
    );
};

export default PageError;