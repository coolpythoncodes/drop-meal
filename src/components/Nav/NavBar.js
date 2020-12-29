import styled from 'styled-components';
import Button from '../Button/Button';
import LogoImage from '../../assests/drop meal logo.png';

import '../../Sass/landingpage.scss';

const HamburgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 600px){
        display: block;
        position: fixed;
        top:34px;
        right:30px;
        z-index: 999;

    }

`

const MenuBtnLine = styled.div`
    width: 18px;
    height: 2px;
    margin-bottom: 4px;
    background: #F17C22;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
`

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 1rem;
    position: fixed;
    top: 0;
    background: #000;

    @media screen and (max-width: 600px){
        padding: 2rem;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 0.2;

    @media screen and (max-width: 600px){
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
    flex: 0.6;

    @media screen and (max-width: 600px){
        display: none;
    }
`
const LinkWrapper = styled.ul`
    display: flex;
    font-family: Mulish;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;
`
const ButtonWrapper = styled.div`
    flex: 0.2;

    @media screen and (max-width: 600px){
        display: none;
    }
`

const NavBar = ({ children }) => {
    return (
        <>
            <HamburgerMenu>
                <MenuBtnLine></MenuBtnLine>
                <MenuBtnLine></MenuBtnLine>
                <MenuBtnLine></MenuBtnLine>
            </HamburgerMenu>

            <Wrapper>
                <Container>
                    <Logo>
                        <img src={LogoImage} alt=""/>
                        <LogoText>DropMeal</LogoText>
                    </Logo>
                    <Nav>
                        <LinkWrapper>
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
                            >
                                Download Now
                        </Button>
                    </ButtonWrapper>
                </Container>
   
            </Wrapper>
        </>
    );
}

export default NavBar;
