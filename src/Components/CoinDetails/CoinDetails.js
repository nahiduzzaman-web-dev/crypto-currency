import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CoindDetails.css'

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row details-area'>
                    <div className='col-12 col-md-6 order-2 order-md-1'>
                        <div className=''>
                            <h4>General Information:</h4>
                            <div className='d-flex flex-column'>
                                <span><strong>Name: </strong> {coin.name ? coin.name : 'Not Found'}</span>
                                <span><strong>Market Rank: </strong> {coin.market_cap_rank ? coin.market_cap_rank : 'Not Found'}</span>
                                <span><strong>Current Price: </strong> {coin.current_price ? coin.current_price : 'Not Found'}</span>
                                <span><strong>Currency: </strong> {coin.roi?.currency ? coin.roi?.currency : 'Not Found'}</span>
                                <span><strong>Last Update: </strong> {coin.last_updated ? coin.last_updated : 'Not Found'}</span>
                            </div>
                            <h4 className='mt-3'>Currency Scores:</h4>
                            <div className='d-flex flex-column'>
                                <span><strong>Community Score: </strong> {coin.community_score ? coin.community_score : 'Not Found'}</span>
                                <span><strong>Developer Score: </strong> {coin.developer_score ? coin.developer_score : 'Not Found'}</span>
                                <span><strong>Parcentage Score: </strong> {coin.atl_change_percentage ? coin.atl_change_percentage : 'Not Found'}</span>
                                <span><strong>Block Time (m): </strong> {coin.block_time_in_minutes ? coin.block_time_in_minutes : 'Not Found'}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 order-1 order-md-2'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={coin.image?.large} alt="coinImg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoinDetails;