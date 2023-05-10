import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = () => {
    return (
        <div>
            <h1>Zara</h1>
            <Head></Head>
            <Navbar></Navbar>
            <Search></Search>
        </div>
    );
};

export default Header;