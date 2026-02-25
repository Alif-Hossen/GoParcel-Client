import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react';
import { NavLink } from 'react-router';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signInUser } = useAuth()

    const handleLogin = (data) => {
        console.log('Login Data', data);
        signInUser( data.email, data.password )
            .then( result => {
                console.log( result.user );
            })
            .catch( error => {
                console.log( error );
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            
            <h3 className="text-3xl text-center font-bold">
                Welcome Back
            </h3>
            <p className="text-center">Please Login</p>

            <form className="card-body" onSubmit={handleSubmit(handleLogin)}> 
                <fieldset className="fieldset">

                    {/* EMAIL FIELD */}
                    <label className="label">Email</label>

                    <input type="email" {...register('email', {required: true })}  
                    className="input" placeholder="Email" />

                    {
                        errors.email ?. type === 'required' 
                        && ( <p className='text-red-500'> Email Is Required </p>)
                    }

                    {/* PASSWORD FIELD  */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password',  { required : true, minLength: 6 })} className="input" placeholder="Password" /> 

                    {
                        errors.password ?. type === 'required' && 
                        ( <p className='text red-500'> Password Is Required To Login </p>)
                    }

                    {
                        errors.password ?. type === 'minlength' && 
                        ( <p> Password Should At Least 6 Character. </p>)
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p> New To Go Parcel? <NavLink to="/register" className="text-blue-500 font-bold underline">register</NavLink> </p>
            </form>
        </div>
    );
};

export default Login;