import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturesList.css';

const FeaturesList = () => {
    return (
        <div className='dropDownFeatures'>
            <div className='dropDownList p__futura'>
                <a href="#"><Link to="/Detectors">Detectors</Link></a>
                <a href="#"><Link to="/Heatmaps">Heatmaps</Link></a>
                <a href="#"><Link to="/Integrations">Zapier Integrations</Link></a>
            </div>
        </div>
    )
}

export default FeaturesList
