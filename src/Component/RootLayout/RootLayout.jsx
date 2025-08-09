import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';

const RootLayout = () => {
      const {pathname} = useLocation();
        const staticPaths = ['/', '/login', '/register', '/comingEvent', '/joinEvent', '/manageEvent', "/about", "/profile" ,'/createEvent'];
const hideNavbar = 
  staticPaths.includes(pathname) ||
  pathname.startsWith('/details/') ||
  pathname.startsWith('/update/');

  return (
    <div className="flex flex-col min-h-screen">
      {hideNavbar && (
        <header className="sticky top-0 z-40 bg-white ">
          <Navbar />
        </header>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      {hideNavbar && <Footer />}
    </div>
  );
}
 export default RootLayout