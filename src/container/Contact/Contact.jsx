import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';

const Contact = () => {
    return (
        <div className='estate__contact contact__bg'>
            <div className="estate__contact-content">
                <div className="estate__contact-content_text">
                    <p className='p__futura'>What are you waiting for?</p>
                    <p className='p__futura text__underline'>Start detecting today.</p>
                </div>

                <div className="estate__contact-content_info">
                    <Link to='/LoginPage'>
                        <button className='estate__contact-button p__futura'>Create an account</button>
                    </Link>
                    <p className='p_basier'>Do you have a question?</p>
                    <p className='p_basier'>Don't hesitate!</p>
                    <p className='p_basier'>hello@usesafewatch.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
