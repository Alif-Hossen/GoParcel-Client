import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';

import loginImg from "../assets/login/login3.png"

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;