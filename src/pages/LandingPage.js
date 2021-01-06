import { useState, useEffect, useContext } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';
import ShowcaseImage from '../assests/showcase.svg';
import PlayStoreImage from '../assests/app-store.png';
import AppStoreImage from '../assests/google-playstore.png';
import Button from '../components/Button/Button';
// import MenuContextProvider from '../context';
import { MenuContext } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Works from '../components/Works Section/Works';

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
                    <p className='sub-title'>We Gatchu!!! Let’s get you started by quickly downloading our app.</p>
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

            <section id="about">
                <img src={ShowcaseImage} alt="DropMeal food delivery service in Benin, Nigeria" className='showcase-image'/>
                <h1>About DropMeal</h1>
                <p className="about-text">We at DropMeal tasked ourselves with making convienient food delivery. We took the extra work to making sure you get meals just as fresh and warm as it should be.</p>
                <p className="about-text">Our extra service include helping food vendors as well, to deliver to their clients. This delivery service is strictly for food vendors as our service deals with food.</p>

                <Button
                    width={`${deviceWidth <= mobileBreakPoint ? '190' : '254'}`}
                    height='50'
                    // backgroundColor='red'
                    border
                    color='#0167C8'
                    borderRadius='6'
                    borderColor='#0167C8'
                    
                >
                    <div className="partner-btn">
                        <p>Partner with us</p>
                        <FontAwesomeIcon 
                            icon={faLongArrowAltRight} 
                            color='#0074DF'
                            style={{
                                marginLeft:'1rem'
                            }}
                        />
                    </div>
                </Button>
            </section>

            <section id="how-it-works">
                <h1 id='works-heading'>How it Works</h1>
                <Works />
            </section>

            {/* <section id="works">
                <h1>How it works</h1>
            </section> */}

            
        </>
    );
}

export default LandingPage;
