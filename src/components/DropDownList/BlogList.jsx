import React from 'react';
import { Link } from 'react-router-dom';

import './dropDownList.css';


const BlogList = () => {
    return (
        <div className='dropDownMenu'>
            <div className='dropDownList p__futura'>
                <a href="#"><Link to="/Blog">Blog</Link></a>
            </div>
        </div>
    )
}

export default BlogList;