import React from 'react';

import logo from '../../assets/logo.png';
import footerLogo from '../../assets/featured.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className='estate__footer section__padding'>
            <div className="estate__footer-content">
                <div className="estate__footer-content_logo">
                    <img src={logo} alt="logo_img" />
                </div>
            </div>

            <div className="estate__footer-content_info">
                <div className="estate__footer-content_text">

                    <p className='p__basier'>hello@usesafewatch.com</p>
                    <p className='p__basier'>Privacy Policy</p>
                </div>

                <div className="estate__footer-img">
                    <img src={footerLogo} alt="footer_img" />
                </div>
            </div>
        </div>
    )
}

export default Footer
