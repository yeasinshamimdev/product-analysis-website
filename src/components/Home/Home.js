import React from 'react';
import { useNavigate } from 'react-router-dom';
import Laptop from '../../../src/laptop.jpg';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
    const threeReview = reviews.slice(0, 3);
    const navigate = useNavigate();

    return (
        <section>
            <div className='md:grid grid-cols-2 gap-4'>
                <div className='py-24 ml-2 md:ml-16'>
                    <h1 className='md:text-5xl text-xl mb-4 font-thin'>Here Is Your Favorite Laptop</h1>
                    <h1 className='md:text-4xl text-xl font-thin text-justify mb-6'>Read Customer Review For Buy</h1>
                    <p className='md:text-justify font-mono'>Hello, Welcome to my Laptop review awesome site. Here you can see so many customer review and buy your Favorite Laptop. If you are get your Favorite laptop, you can contact with us.</p>
                    <div className='flex justify-center items-center mt-14'>
                        <button onClick={() => navigate('/review')} className='bg-indigo-500 py-1 px-4 text-white rounded-sm font-serif text-2xl hover:bg-indigo-600'>Explore More</button>
                    </div>
                </div>
                <div className='md:flex flex-col justify-center items-end'>
                    <img style={{ width: "90%" }} className='rounded-sm' src={Laptop} alt="Laptop" />
                </div>
            </div>
            <div className='px-8 mt-6'>
                <h1 className='md:text-5xl text-2xl text-center mb-5 font-mono'>Customers Reviews ({threeReview.length})</h1>
                <div className='md:grid grid-cols-3 gap-4 mb-4'>
                    {
                        threeReview.map(review => <ReviewCard key={review.id}
                            review={review} />)
                    }
                    {
                        reviews.length === 0 && <Spinner />
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-1 px-5 bg-indigo-500 hover:bg-indigo-600 rounded text-white mb-3' onClick={() => navigate('/review')}>See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;