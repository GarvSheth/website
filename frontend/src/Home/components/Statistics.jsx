import React from 'react'
import CountUp from 'react-countup';
import { RAIDStats } from '../../data/HomePageStats';
import '../styles/Statistics.css';

export default function Statistics() {
    return (
        <div className='statistics-container'>
            {Object.keys(RAIDStats).map((key, index) => {
                return (
                    <div className='fun-data-card' key={index}>
                        <div className={`fun-data-card-icon ${RAIDStats[key][1]}`}></div>
                        <div className='fun-data-card-info'>
                            <div className='fun-data-card-count'>
                                <CountUp className='fun-data-card-countup-tag' start={0} end={RAIDStats[key][0]} duration={2} />
                                &nbsp;{RAIDStats[key][2]}
                            </div>
                            <div className='fun-data-card-category'>
                                {key}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
