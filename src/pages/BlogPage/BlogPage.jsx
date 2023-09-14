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
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default BlogPage
