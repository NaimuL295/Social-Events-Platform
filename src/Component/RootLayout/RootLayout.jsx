import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';

const RootLayout = () => {
      const {pathname} = useLocation();
        const staticPaths = ['/', '/login', '/register', '/comingEvent', '/joinEvent', '/manageEvent'   ,'/createEvent'];
const hideNavbar = 
  staticPaths.includes(pathname) ||
  pathname.startsWith('/details/') ||
  pathname.startsWith('/update/');
    return (
        <div>
            
          {hideNavbar &&   <header> <Navbar></Navbar> </header>}
            <main>
                 <div className='min-h-[calc(100vh-200px)]' >
 <Outlet></Outlet>
</div>
  </main>
{ hideNavbar && <Footer></Footer>}

        </div>
    );
};

export default RootLayout;