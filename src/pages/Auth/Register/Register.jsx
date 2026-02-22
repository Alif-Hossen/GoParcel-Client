import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm();

    const handleRegistration = ( data ) => {
        console.log( 'After Registration : ', data );
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" {...register('email',
                         {
                            required: true,
                         }
                         )} className="input" placeholder="Email" />

                         { errors.email ?. type==='required'
                            &&  <p className='text-red-500'> Email Is Required. </p>
                         }

                    {/* PASSWORD FIELD...... */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', 
                         {   
                            required: true,
                            minLength: 6,
                            pattern : /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/

                         }
                    )} className="input" placeholder="Password" />

                    {
                        errors.password ?. type === 'required'
                        && <p className='text-red-500'> Password Required To Register. </p>
                    }

                    {
                        errors.password ?. type === 'minLength'
                        && <p className='text-red-500'> Password Must Be 6 Character Or Longer. </p>
                    }
                    {
                        errors.password ?. type === 'pattern'
                        && <p className='text-red-500'> Password Must Have At Least One Uppercase, At Least One Lowercase, At Least One Number, And At Least One Special Characters</p>
                    }

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;