import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <header className='w-11/12 mx-auto'>
            <Navber></Navber>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;