import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
    const {user, logout}= useContext(AuthContext);
    
    const handleSignOut=()=>{
        logout()
        .then(()=>{})
        .catch(error=>console.log(error))
    }

    const itemList = <React.Fragment>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/appointment">Make Appointment</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
    </React.Fragment>
    return (
        <div >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {itemList}
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Jenny Home Service</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {itemList}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user?<div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='navImage'/>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link className="justify-between">{user.displayName}</Link></li>
                            <li><Link>Settings</Link></li>
                            <li><Link to="/login" onClick={handleSignOut}>Logout</Link></li>
                        </ul>
                    </div>: <Link to='/login'>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;