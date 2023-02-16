import React from 'react';

const FeedBack = ({Feedback}) => {
    const {name, reviews, location, img} = Feedback;
    return (
        <div>
            <div className="card lg:max-w-lg  shadow-2xl">
                <div className="card-body">
                    <div className='flex'>
                        <img className='w-16' src={img} alt=""/>
                        <div className='mx-5'>
                            <h2 className="card-title">{name}</h2>
                            <p>{location}</p>
                        </div>
                    </div>
                    <p>{reviews}</p>
                    <div className="rating gap-1 mt-2">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;