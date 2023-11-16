import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='container px-4 mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;