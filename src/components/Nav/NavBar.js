import { useContext } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import LogoImage from '../../assests/drop meal logo.png';

import '../../Sass/landingpage.scss';
import { MenuContext } from '../../context';

const showLinks = `
    transform: translate3d(0, 0, 0);

    &:nth-child(1){
        transition-delay: 0.1s;
    } 

    &:nth-child(2){
        transition-delay: 0.2s;
    } 

    &:nth-child(3){
        transition-delay: 0.3s;
    } 

    &:nth-child(4){
        transition-delay: 0.4s;
    }  

    &:nth-child(5){
        transition-delay: 0.5s;
    }  
`

const close = `transform: rotate(180deg);
    
    & > div:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    // Line 2 - Hide
    & > div:nth-child(2) {
        opacity: 0;
    }

    // Line 3 - Rotate
    & > div:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -8px);

    }
}  
`

const HamburgerMenu = styled.div`
    display: none;
    transition: all 0.5s ease-out;

    @media screen and (max-width: 768px){
        display: block;
        position: fixed;
        top: 27px;
        right:30px;
        z-index: 99999999;
        ${
            props => props.menuToggle && close
        }
    }

`

const MenuBtnLine = styled.div`
    width: 30px;
    height: 0.2rem;
    margin-bottom: 0.4rem;
    background: #F17C22;
`

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 1rem;
    position: fixed;
    top: 0;
    background: #000;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px){
        height: 5rem;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    // flex: 0.2;
  

    @media screen and (max-width: 768px){
        position: fixed;
        top: 20px;
        left: 29px;
        z-index: 999;
    }
`
const LogoText= styled.p`
    padding-left: 3px;
    color: #fff;
    font-family: Mulish;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.015em;
`
const Nav = styled.nav`
    // flex: 0.6;

    @media screen and (max-width: 768px){
        display: block;
    }
`
const LinkWrapper = styled.ul`
    display: flex;
    font-family: Mulish;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;

    @media screen and (max-width: 768px){
        display: block;
        position:fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 80%;
        background: #000;
        padding: 80px 30px;
        transform: translate(-700px);
        transition: transform 0.5s ease-in-out;
        z-index: 999;

        & > li:last-child{
            border-bottom: none;
        }

        & > li{
            transform: translate3d(-520px, 0, 0);
            transition: all 0.5s ease-in-out;

            ${
                props => props.menuToggle && showLinks
            }
           
        }

        ${
            props => props.menuToggle && 'transform: translate(0);'
        }
    }

`
const ButtonWrapper = styled.div`
    // flex: 0.2;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavBar = ({ children }) => {
    const { menuToggle, setMenuToggle } = useContext(MenuContext);
    const onToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <>

            <HamburgerMenu 
                onClick={onToggle} 
                menuToggle={menuToggle}
            >
                <MenuBtnLine></MenuBtnLine>
                <MenuBtnLine></MenuBtnLine>
                <MenuBtnLine></MenuBtnLine>
            </HamburgerMenu>

            <Wrapper>
                {/* <Container> */}
                    <Logo>
                        <img src={LogoImage} alt=""/>
                        <LogoText>DropMeal</LogoText>
                    </Logo>
                    <Nav>
                        <LinkWrapper menuToggle={menuToggle}>
                            {children}
                        </LinkWrapper>
                    </Nav>
                    <ButtonWrapper>
                        <Button
                                backgroundColor='#EE3C19'
                                color='#fff'
                                width='163'
                                height='44'
                                borderRadius='22'
                                href='https://play.google.com/store/apps/details?id=com.dropmealngr'
                            >
                                Download Now
                        </Button>
                    </ButtonWrapper>
                {/* </Container> */}
   
            </Wrapper>
        </>
    );
}

export default NavBar;
