import { DemoVid, SubHeading } from '../../components';
import MainLayout from '../../layout/MainLayout';
import icons from '../../constants/images';

import './Integrations.css';

import ZapierLogo from '../../assets/zapier-logo.png';
import Connections from '../../assets/connection_img.png';


const Integrations = () => {
    return (
        <MainLayout>
            <div className="integrations">
                <div className="integrations__heading integrations__bg flex__center">
                    <SubHeading title='Integrate your camera with applications so it can act on events.' />
                </div>

                <div className="integrations__content">
                    <div className="integrations__content-container">
                        <h1 className='p__neuzeit'>Don't just have
                            your camera
                            watch, have your
                            camera <span className='blue_text'> do</span></h1>
                        <p className='p__cerebri'>Safewatch currently offers integrations with
                            Zapier, which allows you to connect your camera
                            to over 2000 apps.</p>
                        <img src={ZapierLogo} alt="zapierLogo__img" />
                    </div>

                    <div className="integrations__content-img">
                        <img src={Connections} alt="connections__img" />
                    </div>
                </div>

                {/* <div className="integrations__iconBox"> */}
                <div className="integrations__iconBox-content">
                    <div className="integrations__icon-container">
                        <img src={icons.science} alt="science_icon" />
                        <h4 className='p__neuzeit'>Countless apps available</h4>
                        <p className='p__cerebri'>You can choose from more than
                            2000 apps Zapier has to offer.</p>
                    </div>

                    <div className="integrations__icon-container">
                        <img src={icons.computer} alt="computer_icon" />
                        <h4 className='p__neuzeit'>Intuitive integrations</h4>
                        <p className='p__cerebri'>No coding knowledge required.</p>
                    </div>

                    <div className="integrations__icon-container">
                        <img src={icons.rocket} alt="rocket_icon" />
                        <h4 className='p__neuzeit'>Act upon detection</h4>
                        <p className='p__cerebri'>For any detection of a selected
                            object, the specified action will instantly execute.</p>
                    </div>
                </div>
                {/* </div> */}

            </div>
            <DemoVid />
        </MainLayout>
    );
};

export default Integrations;