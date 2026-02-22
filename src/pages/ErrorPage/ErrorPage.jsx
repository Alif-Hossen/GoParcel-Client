import React from 'react';
import errorImg from "../../assets/errorPage/error4.jpg"
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>

            <div className='relative'>
                <img className='h-[700px] w-full' src={errorImg} alt="" />
            </div>

            <NavLink to="/" className='absolute top-10 left-10'>
                <button className='btn btn-primary text-black font-bold text-2xl rounded-2xl'>Back To home</button>
            </NavLink>
        </div>

    );
};

export default ErrorPage;