import { SubHeading } from '../../components';
import { Link } from 'react-router-dom';

import rightArrow from '../../assets/right-arrow.svg';
import arrowDown from '../../assets/arrow-down.svg';

import gorilla from '../../assets/gorilla.png'
import MainLayout from '../../layout/MainLayout';

import './Blog.css';

const Blog = () => {
    return (
        <MainLayout>
            <div className="blog">
                <div className="blog__heading blog__bg flex__center">
                    <SubHeading title="Blog" />

                    <div className="blog__arrow">
                        <a href='#blog'>
                            <img src={arrowDown} alt="arrowDown_img" />
                        </a>
                    </div>
                </div>

                <div className="blog__content" id='blog'>
                    <div className="blog__container">
                        <img src={gorilla} alt="gorilla_img" />
                    </div>

                    <div className="blog__text">
                        <h1 className='p__neuzeit'>Selective Attention</h1>

                        <div className="blog__text-container">
                            <div className='blog__text-dash'></div>
                            <p className='p__cerebri text__uppercase'>Miscellaneous April 7, 2020</p>
                        </div>

                        <p className='p__neuzeit'>Peace of mind is simply a matter of knowing what to look for.</p>

                        <div className="blog__text-container">
                            <div className='blog__text-dash'></div>
                            <p className='p__cerebri text__uppercase'>
                                <Link to='/BlogPage'>Continue Reading</Link></p>
                            <div className="blog__text-arrow">
                                <img src={rightArrow} alt="rightArrow__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Blog;