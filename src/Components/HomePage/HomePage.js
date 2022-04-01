import React from 'react';
import './HomePage.css'
import { RiCoinsFill } from 'react-icons/ri'
import { SiAzuredataexplorer } from 'react-icons/si'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='container-fluid'>
            <div className='container py-5 '>
                <div className='homePage d-flex justify-content-center align-items-center'>
                    <h1 className='text-center'>
                        Welcome To Your Crypto Currency <span className='crypto-coin'><RiCoinsFill /></span>
                    </h1>
                    <Link to='/coins' className='explore-btn rounded-pill'>Explore Coin <span className='explore-icon'><SiAzuredataexplorer /></span></Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;