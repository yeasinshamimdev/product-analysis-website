import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className='pt-10 text-center bg-slate-900 md:grid md:grid-cols-4'>
                <div>
                </div>
                <div className='flex flex-col text-white text-xl text-left'>
                    <Link className='mt-2' to="/home">Home</Link>
                    <Link className='mt-2' to="/review">Review</Link>
                    <Link className='mt-2' to="/dashboard">Dashboard</Link>
                    <Link className='mt-2' to="/blogs">Blogs</Link>
                    <Link className='mt-2' to="/about">About</Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <input className='w-full h-8 px-3 rounded-md' type="text" placeholder='Enter your email' />
                    <button className='bg-indigo-500 hover:bg-indigo-600 text-white border-0 rounded-md py-1 px-4 mt-3'>Send Me</button>
                </div>
            </div>
            <p className=' pt-8 text-center text-white bg-slate-900'><small>All right reserved || copyright © by Yeasin Shamim </small></p>
        </div>

    );
};

export default Footer;