import React from 'react';

import Dashboard from '../../assets/dashboard.png';
import Checkmark from '../../assets/checkmark.svg';
import Lightning from '../../assets/lightning.svg';

import "./Features.css";

const Features = () => {
    return (
        <div className='estate__features section__padding' id='features'>
            <div className="estate__features-content">
                <div className="estate__features-info">
                    <div className='estate__features-info_icon'>
                        <img src={Lightning} alt="lightning_img" />
                    </div>

                    <div className="estate__features-info_content">
                        <h2 className='estate__features-info_title p__futura-black'>Create, Connect, Detect!</h2>
                        <p className='estate__features-info_text p__futura'>To start detecting is as easy as 1-2-3.</p>
                    </div>
                </div>
                <div className="estate__overlay">
                    <div className="estate__features-image">
                        <img src={Dashboard} alt="dashboard-img" />
                    </div>
                    <div className="estate__features-image_overlay">
                        <div className="estate__features-iconBox">
                            <div className='estate__features-iconBox_icon'>
                                <div className="estate__features-icon_wrap flex__center">
                                    <div className="estate__features-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='estate__features-iconBox_text p__futura'>Create an account</h3>
                        </div>
                        <div className="estate__features-iconBox">
                            <div className='estate__features-iconBox_icon'>
                                <div className="estate__features-icon_wrap flex__center">
                                    <div className="estate__features-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='estate__features-iconBox_text p__futura'>Add a camera</h3>
                        </div>
                        <div className="estate__features-iconBox">
                            <div className='estate__features-iconBox_icon'>
                                <div className="estate__features-icon_wrap flex__center">
                                    <div className="estate__features-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='estate__features-iconBox_text p__futura'>Add a detector</h3>
                        </div>
                        <div className="estate__features-iconBox">
                            <div className='estate__features-iconBox_icon'>
                                <div className="estate__features-icon_wrap flex__center">
                                    <div className="estate__features-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='estate__features-iconBox_text p__futura'>Voila</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
