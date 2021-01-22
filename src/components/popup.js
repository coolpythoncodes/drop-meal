import DrinkIcon from '../assests/champagne 1.png';
import CancelIcon from '../assests/cancel.png';
import FacebookIcon from '../assests/facebook.png';
import InstagramIcon from '../assests/instagram.png';
import TwitterIcon from '../assests/twitter.png';
import 'animate.css/animate.css'
import '../Sass/popUp.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
const PopUp = ({ message, color, setMessage, headerMessage }) => {
    const close = () => {
        setMessage('')
    }
    return (
        <>
            {
                message !== '' ?
                    <div className='popup'>
                        <div className='popup__box animate__animated animate__bounceIn'>
                            <button onClick={close}>
                                <img src={CancelIcon} alt="" />
                            </button>
                            <div className="popup__boxHeader">
                                <h1>{headerMessage}</h1>
                                <img src={DrinkIcon} alt="" />
                            </div>
                            <div className="popup__boxBody">
                                <div className="message__one">
                                    <p style={{color:color}}>{message}</p>
                                    {/* <p>You’d be among the first to know when this meal is served!</p> */}
                                </div>
                                <div className="message__two">
                                    <p>One more thing...follow us on our socials for more tasty Promos and Discounts</p>
                                </div>
                                <ul className="popup__boxFooter">
                                    <li>
                                        <a href="https://www.facebook.com/dropmealng" target='blank'>
                                            <img src={FacebookIcon} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/dropmealng" target='blank'>
                                            <img src={TwitterIcon} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/dropmealng/" target='blank'>
                                            <img src={InstagramIcon} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <p style={{ backgroundColor: color }}>{message}</p> */}
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
export default PopUp