import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='pt-10 text-center bg-slate-900 md:grid md:grid-cols-4'>
                <div>
                </div>
                <div className='flex flex-col text-white text-xl text-center md:text-left'>
                    <Link className='mt-2 md:w-1/2 mb-1' to="/home">Home</Link>
                    <Link className='mt-2 md:w-1/2 mb-1' to="/review">Review</Link>
                    <Link className='mt-2 md:w-1/2 mb-1' to="/dashboard">Dashboard</Link>
                    <Link className='mt-2 md:w-1/2 mb-1' to="/blogs">Blogs</Link>
                    <Link className='mt-2 md:w-1/2 mb-1' to="/about">About</Link>
                </div>
                <div className='flex items-center justify-center'>
                    <input className='h-8 px-3 rounded-sm' type="text" placeholder='Enter your email' />
                    <button className='bg-indigo-500 hover:bg-indigo-600 text-white border-0 rounded-sm py-1 px-4 '>Send</button>
                </div>
            </div>
            <p className=' pt-8 text-center text-white bg-slate-900'><small>All right reserved || copyright © by Yeasin Shamim </small></p>
        </div>

    );
};

export default Footer;