import { useEffect, useState } from 'react';
import axios from 'axios';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('reviews.json').then(data => setReviews(data.data));
    }, [])
    return [reviews, setReviews];
}

export default useReviews;