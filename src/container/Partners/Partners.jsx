import React from 'react';

import ZapierLogo from '../../assets/zapier-logo.png';
import ZapierImg from '../../assets/zap-page.png';
import Checkmark from '../../assets/checkmark.svg';

import './Partners.css';

const Partners = () => {
    return (
        <div className='estate__partners section__padding'>
            <div className="estate__partners-content">
                <div className="estate__partners-content_container">
                    <div className="estate__partners-content_info">
                        <h2 className='p__futura'>Integrate your detections with IFTTT and Zapier</h2>
                        <p className='p__basier'>Automate actions taken immediately after an object has been detected. Create complex IFTTT workflows to automate your smart home or anything else. Create Zaps between Safewatch and a list of more than 2000 apps, so that everything is taken care of.</p>
                    </div>
                    <div className="estate__partners-info_img">
                        <img src={ZapierLogo} alt="zapierLogo_img" />
                    </div>
                </div>

                <div className="estate__overlay">
                    <div className="estate__partners-image">
                        <img src={ZapierImg} alt="zapierPage-img" />
                    </div>

                    <div className="estate__partners-content_overlay">
                        <div className="estate__partners-iconBox">
                            <div className='estate__partners-iconBox_icon'>
                                <div className="estate__partners-icon_wrap flex__center">
                                    <div className="estate__partners-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>

                            <h3 className='estate__partners-iconBox_text p__futura'>
                                Zapier offers integrations with more than 2000 apps.</h3>
                        </div>

                        <div className="estate__partners-iconBox">
                            <div className='estate__partners-iconBox_icon'>
                                <div className="estate__partners-icon_wrap flex__center">
                                    <div className="estate__partners-icon_checkmark flex__center">
                                        <img src={Checkmark} alt="checkmark_img" />
                                    </div>
                                </div>
                            </div>

                            <h3 className='estate__partners-iconBox_text p__futura'>
                                No code required! Build workflows in a simple and intuitive way.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
