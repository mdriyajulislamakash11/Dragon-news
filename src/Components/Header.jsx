import React from 'react';
import logo from'../assets/logo.png'
import moment from 'moment';



const 
Header = () => {
    return (
        <div className='flex flex-col gap-4 py-4 items-center justify-center'>
            <div>
                <img className='400px' src={logo} alt="" />
            </div>
            <p className='font-semibold text-gray-400'>Journalism Without Fear or Favour</p>

            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;