import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        console.log('After Registration : ', data);
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">

            <h3 className="text-3xl text-center font-bold">
                Welcome To Go Parcel
            </h3>
            <p className="text-center">Please Register</p>


            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" {...register('email',
                        {
                            required: true,
                        }
                    )} className="input" placeholder="Email" />

                    {errors.email?.type === 'required'
                        && <p className='text-red-500'> Email Is Required. </p>
                    }

                    {/* PASSWORD FIELD...... */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password',
                        {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/

                        }
                    )} className="input" placeholder="Password" />

                    {
                        errors.password?.type === 'required'
                        && <p className='text-red-500'> Password Required To Register. </p>
                    }

                    {
                        errors.password?.type === 'minLength'
                        && <p className='text-red-500'> Password Must Be 6 Character Or Longer. </p>
                    }
                    {
                        errors.password?.type === 'pattern'
                        && <p className='text-red-500'> Password Must Have At Least One Uppercase, At Least One Lowercase, At Least One Number, And At Least One Special Characters</p>
                    }

                    {/* <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div> */}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                
                <p> Already Have An Account? <NavLink to="/login" className="text-blue-500 font-bold underline">Login</NavLink> </p>
                
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;