import MainLayout from '../../layout/MainLayout';
import icons from '../../constants/images';
import SubHeading from '../../components/Subheading/SubHeading';

import { DemoVid } from '../../components';

import './Detectors.css';

const Detectors = () => {
    return (
        <MainLayout>
            <div className="estate__detectors detector__bg">
                <div className="estate__detectors-heading flex__center">
                    {/* <h1 className='p__neuzeit'>Cut through the noise and get alerted quicker</h1> */}
                    <SubHeading title="Cut through the noise and get alerted quicker" />
                </div>
            </div>

            <div className="estate__detectors-content flex__center">
                <h1 className='p__neuzeit'>Safewatch will give super powers to your security cameras!</h1>

                <div className="estate__detectors-text">
                    <p className='p__cerebri '>Safewatch uses state-of-the art artificial intelligence to detect objects in your security feed. You can select the objects you want to be alerted on, and when they are detected you will receive a text notification to your phone.</p>
                    <p className='p__cerebri'>On top of this you get free 14 days of footage storage so you can go back to watch your camera feed when something happened, and you can download a copy.</p>
                </div>
            </div>

            <div className="estate__detectors-iconbox">
                <div className="estate__detectors-icon_container">
                    <img src={icons.science} alt="science_icon" />
                    <h3 className='p__neuzeit'>No rocket science</h3>
                    <p className='p__cerebri'>Adding your camera takes 30 seconds.</p>
                </div>

                <div className="estate__detectors-icon_container">
                    <img src={icons.computer} alt="computer_icon" />
                    <h3 className='p__neuzeit'>Save your footage</h3>
                    <p className='p__cerebri'>Free footage backup for 14 days.</p>
                </div>

                <div className="estate__detectors-icon_container">
                    <img src={icons.rocket} alt="rocket_icon" />
                    <h3 className='p__neuzeit'>Instant notifications</h3>
                    <p className='p__cerebri'>Get alerted in less than 3 seconds after the object is detected.</p>
                </div>

                <div className="estate__detectors-icon_container">
                    <img src={icons.present} alt="present_icon" />
                    <h3 className='p__neuzeit'>Free trial</h3>
                    <p className='p__cerebri'>Try Safewatch risk free for the first 15 days.</p>
                </div>

                <div className="estate__detectors-icon_container">
                    <img src={icons.contact} alt="contact_icon" />
                    <h3 className='p__neuzeit'>Customer support</h3>
                    <p className='p__cerebri'>If you're having any doubts or troubles we will gladly help you out.</p>
                </div>

                <div className="estate__detectors-icon_container">
                    <img src={icons.update} alt="update_icon" />
                    <h3 className='p__neuzeit'>Free updates</h3>
                    <p className='p__cerebri'>With time Safewatch will get better, but the price will stay the same.</p>
                </div>
            </div>
            <DemoVid />
        </MainLayout>
    );
};

export default Detectors;
