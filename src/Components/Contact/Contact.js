import React from 'react';
import './Contact.css'
import { ImLocation } from 'react-icons/im'

const Contact = () => {
    return (
        <div className='container-fluid'>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <h3 className='contact-title'>Contact Us, Our Office Address Down Below</h3>
                <h6 className='contact-title'>You can Visit Now</h6>
                <div className='d-flex justify-content-center align-items-center my-2'>
                    <button className='contact-btn mx-3'>
                        BD Address <ImLocation />
                    </button>

                    <button className='contact-btn'>
                        Us Address <ImLocation />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;