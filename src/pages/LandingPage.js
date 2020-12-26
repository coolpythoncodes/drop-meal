import { useState,useEffect } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';


const LandingPage = () => {

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakPoint = 767;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <>
            <NavBar>  
                {
                 <NavLinks 
                    deviceWidth={deviceWidth} 
                    breakPoint={breakPoint}
                />
                }
            </NavBar>

            
        </>
    );
}

export default LandingPage;
