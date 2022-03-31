import React from 'react';
import { SiFacebook } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='container-fluid' id='footer'>
            <div className='container fas'>
                <div className='row'>
                    <div className='col-12 text-center social'>
                        <span>
                            <a href="">
                                <SiFacebook />
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <BsGithub />
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <AiFillTwitterCircle />
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <AiFillLinkedin />
                            </a>
                        </span>
                        <span>
                            <a href="">
                                <IoLogoYoutube />
                            </a>
                        </span>
                        <p className='my-2 text-info'><small>All Rights Reserved By &copy; Cypto Currency | 2022-2030</small></p>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;