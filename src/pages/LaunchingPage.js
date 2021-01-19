import '../Sass/LaunchingPage.scss';
import Countdown from 'react-countdown';
import Logo from '../assests/drop meal logo.png'
import Arrow from '../assests/timerArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const LaunchingPage = () => {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <div className="launching__pageTimer">
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
;
        }
      };
    return (
        <div className='launching__page'>
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
                    <Countdown
                        date={Date.now() + 441504000}
                        renderer={renderer}
                    />
                </div>
                
                
                <div className="email__form">
                    <p>Hey, lets tell you when we come live!</p>
                    <form>
                        <input type="email" name="" id="" placeholder='Enter your email to get notified'/>
                        <button  type="submit">
                            Notify me 
                            <FontAwesomeIcon 
                                icon={faBell}
                                color='#fff'
                                style={{marginLeft:'5px'}}
                            />
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
