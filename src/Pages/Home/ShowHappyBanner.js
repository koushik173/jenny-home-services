import React from 'react';
import banner from '../../Assets/showHappyBanner.jpg';

const ShowHappyBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt='showBanner'/>
                    <div className='mx-8'>
                        <h1 className="text-5xl font-bold">Let us handle your home Professionally</h1>
                        <p className="py-6">Maintaining your home can be overwhelming. Having a list of the right professionals to help you keep up with that maintenance can make it so much easier.</p>
                        
                        <div className="stats">
                            <div className="stat">
                                <div className="stat-value text-secondary">5000+</div>
                                <div className="stat-title mt-5">Happy Customers</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-secondary">16+</div>
                                <div className="stat-title mt-5">Total Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowHappyBanner;