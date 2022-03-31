import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='container-fluid bg-white'>
            <div className='container d-flex justify-content-md-between justify-content-center'>
                <div className='brand d-none d-md-block'>
                    <Link to='/' className='brand-name'>Crypto Currency</Link>
                </div>
                <div className='d-flex gap-4'>
                    <CustomLink to='/' className='menu'>Home</CustomLink>
                    <CustomLink to='/coins' className='menu'>Coins</CustomLink>
                    <CustomLink to='/contact' className='menu'>Contact</CustomLink>
                    <CustomLink to='/about' className='menu'>About</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;