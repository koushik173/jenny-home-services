import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const DisplayError = () => {
    const {logout} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handleSignOut=()=>{
        logout()
        .then(()=>{navigate('/login')})
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4>PLease! <button className='btn btn-secondary' onClick={handleSignOut}>signOut</button></h4>
        </div>
    );
};

export default DisplayError;