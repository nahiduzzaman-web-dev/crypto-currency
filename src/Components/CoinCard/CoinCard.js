import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css'

const CoinCard = ({ coin }) => {
    return (
        <div className='single-card'>
            <Link to={`/coin-details/${coin.id}`} className='coin-details'>

                <div className='coin-info p-4 d-flex justify-content-between align-items-center'>
                    <div className='coin-image'>
                        <img src={coin.image} alt="coinImg" />
                    </div>
                    <div className='d-flex flex-column justify-content-end align-items-end'>
                        <span className='coin-name'>{coin.name}</span>
                        <span className='coin-symbol'>{coin.symbol}</span>

                    </div>
                </div>

            </Link>
        </div>
    );
};

export default CoinCard;