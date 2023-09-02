import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.png'
import './Navbar.css';
import FeaturesList from '../DropDownList/FeaturesList';
import BlogList from '../DropDownList/BlogList';

const Menu = () => (
    <>
        <p><Link to='/react-real-estate'>HOME</Link></p>
        <div className="estate__featureList">
            <a href='#features'>FEATURES</a>
            <FeaturesList />
        </div>
        <div className="estate__featureList">
            <a href='#about'>ABOUT</a>
            <BlogList />
        </div>
        <p><a href='#login'>LOGIN/SIGNUP</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [estate__navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 900) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={estate__navbar ? "estate__navbar active" : "estate__navbar"}>
            <div className="estate__navbar-logo">
                <Link to="/react-real-estate">
                    <img src={logo} alt="Safewatch" />
                </Link>
            </div>
            <div className="estate__navbar-links">
                <div className="estate__navbar-links_container">
                    <Menu />
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
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
