import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvService from './AvService';
import BookingModal from './BookingModal';

const AvailableServices = ({selectedDate}) => {
    const [availableServices, setAvailableServices]=useState([])
    const [bookingService, setBookingService] = useState(null)
    
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setAvailableServices(data))
    },[])
    
    return (
        <section className='mt-12'>
            <h2 className='text-center text-secondary font-bold text-3xl'>Available Services on {format(selectedDate,'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    availableServices?.map(avS=><AvService
                    key={avS._id}
                    service={avS}
                    setBookingService={setBookingService}
                    ></AvService>)
                }
            </div>
            {
                bookingService &&
                <BookingModal
                bookingService={bookingService}
                selectedDate={selectedDate}
                setBookingService={setBookingService}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableServices;