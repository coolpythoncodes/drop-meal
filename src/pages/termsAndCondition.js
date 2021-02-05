import { useState, useEffect, useContext } from 'react';
import NavBar from '../components/Nav/NavBar';
import NavLinks from '../components/Nav/NavLinks';
// import MenuContextProvider from '../context';
import { MenuContext } from '../context';
import Footer from '../components/Footer';

const TermsAndConditions = () => {

    const { menuToggle } = useContext(MenuContext);

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakPoint = 767;

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <>
            <section >
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
                <div style={{width:'75%', margin:'auto', marginBottom:100, marginTop:100, height:'45vh'}}>
                    <p>DropMeal does not make refund after payment is made. We hold the absolute power to change the price of items as the price of food changes depending on external factors</p>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default TermsAndConditions;
