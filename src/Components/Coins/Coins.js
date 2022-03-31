import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import './Coins.css'

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, []);

    return (
        <div className='container-fluid coins-m'>
            <div className='container mt-3'>
                <h5 className='text-center'>Available Crypto Currencies</h5>
                <p className='text-center'>Total Coins: {coins.length}</p>
                <div className='row'>
                    <div className='coins-container mt-5'>
                        {
                            coins.map(coin => <CoinCard
                                key={coin.id}
                                coin={coin}
                            ></CoinCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coins;