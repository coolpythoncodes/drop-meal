import { useState, useEffect, useContext } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';
import ShowcaseImage from '../assests/showcase.png';
import PayOnceImage from '../assests/payoncebuy.svg';
import PlayStoreImage from '../assests/app-store.png';
import AppStoreImage from '../assests/google-playstore.png';
import AppStoreImageWhite from '../assests/playstorewhite.png';
// import ContactImage from '../assests/contact.svg';
import Girl from '../assests/girl.svg';
import UserIcon from '../assests/user-icon.svg';
import EmailIcon from '../assests/email_icon.svg';
import Button from '../components/Button/Button';
// import MenuContextProvider from '../context';
import CocacolaIcon from '../assests/coke.png';
import Steph from '../assests/STEPH.png';
import { MenuContext } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Works from '../components/Works Section/Works';
import Footer from '../components/Footer';

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
                            href='https://play.google.com/store/apps/details?id=com.dropmealngr'
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
                            href='/'
                        >
                            <div className='store-download-btn'>
                                <img className='store-image' src={PlayStoreImage} alt="" />
                                <div>
                                    <p className='first-text'>Coming soon on</p>
                                    <p className='second-text'>Applestore</p>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </section>

            <section id="about">
                <img 
                    src= {ShowcaseImage}                            alt="DropMeal food delivery service in Benin, Nigeria" 
                    className='showcase-image'
                />
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
                    internalLink
                    href='partner'
                    offset={-80}    
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
            
            <section id="pay-once">
                <div className="pay-once-image">
                    <img src={PayOnceImage} alt=""  className="pay-once-img" />
                </div>
                <div className="pay-once-info">
                    <h1>Pay once buy anytime</h1>
                    <p className='pay-one-text'>Plan your monthly feeding budget and stick to it with our Drop pay feature. Fund your wallet whenever and make payments with ease when you need to. Now you can eat what you want, when you want and pay how you want. DropMeal is for YOU!</p>
                    <div className="button-container" >
                        <Button
                            backgroundColor='#000'
                            color='#fff' 
                            width={`${deviceWidth <= mobileBreakPoint ? '136' :'186' }`}
                            height='52'
                            borderRadius='32'
                            marginRight='16'
                            href='https://play.google.com/store/apps/details?id=com.dropmealngr'
                        >
                            <div className='store-download-btn'>
                                <img className='store-image' src={AppStoreImageWhite} alt="" />
                                <div>
                                    <p className='first-text'>Download on the</p>
                                    <p className='second-text'>Playstore</p>
                                </div>
                            </div>
                        </Button>
                        <Button
                            backgroundColor='#000'
                             color='#fff' 
                             width={`${deviceWidth <= mobileBreakPoint ? '136' :'186' }`}
                             height='52'
                             borderRadius='32'
                             href='/'
                        >
                            <div className='store-download-btn'>
                                <img className='store-image' src={PlayStoreImage} alt="" />
                                <div>
                                    <p className='first-text'>Coming soon on</p>
                                    <p className='second-text'>Applestore</p>
                                </div>
                            </div>
                        </Button>
                </div>
                </div>
            </section>

            <section id="partner">
                <div className="partner-container">
                    <div className="partner-left">
                        <img src={Girl} alt=""/>
                        <p>Partnering with others has been our strength growing, and if you think we can work together, why not! Let’s partner up.</p>
                    </div>
                    <div className="partner-right">
                        <h1>Hey partner,</h1>
                        <div>
                            
                            <form action="">
                                <h2>How would you love us to partner</h2>
                                <div className="form-container">
                                    <select>
                                        <option>Choose an option</option>
                                        <option>Vendor</option>
                                        <option>Agent</option>
                                    </select>
                                    <div className="form-field">
                                        <img src={UserIcon} alt=""/>
                                        <input type="text" placeholder='Full Name'/>
                                    </div>
                                    <div className="form-field">
                                        <img src={EmailIcon} alt=""/>
                                        <input type="email" placeholder='Email'/>
                                    </div>

                                    <button type="submit">Begin</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <section id="our-partners">
                <div className="partners-container">
                    <h1>Meet our awesome partners</h1>
                    <div className="partners">
                        <img src={Steph} alt=""/>
                        <img src={CocacolaIcon} alt=""/>
                        <img src={CocacolaIcon} alt=""/>
                    </div>
                </div>
            </section>

            <section id="contact">
                {/* <img src={ContactImage} alt=""/> */}
                <div className="contact-container">
                    <h1>Having troubles,</h1>
                    <h1>Contact Support</h1>
                    <form action="">
                        <select>
                            <option>Choose an option</option>
                            <option>Vendor</option>
                            <option>Agent</option>
                        </select>
                        <div className="email">
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                color='#BFBFBF'
                            />
                            <input type="email" placeholder='Email'/>
                        </div>
                        <textarea placeholder='type what you want to enquire'></textarea>
                            <button type="submit">Send</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default LandingPage;
