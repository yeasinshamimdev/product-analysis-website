import React from 'react';
import Laptop from '../../../src/laptop.jpg';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
    console.log(reviews);
    return (
        <section>
            <div className='md:grid grid-cols-2 gap-4'>
                <div className='py-24 ml-16'>
                    <h1 className='text-5xl mb-4 font-thin text-justify'>Here Is Your Favorite Laptop</h1>
                    <h1 className='text-4xl font-thin text-justify mb-6'>Read The Customer Review And Buy It</h1>
                    <p className='text-justify font-mono'>Hello, Welcome to my Laptop review awesome site. Here you can see so many customer review and buy your Favorite Laptop. If you are get your Favorite laptop, you can contact with us.</p>
                    <div className='flex justify-center items-center mt-14'>
                        <button className='bg-indigo-500 py-1 px-4 text-white rounded-sm font-serif text-2xl hover:bg-indigo-600'>Explore More</button>
                    </div>
                </div>
                <div className='mt-6 mr-2'>
                    <img className='rounded-sm' src={Laptop} alt="Laptop" />
                </div>
            </div>
            <div className='px-8 mt-4'>
                <h1 className='md:text-5xl text-center mb-5'>Customers Reviews ()</h1>
                <div className='md:grid grid-cols-3 gap-4 mb-4'>
                    {
                        reviews.map(review => <ReviewCard key={review.id}
                            review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;