import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
    const { name, img, rating, customerReview } = review;

    return (
        <div className='border-2 rounded px-2 md:flex flex-col justify-center items-center mt-4'>
            <img style={{ borderRadius: '50%' }} className='h-28 rounded-full mt-1' src={img} alt="Images" />
            <h4 className='mt-2 text-xl font-mono'>{name}</h4>
            <p>
                <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className={`${parseInt(rating) === 5 ? "text-yellow-400" : ""}`} icon={faStar}></FontAwesomeIcon>
            </p>
            <p className='font-serif mt-1'>Rating: {rating} <small>start</small></p>
            <h5 className='font-bold mt-4 font-mono'>Review Here </h5>
            <p className='px-3 mt-1 font-serif pb-4 text-justify'>{customerReview}</p>
        </div>
    );
};

export default ReviewCard;