import React from 'react';

import Dashboard from '../../assets/dashboard.png';
import Icon01 from '../../assets/icon-1.png'
import Icon02 from '../../assets/icon-2.png'
import Icon03 from '../../assets/icon-3.png'

import "./Features.css";

const Features = () => {
    return (
        <div className='estate__features section__padding'>
            <div className="estate__features-content">
                <div className="estate__features-info">
                    <button className='estate__features-info_button'>Icon</button>

                    <div className="estate__features-info_content">
                        <h2 className='estate__features-info_title p__futura-black'>Create, Connect, Detect!</h2>
                        <p className='estate__features-info_text p__futura'>To start detecting is as easy as 1-2-3.</p>
                    </div>
                </div>

                <div className="estate__features-image">
                    <img src={Dashboard} alt="dashboard-img" />
                    <div className="estate__features-image_overlay">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
