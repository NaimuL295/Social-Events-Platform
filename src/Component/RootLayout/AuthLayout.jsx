import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Share/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;