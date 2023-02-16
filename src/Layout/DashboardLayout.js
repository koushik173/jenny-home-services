import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Share/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        <li><Link to="/dashboard/allUsers">All Users</Link></li>
                        <li><Link to="/dashboard/workerManage">Worker Manage</Link></li>
                        <li><Link to="/dashboard/allTransaction">All Transactions</Link></li>
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default DashboardLayout;