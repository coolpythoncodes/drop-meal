import styled from 'styled-components';
import Button from '../Button/Button';
import LogoImage from '../../assests/drop meal logo.png';

import '../../Sass/landingpage.scss';


const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 0.2;
`
const LogoText= styled.p`
    padding-left: 3px;
    font-family: Mulish;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.015em;
`
const Nav = styled.nav`
    flex: 0.6;
`
const LinkWrapper = styled.ul`
    display: flex;
    font-family: Mulish;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;
`
const NavBar = ({ children }) => {
    return (
        <>
            {/* <div className={`menu-btn ${menuToggle ? 'close' : null}`} onClick={onToggle}>
                <div className="menu-btn-line"></div>
                <div className="menu-btn-line"></div>
                <div className="menu-btn-line"></div>
            </div> */}
            <Wrapper>
                <Logo>
                    <img src={LogoImage} alt=""/>
                    <LogoText>DropMeal</LogoText>
                </Logo>
                <Nav>
                    <LinkWrapper>
                        {children}
                    </LinkWrapper>
                </Nav>
               <div style={{flex:0.2}}>
                    <Button
                            backgroundColor='#EE3C19'
                            color='#fff'
                            width='163'
                            height='44'
                            borderRadius='22'
                        >
                            Download Now
                    </Button>
               </div>
            </Wrapper>
        </>
    );
}

export default NavBar;
