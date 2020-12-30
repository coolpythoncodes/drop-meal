import { useState, useEffect, useContext } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';

import PlayStoreImage from '../assests/app-store.png';
import AppStoreImage from '../assests/google-playstore.png';
import Button from '../components/Button/Button';
// import MenuContextProvider from '../context';
import { MenuContext } from '../context';

const LandingPage = () => {

    const { menuToggle } = useContext(MenuContext);

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
                {/* <MenuContextProvider > */}
                    <NavBar
                            // menuToggle={menuToggle} 
                            // onToggle={onToggle}
                        >  
                            {
                            <NavLinks 
                                menuToggle={menuToggle}
                                deviceWidth={deviceWidth} 
                                breakPoint={breakPoint}
                            />
                            }
                        </NavBar>
                {/* </MenuContextProvider> */}
                   

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
