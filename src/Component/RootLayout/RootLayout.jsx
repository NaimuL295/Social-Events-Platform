import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';

const RootLayout = () => {
    return (
        <div>
            
            <header> <Navbar></Navbar> </header>
            <main>
                 <div className='min-h-[calc(100vh-200px)]' >
 <Outlet></Outlet>
</div>
  </main>

<Footer></Footer>
        </div>
    );
};

export default RootLayout;