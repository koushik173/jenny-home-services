import React from 'react';
import { Link } from 'react-router-dom';
import banner from './../../Assets/bannerHome.jpg';

const FrontBanner = () => {
    return (
        <div>
            <div className="hero">
                <div className="mt-5 hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt='banner'/>
                    <div>
                        <h1 className="text-5xl font-bold text-secondary">Welcome to</h1>
                        <h1 className="text-4xl font-bold py-5 text-info">Jenny Home Services.</h1>
                        <p className="py-6">We provide personal care and companionship for seniors, persons with disabilities and convalescent clients. Personal care includes washing, dressing, bathing and medication monitoring and/or assistance. Social duties include preparing and cooking meals, essential cleaning, shopping, bill payment and fire maintenance.</p>
                        
                        <Link to='/appointment' className="btn btn-primary">Get Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontBanner;