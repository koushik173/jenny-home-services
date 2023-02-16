import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import banner from '../../Assets/appointBanner.png';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

    return (
        <div className='hero mt-16'>
            <div className='hero-content flex-col lg:flex-row'>
                <div className='mr-12'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <img className='max-w-lg rounded-lg shadow-2xl' src={banner} alt=""/>
            </div>
        </div>
    );
};

export default AppointmentBanner;