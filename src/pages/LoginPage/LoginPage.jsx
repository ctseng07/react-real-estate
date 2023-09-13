import React from 'react';
import Logo_black from '../../assets/logo_black.png';
import { Link } from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='loginPage flex__center'>
            <div className="loginPage__container flex__center">
                <Link to='/react-real-estate'>
                    <img src={Logo_black} alt="Safewatch__logo" />
                </Link>

                <div className="loginPage__input flex__center">
                    <h1 className='p__futura'>Login</h1>

                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />

                    <a href="#">Forgot Password?</a>

                    <div className="loginPage__buttons">
                        <button type='button'>Login</button>
                        <button type='button'>Sign up</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LoginPage
