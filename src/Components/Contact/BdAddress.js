import React from 'react';
import { SiGooglestreetview } from 'react-icons/si'
import { FaCity } from 'react-icons/fa'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const BdAddress = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='my-5'>
                        <h3>Bangladesh Address</h3>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='d-flex flex-column'>
                                <span><SiGooglestreetview className='address-icon' /> 9/A Rupnagor, Mirpur 2.</span>
                                <span><FaCity className='address-icon' /> Dhaka</span>
                                <span><BsFillPhoneVibrateFill className='address-icon' /> +880170000001</span>
                                <span><MdEmail className='address-icon' /> info@crypto.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BdAddress;