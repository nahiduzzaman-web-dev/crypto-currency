import React from 'react';
import { BiError } from 'react-icons/bi'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center not-found'>
                            <BiError className='error' />
                            <h1>404 Not Found</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;