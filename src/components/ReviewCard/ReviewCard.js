import React from 'react';

const ReviewCard = ({ review }) => {
    const { name } = review;
    return (
        <div className='border-2 rounded-sm px-2'>
            <h4>{name}</h4>
        </div>
    );
};

export default ReviewCard;