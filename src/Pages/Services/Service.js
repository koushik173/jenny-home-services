import React from 'react';

const Service = ({service}) => {
    const {name,image} = service;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Handle with Care</p>
                </div>
            </div>
        </div>
    );
};

export default Service;