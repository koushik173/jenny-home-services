import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState("");
    const {createUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = data =>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result);
            const userInfo = {
                displayName: data.name
            }

            updateUser(userInfo)
            .then(()=>{
                //---save user
                console.log('successful');
                alert('successful')
                navigate('/')
            })
            .catch(err=>setSignUpError(err=>{
                setSignUpError(err);
            }))

        })
        .catch(error=>{
            setSignUpError(error)
        })
    }
    
    return (
        <div className='min-h-screen bg-base-200 flex justify-center items-center lg:flex-row flex-col gap-10'>
            <div className='text-center'>
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate Provident cupiditate volup.</p>

            </div>
            <div className='w-96 p-7 items-center flex-shrink-0 card shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-mx">
                        <span className="label"><span className="label-text">Name</span></span>
                        <input className='input input-bordered w-full max-w-xs' type="text"
                        {...register("name", { 
                            required: "Name Address is requires" 
                            })} />
                        {errors.name && <p role="alert"> <span className='label-text-alt text-red-500'>{errors.name?.message}</span></p>}
                    </div>

                    <div className="form-control w-full max-w-mx">
                        <span className="label"><span className="label-text">Email</span></span>
                        <input className='input input-bordered w-full max-w-xs' type="email"
                        {...register("email", { 
                            required: "Email Address is requires" 
                            })} />
                        {errors.email && <p role="alert"> <span className='label-text-alt text-red-500'>{errors.email?.message}</span></p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <span className="label"><span className="label-text">Password</span></span>
                        <input className='input input-bordered w-full max-w-xs' type="password"
                        {...register("password", { 
                            required: "Password Address is requires",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'} 
                            })} />
                        {errors.password && <p role="alert"> <span className='label-text-alt text-red-500'>{errors.password?.message}</span></p>}
                        <span className="label"><span className="label-text">Forget Password</span></span>
                    </div>
                    <input className='btn btn-secondary w-full max-w-xs' type="submit" value="SignUp" />
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                    
                </form>
                <p className='mt-2'>Already Have an account? <Link className='text-info' to="/login">Please Login!</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;