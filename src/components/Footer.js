import styled from 'styled-components'
import Logo from '../assests/drop meal logo.png'

const Link = styled.a`
    font-family: Mulish;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #8C8C8C;
`

const Text = styled.p`
    font-family: Mulish;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;
    margin-top: 30px;
`

const Footerheading = styled.h2`
    font-family: Mulish;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.015em;
    margin-bottom: 15px;
`

const Wrapper = styled.footer`
    padding-bottom: 44px;

`

const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    // border: solid green;
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

const FooterLeft = styled.div`
    margin-right: 2rem;
    @media screen and (max-width: 767px){
        margin-top: 1rem;
    }
`

const DropMealLogo = styled.div`
    display: flex;
    align-items: center;
`
const LogoText = styled.h1`
    font-family: Mulish;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.015em;
`

const FooterRight = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px){
        order: -1;
        justify-self: space-between;
    }
`

const FooterLinks = styled.div`
    margin-right: 90px;
`

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Wrapper>
            <Container>
                <FooterLeft>
                    <DropMealLogo>
                        <img src={Logo} alt="DropMeal Logo"/>
                        <LogoText>DropMeal</LogoText>
                    </DropMealLogo>
                    <Text>Copyright {getCurrentYear()} DropMeal All rights reserved</Text>
                    <p style={{ color: '#8C8C8C' }}><Link href="/">Terms of service</Link> | <Link href="/">Privacy Policy</Link></p>
                </FooterLeft>
                <FooterRight>
                    <FooterLinks>
                        <Footerheading>Company</Footerheading>
                        <ul>
                            <li><Link href="/">DropPay</Link></li>
                            <li><Link href="/">About us</Link></li>
                            <li><Link href="/">Contact us</Link></li>
                        </ul>
                    </FooterLinks>
                    <div>
                        <Footerheading>Resources</Footerheading>
                        <ul>
                            <li><Link href="/">Partnership</Link></li>
                            <li><Link href="/">Features</Link></li>
                        </ul>
                    </div>
                </FooterRight>
            </Container>
        </Wrapper>
    );
}

export default Footer;
