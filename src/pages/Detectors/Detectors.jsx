import MainLayout from '../../layout/MainLayout';
import DetectorsBG from '../../assets/noiseabstract.jpg';

import './Detectors.css';

const Detectors = () => {
    return (
        <MainLayout>
            <div className="estate__detectors detector__bg">
                <div className="estate__detectors-heading flex__center">
                    <h1 className='p__cerebri'>Cut through the noise and get alerted quicker</h1>
                </div>
            </div>

            <div className="estate__detectors-content">
                <h1 className='p__cerebri'>Safewatch will give super powers to your security cameras!</h1>
                <p className='p__cerebri '>Safewatch uses state-of-the art artificial intelligence to detect objects in your security feed. You can select the objects you want to be alerted on, and when they are detected you will receive a text notification to your phone.</p>
                <p className='p__cerebri'>On top of this you get free 14 days of footage storage so you can go back to watch your camera feed when something happened, and you can download a copy.</p>
            </div>

            <div className="estate__detectors-features">

            </div>

            <div className="estate__detectors-video">

            </div>
        </MainLayout>
    );
};

export default Detectors;
