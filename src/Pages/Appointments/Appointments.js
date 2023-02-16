import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';


const Appointments = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableServices selectedDate={selectedDate}></AvailableServices>
        </div>
    );
};

export default Appointments;