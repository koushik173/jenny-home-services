import React from 'react';

const AvService = ({service, setBookingService}) => {
    const {name, Price, shift,image} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{name}</h2>
                    <p>Handle with Care</p>
                    <h3 className='text-secondary text-xl'>{shift.length>0? "Available Slots: ": "Available Slot: "}{shift.length}</h3>
                    <h3>Only <span className='text-secondary text-2xl font-bold'>{Price}</span></h3>
                    <label onClick={()=>setBookingService(service)} htmlFor="booking" className='btn btn-secondary'>Booking</label>
                </div>
            </div>
        </div>
    );
};

export default AvService;