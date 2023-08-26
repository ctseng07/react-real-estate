import React from 'react';

import Detect from '../../assets/detect-img.png';
import Arrow from '../../assets/right-arrow.svg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="estate__about section__padding" id='about'></div>
            <div className="estate__about-content">
                <div className="estate__about-info">
                    <h1 className="estate__about-info_title p__futura-black text__uppercase">unlimited detectors</h1>

                    <p className='estate__about-info_body p__futura-black'>
                        For only
                        <b> $10</b>
                        /month per camera you can set up alerts for any kind of object.
                    </p>

                    <p className='estate__about-info_text p__futura-black'>
                        <b>7 days trial </b>
                        period included.
                        <br />
                        You don't have to pay anything to try it out!
                        <br />
                        No credit card required.
                    </p>

                    <div className="estate__about-button">
                        <button className='estate__about-info_button text__uppercase p__futura'>Start Now!
                            <img src={Arrow} alt='right-arrow_img' />
                        </button>
                    </div>
                </div>
                <div className="estate__about-image">
                    <img src={Detect} alt="detect_img" />
                </div>
            </div>
        </div>
    )
}

export default About

