import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ card }) => {
    const { img, name, price, details } = card;

    return (
        <div className='col-lg-4 col-sm-12 mt-3 h-100'>
            <div className='p-3 h-100'>
                <div className=" shadow row justify-content-between align-items-center  h-100">
                    <div>
                        <img src={img} className="card-img" alt="card image" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-secondary font-monospace">{name}</h5>
                        <p className="card-text">{details}</p>
                        <p className='card-text fw-bold'>Price: {price} tk</p>
                        <button className='button px-3 py-2 text-white border-0' type="submit">
                            <Link to="/checkout">Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;