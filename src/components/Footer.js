import '../Sass/Footer.scss'
import Logo from '../assests/drop meal logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-left'>
                    <div className='footer-logo'>
                        <img src={Logo} alt="DropMeal Logo"/>
                        <h1>DropMeal</h1>
                    </div>
                    <p>Copyright {getCurrentYear()} DropMeal All rights reserved</p>
                    <p style={{ color: '#8C8C8C' }}><Link to="/terms-and-condition">Terms of service</Link> | <Link to="/privacy-policy">Privacy Policy</Link></p>
                </div>
                <div className='footer-right'>
                    <div>
                        <h2>Company</h2>
                        <ul>
                            <li><a href="/">DropPay</a></li>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="/">Partnership</a></li>
                            <li><a href="/">Features</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
