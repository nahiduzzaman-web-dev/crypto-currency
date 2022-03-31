import React from 'react';
import { SiGooglestreetview } from 'react-icons/si'
import { FaCity } from 'react-icons/fa'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const UsAddress = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='my-5'>
                        <h3>United States Address</h3>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='d-flex flex-column'>
                                <span><SiGooglestreetview className='address-icon' /> 1515 N Main St, IN 47960</span>
                                <span><FaCity className='address-icon' /> Monticello</span>
                                <span><BsFillPhoneVibrateFill className='address-icon' /> +1 574-583-8179</span>
                                <span><MdEmail className='address-icon' /> info@crypto.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsAddress;