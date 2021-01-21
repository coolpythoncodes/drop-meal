import { useState, useEffect, } from 'react';
import '../Sass/LaunchingPage.scss';
import Logo from '../assests/drop meal logo.png'
import Input from 'react-phone-number-input/input'
import Arrow from '../assests/timerArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
<<<<<<< HEAD
import PopUp from '../components/PopUp';

=======
import firebase from "./../database/firebase"
import PopUp from '../components/popup';
>>>>>>> d9e5364bc8a500b6856f2833d9895e2dd8583e29

const LaunchingPage = ({ days, hours, minutes, seconds }) => {

    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage]=useState('')
    const [color, setColor]=useState('red')
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    // const breakPoint = 767;
    const mobileBreakPoint = 400;
<<<<<<< HEAD

=======
    const onSubmit =(e)=>{
        e.preventDefault()
        setLoading(true)
        setMessage('')
        if(value === ''|| value.length <13){
            setLoading(false)
            setColor('red')
            setMessage('Incorrect phone number was entered. Please enter a valid phone number.')
            return
        }
        firebase.storePhoneNumber(value)
        .then((mes)=>{
            if(!mes){
                setColor('red')
                setMessage('You have already subscribed to be notified before..')
            }
            else{
                setValue('')
                setColor('green')
                setMessage('Your phone number has been recieved. Be sure to get notified went DropMeal comes Live..')
            }
            setLoading(false)
            

        })
        .catch(e=>{
            console.log(e)
            setLoading(false)
            setColor('red')
            setMessage('Opps something went wrong with the form.')
        })
    }
>>>>>>> d9e5364bc8a500b6856f2833d9895e2dd8583e29
    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);
    return (
        <div className='launching__page'>
<<<<<<< HEAD
            <PopUp />
=======

>>>>>>> d9e5364bc8a500b6856f2833d9895e2dd8583e29
            <div className="launching__pageContainer">
                <div className="logo">
                    <img src={Logo} alt="drop meal logo"/>
                </div>
                <PopUp setMessage={setMessage} color={color} message={message} />
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
                            <h1>{days>9?days:'0'+days}</h1>
                            <small>days</small>
                        </div>
                        <div className="hours">
                            <h1>{hours>9?hours:'0'+hours}</h1>
                            <small>hours</small>
                        </div>
                        <div className="mins">
                            <h1>{minutes>9?minutes:'0'+minutes}</h1>
                            <small>mins</small>
                        </div>
                        <div className="mins">
                            <h1>{seconds>9?seconds:'0'+seconds}</h1>
                            <small>secs</small>
                        </div>
                    </div>
                </div>
                
                
                <div className="email__form">
                    <p>Hey, lets tell you when we come live!</p>
                    <form onSubmit={onSubmit}>
                        <Input
                            country="NG"
                            // international
                            placeholder="Enter your phone number"
                            value={value}
                            onChange={setValue}
                            maxLength='13'
                        />
                        {/* <input type="email" name="" id="" placeholder='Enter your email to get notified'/> */}
                        {
                            !loading?
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
                            :
                            <button  type="btn">
                                Please wait...
                            </button>
                        }
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
