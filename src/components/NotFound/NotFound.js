import React from 'react';
import NotFoundPage from '../../../src/not found.png';

const NotFound = () => {
    return (
        <div>
            <img className='w-full' src={NotFoundPage} alt="not found page" />
        </div>
    );
};

export default NotFound;