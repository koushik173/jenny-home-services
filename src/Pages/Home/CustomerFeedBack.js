import React from 'react';
import people1 from '../../Assets/people1.png';
import people2 from '../../Assets/people2.png';
import people3 from '../../Assets/people3.png';
import FeedBack from './FeedBack';
const CustomerFeedBack = () => {
    const reviews = [
        {
            _id: 1,
             name: 'Jeson Roy',
             reviews: ' They have a fast response on weekends, very knowledgeable technician, friendly and helpful from the moment the call center pick up the phone to the moment the tech finish the job! I absolutely recommend them!',
             location: 'California',
             img: people1
        },
        {
            _id: 2,
             name: 'Elizabeth Olsen',
             reviews: 'Lenny did a great job repairing a plumbing issue I did not feel comfortable attacking.  He resolved the issue within thirty minutes and was friendly and polite while doing so..',
             location: 'New York',
             img: people2
        },
        {
            _id: 3,
             name: 'Winson Herry',
             reviews: 'They always send a professional who knows what they are doing. Today we had Rich. He came to do some plumbing that as it turns out we did not need after all. He was very helpful and kind. Id have him back in my home anytime!',
             location: 'Bramingham',
             img: people3
        }
    ]
    return (
        <div>
            <h1 className='text-5xl text-center mt-12 text-secondary'>Feedbacks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5'>
                {
                    reviews.map(rv=> <FeedBack key={rv._id} Feedback={rv}></FeedBack>)
                }
            </div>
        </div>
    );
};

export default CustomerFeedBack;