import React from 'react';
import call from '../../Assets/call.svg';
import clock from '../../Assets/clock.svg';
import location from '../../Assets/location.png';
const ServiceTimeInfo = () => {
    const cardData = [
        {
            id: 1,
            name: 'Service Time',
            description: 'Open 7.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-secondary'
        },
        {
            id: 2,
            name: 'Services Offered',
            description: 'Throughout The Whole Of Sylhet City',
            icon: location,
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            name: 'Contact us',
            description: 'Please contact us if you would like any further information on our commercial dry cleaning services',
            icon: call,
            bgClass: 'bg-secondary'
        }
    ]
    return (
        <div className='mt-20 grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map((cd,index)=><div key={index} className={`card p-5 card-side shadow-xl ${cd.bgClass}`}>
                <figure className='w-1/2'><img src={cd.icon} alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{cd.name}</h2>
                  <p>{cd.description}</p>
                </div>
              </div>)
            }
        </div>
    );
};

export default ServiceTimeInfo;