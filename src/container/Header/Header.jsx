import React from 'react';

import Play from '../../assets/play-button.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='estate__header section__padding estate__bg'>
            <div className="estate__header-content">
                <div className="estate__header-content_title">
                    <h6 className="p__futura text__uppercase">introducing safewatch</h6>
                </div>

                <div className="estate__header-content_subheading">
                    <h1 className='p__futura'>Watch for packages</h1>
                    <p className='p__futura text__underline'>Automate your smart home.</p>
                    <p className='p__futura'>Level up your security cameras.</p>
                </div>

                <div className="estate__header-content-body">
                    <button type='play_button'>
                        <img src={Play} alt="playbutton_img" />
                    </button>
                    <p className='p__basier'>Install in 5 minutes or less, no additional hardware required. Works with all your existing cameras. <br /> 7 days trial period included.</p>
                </div>
            </div>
        </div>
    )
}

export default Header
