import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data=>{
        
        setLoginError('');
        signIn(data.email, data.password)
        .then(res=>{
            console.log(res);
            navigate(from, {replace: true});
        })
        .catch(error =>{
            setLoginError(error);
        })
    }
    return (
        <div className='min-h-screen bg-base-200 flex justify-center items-center lg:flex-row flex-col gap-10'>
            <div className='text-center'>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate Provident cupiditate volup.</p>

            </div>
            <div className='w-96 p-7 items-center flex-shrink-0 card shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <input className='btn btn-secondary w-full max-w-xs' type="submit" value="Login" />
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                    
                </form>
                <p className='mt-2'>New to Doctors Portal? <Link className='text-info' to="/signUp">Create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;