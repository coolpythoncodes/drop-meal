import { useState,useEffect } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';

import PlayStoreImage from '../assests/app-store.png';
import AppStoreImage from '../assests/google-playstore.png';
import Button from '../components/Button/Button';

// const AppBtnFirstText = styled.p`

// font-family: Mulish;
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 18px;
// /* identical to box height */


// color: #080000;
// `

const LandingPage = () => {

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakPoint = 767;
    const mobileBreakPoint = 600;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <>
            <section className="showcase">
                <NavBar>  
                    {
                    <NavLinks 
                        deviceWidth={deviceWidth} 
                        breakPoint={breakPoint}
                    />
                    }
                </NavBar>

                <div className="showcase-text">
                    <h1>Are you hungry?</h1>
                    <p className='sub-title'>We Gatchu!!! Let’s get you started by quickly downloading our app.</p>S
                    <div className="store-download-btns" >
                        <Button 
                            backgroundColor='#fff'
                            width={`${deviceWidth <= mobileBreakPoint ? '136' :'186' }`}
                            borderRadius='32'
                        >
                            <div className='store-download-btn' >
                                <img className='store-image' src={AppStoreImage} alt="" />
                                <div className='btn-text'>
                                    <p className='first-text'>Download on the</p>
                                    <p className='second-text'>PlayStore</p>
                                </div>
                            </div>
                        </Button>
                        <Button 
                            backgroundColor='#fff'
                            width={`${deviceWidth <= mobileBreakPoint ? '136' :'186' }`}
                            borderRadius='32'
                        >
                            <div className='store-download-btn'>
                                <img className='store-image' src={PlayStoreImage} alt="" />
                                <div>
                                    <p className='first-text'>Download on the</p>
                                    <p className='second-text'>Applestore</p>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </section>

            
        </>
    );
}

export default LandingPage;
