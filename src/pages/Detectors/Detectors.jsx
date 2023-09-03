import MainLayout from '../../layout/MainLayout';
import DetectorsBG from '../../assets/noiseabstract.jpg';

import './Detectors.css';

const Detectors = () => {
    return (
        <MainLayout>
            <div className="estate__detectors">
                <div className="estate__detectors-container">
                    <div className="estate__detectors-img">
                        <img src={DetectorsBG} alt="detect__img" />
                        <h1 className='p__cerebri'>Cut through the noise and get alerted quicker</h1>
                        <div className="estate__detectors-heading">
                        </div>
                    </div>
                </div>


            </div>
        </MainLayout>
    );
};

export default Detectors;
