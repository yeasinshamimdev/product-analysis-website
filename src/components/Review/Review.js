import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import Spinner from '../Spinner/Spinner';

const Review = () => {
    const [reviews, setReviews] = useReviews([]);

    return (
        <div className='mt-5 mb-4'>
            <h1 className='md:text-5xl text-center mb-5'>Customers Reviews ({reviews.length})</h1>
            <div className='md:grid grid-cols-4 gap-4 px-8'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review} />)
                }
                {
                    reviews.length === 0 && <Spinner />
                }
            </div>
        </div>
    );
};

export default Review;