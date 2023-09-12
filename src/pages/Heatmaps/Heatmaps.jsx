import { DemoVid, SubHeading } from '../../components';
import MainLayout from '../../layout/MainLayout';

import carHeatMaps from '../../assets/carheatmap.jpg';

import './Heatmaps.css';

const Heatmaps = () => {
    return (
        <MainLayout>
            <div className="heatmaps heatMaps__bg">
                <div className="heatmaps-heading flex__center">
                    <SubHeading title='Understand better where events have occured, and will occur.' />
                </div>
            </div>

            <div className="heatmaps-content flex__center">
                <h1 className='p__neuzeit'>Generate heatmaps from your detections,
                    visualize in a more intuitive way the
                    events captured by your camera.</h1>

                <div className="heatmaps-content_container">
                    <img src={carHeatMaps} alt="carHeatMaps__img" />

                    <div className="heatmaps-content_text">
                        <h1 className='p__neuzeit'>Learn more from patterns</h1>
                        <p className='p__cerebri'>Cars detected over the course of one day</p>
                    </div>
                </div>

                <div className="heatmaps-text">
                    <p className='p__cerebri'>Safewatch will generate a heatmap from the detections of specific objects over the period of one month, which can provide significant insight into their patterns of movement.</p>
                    <p className='p__cerebri'>You can always download the heatmaps for later revisiting, and we at Safewatch are working hard to provide more in-depth analysis for all of your detections.</p>
                </div>
            </div>
            <DemoVid />
        </MainLayout>
    );
};

export default Heatmaps;
