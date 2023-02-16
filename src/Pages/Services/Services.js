import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>{
        setServices(data);
    })
    },[])
    
    return (
        <div>
            <h2 className='text-center text-5xl font-bold py-12'>Our Awesome<span className='text-secondary'> Services</span></h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    services?.map(sr=><Service
                        key={sr._id}
                        service={sr}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;