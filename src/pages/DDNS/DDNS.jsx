import React from 'react'
import SecondLayout from '../../layout/SecondLayout';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Fiber from '../../assets/fiber.jpeg';
import Graph from '../../assets/graph.png';

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

                        <div className="ddns__socialIcons">
                            <FiFacebook />
                            <FiTwitter />
                            <FiInstagram />
                        </div>
                    </div>

                    <div className="ddns__header-img">
                        <img src={Graph} alt="graph__img" />
                        <img src={Fiber} alt="fiber__img" />
                    </div>
                </div>
            </div>
        </SecondLayout>
    )
}

export default DDNS
