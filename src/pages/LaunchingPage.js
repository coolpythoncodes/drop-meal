import { useState, useEffect, } from 'react';
import '../Sass/LaunchingPage.scss';
import Logo from '../assests/drop meal logo.png'
import Input from 'react-phone-number-input/input'
import Arrow from '../assests/timerArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import PopUp from '../components/PopUp';


const LaunchingPage = ({ days, hours, minutes, seconds }) => {

    const [value, setValue] = useState('');
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    // const breakPoint = 767;
    const mobileBreakPoint = 400;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);
    return (
        <div className='launching__page'>
            <PopUp />
            <div className="launching__pageContainer">
                <div className="logo">
                    <img src={Logo} alt="drop meal logo"/>
                </div>
                <small className='sweetness'>Sweetness is coming...</small>
                <h1 className='launching__pageHeader'>Welcome to DropMeal</h1>
                <p>No. 1 Online Food Service Platform in your city.</p>
                <div className="arrow">
                    <img src={Arrow} alt=""/>
                </div>
                <div className="launching__pageReady">
                    <p>We’d be ready in...</p>
                </div>

                {/* Timer here */}
                <div className="countdown">
                    <div className="launching__pageTimer">
                        <div className="days">
                            <h1>{days}</h1>
                            <small>days</small>
                        </div>
                        <div className="hours">
                            <h1>{hours}</h1>
                            <small>hours</small>
                        </div>
                        <div className="mins">
                            <h1>{minutes}</h1>
                            <small>mins</small>
                        </div>
                        <div className="mins">
                            <h1>{seconds}</h1>
                            <small>secs</small>
                        </div>
                    </div>
                </div>
                
                
                <div className="email__form">
                    <p>Hey, lets tell you when we come live!</p>
                    <form>
                        <Input
                            country="NG"
                            // international
                            placeholder="Enter your phone number"
                            value={value}
                            onChange={setValue}
                            maxLength='13'
                        />
                        {/* <input type="email" name="" id="" placeholder='Enter your email to get notified'/> */}
                        <button  type="submit">
                            Notify me 
                           {
                               deviceWidth >= mobileBreakPoint ?
                                <FontAwesomeIcon 
                                icon={faBell}
                                color='#fff'
                                style={{marginLeft:'5px'}}
                            /> : null
                           }
                        </button>
                    </form>
                </div>

                <ul className="social__links">
                    <li>
                        <a href="https://www.facebook.com/dropmealng" target='blank'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/dropmealng" target='blank'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        </li>
                    <li>
                        <a href="https://www.instagram.com/dropmealng/" target='blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </div>  
        </div>
    );
}

export default LaunchingPage;
