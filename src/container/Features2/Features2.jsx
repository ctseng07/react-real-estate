import React from 'react';

import Icon01 from '../../assets/icon-1.png';
import Icon02 from '../../assets/icon-2.png';
import Icon03 from '../../assets/icon-3.png';

import "./Features2.css";

const Features2 = () => {
    return (
        <div className='estate__features2 section__padding'>
            <div className="estate__features2-content">
                <div className="estate__features2-content_container">
                    <div className="estate__features2-container_img">
                        <img src={Icon01} alt="icon1__img" />
                    </div>
                    <div className="estate__features2-container_text flex__center">
                        <h3 className='p__futura'>Over 60 different combinations</h3>
                        <p className='p__basier'>With 8 detectors to pick from, and various settings, you can watch for any event.</p>
                    </div>
                </div>

                <div className="estate__features2-content_container">
                    <div className="estate__features2-container_img">
                        <img src={Icon02} alt="icon2__img" />
                    </div>
                    <div className="estate__features2-container_text flex__center">
                        <h3 className='p__futura'>Time based detection</h3>
                        <p className='p__basier'>You can set Safewatch to detect objects only during a certain time of the day.</p>
                    </div>
                </div>

                <div className="estate__features2-content_container">
                    <div className="estate__features2-container_img">
                        <img src={Icon03} alt="icon3__img" />
                    </div>
                    <div className="estate__features2-container_text flex__center">
                        <h3 className='p__futura'>Alert you if an object leaves the frame.</h3>
                        <p className='p__basier'>You can have peace of mind, by having your car watched 24/7 by Safewatch.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2
