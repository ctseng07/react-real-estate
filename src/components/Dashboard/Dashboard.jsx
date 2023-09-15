import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.png';

import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <Link to='/react-real-estate'>Home</Link>
            <Link to='/LoginPage'>Dashboard</Link>
            <button className='button'>
                <a href='#download'>Download DDNS</a>
            </button>
        </>
    )
}

const Dash_Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="estate__navbar">
            <div className="estate__navbar-logo">
                <Link to="/react-real-estate">
                    <img src={logo} alt="Safewatch" />
                </Link>
            </div>

            <div className="estate__navbar-links">
                <div className="estate__navbar-links_container">
                    <Dashboard />
                </div>
            </div>

            <div className="estate__navbar-sidebar">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='estate__navbar-sidebar_overlay slide-bottom'>
                        <div className='estate__navbar-sidebar_links'>
                            <Dashboard />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dash_Nav
