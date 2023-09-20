import React from 'react'
import SecondLayout from '../../layout/SecondLayout';

import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Fiber from '../../assets/fiber.jpeg';
import Graph from '../../assets/graph.png';

import Chronometer from '../../assets/chronometer-stopwatch-svgrepo-com.svg';

import './DDNS.css';

const DDNS = () => {
    return (
        <SecondLayout>
            <div className="ddns ddns__bg">
                <div className="ddns__content ddns__bg">
                    <div className="ddns__header-info">
                        <h1 className='p__neuzeit'>Free Dynamic DNS</h1>
                        <p className='p__cerebri'>Watch your cameras without having to rely on your variable IP address. No fees, cryptographically secure, autoupdates your ip for free forever and works on both Windows and Mac.
                            We collect no information from your computer.</p>
                        <p className='p__cerebri'>"Dynamic DNS is a method of automatically updating a name server in the Domain Name Server, often in real time, with the active DDNS configuration of its configured hostnames, addresses or other information."
                            -Wikipedia</p>

                        <div className="ddns__social">
                            <FiFacebook />
                            <FiTwitter />
                            <FiLinkedin />
                        </div>
                    </div>
                    <div className="ddns__header-img">
                        <img src={Fiber} alt="fiber__img" />
                        <img src={Graph} alt="graph__img" />
                    </div>
                </div>
            </div>

            <div className="ddns__info-container">
                <div className="ddns__info-wrapper">
                    <div className="ddns__info-left">
                        <div className="ddns__container-icon flex__center">
                            <img src={Chronometer} alt="chronometer-icon" />
                        </div>
                        <h1 className='p__neuzeit'>Easy setup and management</h1>
                        <p className='p__cerebri'>Getting started is super easy</p>
                        <div className="text-dash"></div>
                    </div>

                    <div className="ddns__info-right">
                        <h1 className='p__neuzeit'>4 Easy steps</h1>
                        <p className='p__cerebri'>1. Login with your Safewatch account.</p>
                        <p className='p__cerebri'>2. Enter a hostname you want to use.</p>
                        <p className='p__cerebri'>3. Leave the ip-updater running.</p>
                        <p className='p__cerebri'>4. Voilà!</p>
                    </div>
                </div>

            </div>
        </SecondLayout>
    )
}

export default DDNS
