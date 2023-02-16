import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({bookingService, selectedDate, setBookingService}) => {
    const {_id,name, Price, shift} = bookingService;

    const handleSubmit = event =>{
        event.preventDefault();
        const date = event.target.date.value;
        const shift = event.target.shift.value;

        const bookingUserService={
            serviceId: _id,
            service: name,
            date,
            shift,
            customerEmail: event.target.email.value,
            customerName: event.target.name.value,
            customerPhone: event.target.phone.value,
            Price
        }
        console.log(bookingUserService);
        setBookingService(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <label  className="modal">
                <div className="modal-box relative" htmlFor="">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-2xl font-bold text-secondary">Booking For {name}</h3>
                    
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input name='date' readOnly type="text" value={format(selectedDate,'PP')} className="input input-bordered w-full max-w-xs" />
                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />

                        <input name='price' readOnly type="text" value={Price} className="input input-bordered max-w-xs w-full" />

                        <select name='shift' className='select select-bordered w-full max-w-xs'>
                            {shift?.map((sft,index)=><option key={index} value={sft}>{sft}</option>)}
                        </select>
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered max-w-xs w-full" />
                        <input htmlFor="booking" type="submit" className="btn btn-secondary w-full max-w-xs mt-5" />
                    </form>

                </div>
            </label>
        </div>
    );
};

export default BookingModal;