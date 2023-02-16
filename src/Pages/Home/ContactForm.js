import React from 'react';

const ContactForm = () => {
    return (
        <div className='grid grid-cols-2 mt-12'>
            <div>
                <h1 className='text-5xl text-secondary mb-5 font-bold'>No Hassle Booking! </h1>
                <p>We want you to focus on big things in life while we take care of your little things. Just leave your mobile number, we will do the rest for you. Just like that!</p>
                <h3 className='font-bold mt-5'>Send us your number, we will call you instantly.</h3>
            </div>
            <div className='mx-12'>
                <h2 className='text-3xl font-bold mb-5'>LET US CALL YOU</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full mt-5">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full mt-5">
                    <label className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>

                <button className='btn btn-info mt-5'>Request Call</button>
            </div>
        </div>
    );
};

export default ContactForm;