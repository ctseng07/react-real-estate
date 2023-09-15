import React from 'react';
import MainLayout from '../../layout/MainLayout';

import wolf from "../../assets/wolf.png";

import './BlogPage.css'

const BlogPage = () => {
    return (
        <MainLayout>
            <div className="blogPage">
                <div className="blogPage__heading blogPage__bg">
                    <div className="blogPage__heading-content">
                        <h3 className='p__neuzeit'>Selective Attention</h3>

                        <div className="blogPage__heading-info">
                            <div className="blogPage__heading-container">
                                <p className='p__cerebri'>Author:</p>
                                <p className='p__cerebri'>Safewatch</p>
                            </div>
                            <div className="blogPage__heading-container">
                                <p className='p__cerebri'>Published On:</p>
                                <p className='p__cerebri'>April 7th, 2020</p>
                            </div>
                            <div className="blogPage__heading-container">
                                <p className='p__cerebri'>Published In:</p>
                                <p className='p__cerebri'>Miscellaneous</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blogPage__content">
                    <div className="blogPage__content-info">

                        <p className='has-dropCap p__cerebri'> A month ago I was over at a friend’s house as we had planned to finish an assignment long overdue. As we worked, the screen on his phone lit up with a notification and I, as the proficient upside-down-reader that I am, caught that there was “Motion detected at your front door”. Curiously, my friend did not get up to confirm that there was in fact motion detected at his front door.</p>
                        <p className='p__cerebri'>This compelled me to start thinking about why security cameras haven’t grown past the stage of simply detecting motion. Perhaps it is simply out of simplicity: if there’s a commotion in your bank vault, there is a non-zero probability that you are getting robbed.</p>
                        <p className='p__cerebri'>But point that camera towards your driveway, or better yet a crowded airport. Naturally, your phone or security agent would be overwhelmed with notifications. You are certainly familiar with the fable of the camera who cried wolf.</p>

                        <div className="blogPage__content-img flex__center">
                            <img src={wolf} alt="wolf__img" />
                            <p className='p__cerebri'>Francis Barlow's illustration of the fable, 1687</p>
                        </div>

                        <p className='p__cerebri'>So, are we doomed to endless notifications to the tune of “Motion detected on driveway”, and to be immediately disappointed (pleased?) with the sight of Alvin and his pals? It would be unfair of us to paint such a problem while withholding a solution.</p>
                        <p className='p__cerebri'>Safewatch, at its inception, was designed uniquely to detect firearms and alert authorities upon discovery. This was no small task either, as evidenced by the countless folders regrouping each firearm by their length and size. By tackling each of these hurdles, what started as a simple hackathon project grew to what it is today.</p>

                        <h3 className='p__neuzeit'>Introducing Safewatch</h3>

                        <p className='p__cerebri'>One question still stands: what is Safewatch today (at the time of writing April 6, 2020)? Safewatch is a software designed to optimize and upgrade your home security system. Our product builds on your existing internet connected camera systems with a proprietary object detection technology. This enables us to detect defined objects that come in and out of your frame of view, with a high degree of accuracy.</p>
                        <p className='p__cerebri'>As such, protecting your valuables and your loved ones doesn’t come at the cost of associating the faint vibration of a notification to a harmless commotion in your driveway. By contrast, Safewatch is able to send you tailored alerts to your needs and concerns, notifying you on what you want to know for your peace of mind.</p>
                        <p className='p__cerebri'>An unexpected car pulled up on your driveway? Safewatch can let you know that. Your Amazon package that you were waiting for has arrived at your doorstep? You can set Safewatch to alert you on that.</p>
                        <p className='p__cerebri'>That is what Safewatch is. We are able to observe and differentiate different types of objects, and send you alerts that make sense.</p>
                        <p className='p__cerebri'>An even better understanding of Safewatch can be achieved by considering what Safewatch isn’t.</p>

                        <h4 className='p__neuzeit'>Safewatch isn’t bound to a specific camera</h4>
                        <p className='p__cerebri'>What this means is that any internet connected camera can be made much more powerful within seconds. Our product enables us to bind to basically any camera, whichever make or model, and improve your home monitoring experience.</p>

                        <h4 className='p__neuzeit'>Safewatch doesn’t hoard your notification center</h4>
                        <p className='p__cerebri'>Unless, in an unexpected way, the object you had instructed Safewatch to detect appeared much more frequently than you had anticipated. At all times, you are the one in control of your alerts and notifications. Our dashboard lets you choose precisely what you want to detect, and when you want Safewatch to alert you.</p>

                        <h4 className='p__neuzeit'>Safewatch doesn’t stagnate</h4>
                        <p className='p__cerebri'>Safewatch has a laundry list of features waiting to be implemented that we hope excites you as much as it does us. Our team is always thinking about new and innovative ways we could possibly apply our technology.</p>

                        <h4 className='p__neuzeit'>Safewatch isn’t limited to weapons</h4>
                        <p className='p__cerebri'>We assure you that this is not a threat. What we mean by this is that the objects which can be detected by Safewatch are not set in stone: we are constantly adding new objects (often suggested by customers) of whose presence you’d be pleased to be notified.</p>

                        <h4 className='p__neuzeit'>Coming clean</h4>
                        <p className='p__cerebri'>This piece is as much a pitch as an attempt on our part to take aim towards where we’d like to be. Having you be a part of Safewatch would, at the least, greatly enhance its journey, or perhaps change its course entirely.</p>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default BlogPage
