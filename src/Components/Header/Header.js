import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = () => {
    return (
        <div>
            <h1 className='text-6xl text-center text-red-800 mb-8 font-extrabold'>Under Developing</h1>
            <Head></Head>
            <Navbar></Navbar>
            <Search></Search>
        </div>
    );
};

export default Header;