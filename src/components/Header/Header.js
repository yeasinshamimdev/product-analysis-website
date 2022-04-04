import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='md:grid grid-cols-2 bg-indigo-300 px-6 py-3'>
            <div className='md:text-left text-center md:mb-0 mb-3'>
                <Link to='/' className='text-3xl font-semibold font-mono'>Laptop Review</Link>
            </div>
            <div className='flex justify-center items-center'>
                <CustomLink className='md:mr-6 mr-3 font-serif text-white px-2 py-1' to="/home">HOME</CustomLink>
                <CustomLink className='md:mr-6 mr-3 font-serif text-white px-2 py-1' to="/review">REVIEW</CustomLink>
                <CustomLink className='md:mr-6 mr-3 font-serif text-white px-2 py-1' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='md:mr-6 mr-3 font-serif text-white px-2 py-1' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='md:mr-6 mr-3 font-serif text-white px-2 py-1' to="/about">ABOUT</CustomLink>
            </div>
        </nav>
    );
};

export default Header;