import React, { useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.png'
import './Navbar.css';

const Menu = () => (
    <>
        <p><a href='#home'>HOME</a></p>
        <p><a href='#features'>FEATURES</a></p>
        <p><a href='#about'>ABOUT</a></p>
        <p><a href='#login'>LOGIN/SIGNUP</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='estate__navbar'>
            <div className="estate__navbar-logo">
                <img src={logo} alt="Safewatch" />
            </div>
            <div className="estate__navbar-links">
                <div className="estate__navbar-links_container">
                    <Menu />
                </div>
                <div className="estate__navbar-login">
                    <p className='p__futura'>LOGIN/SIGNUP</p>
                </div>
            </div>
            <div className="estate__navbar-sidebar">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='estate__navbar-sidebar_overlay flex__center slide-bottom'>
                        <div className='estate__navbar-sidebar_links'>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
