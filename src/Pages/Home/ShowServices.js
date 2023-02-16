import React from 'react';
import { Link } from 'react-router-dom';
import cleaning from '../../Assets/cleaning.svg';
import cooking from '../../Assets/cooking-svgrepo-com.svg';
import washing from '../../Assets/washing.svg';
const ShowServices = () => {
    const ShowServicesData = [
        {
            id: 1,
            name: 'Washing',
            description: 'Regular washing of clothes and bedding, helps to remove any bacteria, dirt, fleas, mites and other irritants or infection',
            icon: washing,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Cleaning',
            description: 'Handle With Care',
            icon: cleaning,
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            name: 'Cooking',
            description: 'Handle with care',
            icon: cooking,
            bgClass: 'bg-primary'
        }
    ]
    
    return (
        <div className='mt-12'>
            <h2 className='text-5xl font-bold text-center mt-5'>Our Awesome <span className='text-secondary'>Services</span></h2>
            <div className='flex justify-end'>
                <Link to="/services" className='btn btn-sm btn-outline btn-secondary'>See More</Link>
            </div>
            <div className=' gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ShowServicesData.map((cd,index)=><div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={cd.icon} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{cd.name}</h2>
                      <p>{cd.description}</p>
                    </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default ShowServices;