import React from 'react';
import ContactForm from './ContactForm';
import CustomerFeedBack from './CustomerFeedBack';
import FrontBanner from './FrontBanner';
import ServiceTimeInfo from './ServiceTimeInfo';
import ShowHappyBanner from './ShowHappyBanner';
import ShowServices from './ShowServices';
import StatsShow from './StatsShow';

const Home = () => {
    return (
        <div>
            <div className='min-h-screen bg-base-200'>
                <FrontBanner></FrontBanner>
                <StatsShow></StatsShow>
                <ServiceTimeInfo></ServiceTimeInfo>

            </div>
            <ShowServices></ShowServices>
            <ShowHappyBanner></ShowHappyBanner>
            <CustomerFeedBack></CustomerFeedBack>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;